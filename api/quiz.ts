import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { quizLinks } from "../db/schema.js";

const CODE_LENGTH = 6;
const CODE_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const ACCEPTED_RANDOM_BYTE_LIMIT = Math.floor(256 / CODE_ALPHABET.length) * CODE_ALPHABET.length;
const MAX_BODY_BYTES = 100_000;

function isQuizPayload(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const quiz = value as Record<string, unknown>;
  if (typeof quiz.ownerName !== "string" || quiz.ownerName.trim().length < 1 || quiz.ownerName.length > 32) return false;
  if (typeof quiz.allowRetry !== "boolean" || typeof quiz.showAnswers !== "boolean") return false;
  if (typeof quiz.secretMessage !== "string" || quiz.secretMessage.length > 240) return false;
  if (!Number.isFinite(Number(quiz.secretThreshold)) || Number(quiz.secretThreshold) < 0 || Number(quiz.secretThreshold) > 100) return false;
  if (!Array.isArray(quiz.questions) || quiz.questions.length < 1 || quiz.questions.length > 15) return false;

  return quiz.questions.every((question: unknown) => {
    if (!question || typeof question !== "object" || Array.isArray(question)) return false;
    const item = question as Record<string, unknown>;
    return typeof item.q === "string" && item.q.trim().length > 0 && item.q.length <= 180
      && typeof item.emoji === "string" && item.emoji.length <= 8
      && Array.isArray(item.options) && item.options.length === 4
      && item.options.every((option: unknown) => typeof option === "string" && option.trim().length > 0 && option.length <= 120)
      && Number.isInteger(item.answer) && Number(item.answer) >= 0 && Number(item.answer) <= 3
      && typeof item.note === "string" && item.note.length <= 180;
  });
}

function createCode(): string {
  let code = "";
  while (code.length < CODE_LENGTH) {
    const random = crypto.getRandomValues(new Uint8Array(CODE_LENGTH - code.length));
    for (const byte of random) {
      if (byte < ACCEPTED_RANDOM_BYTE_LIMIT) code += CODE_ALPHABET[byte % CODE_ALPHABET.length];
      if (code.length === CODE_LENGTH) break;
    }
  }
  return code;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const requestedCode = url.searchParams.get("id") || "";
  const code = requestedCode.length === 4 ? requestedCode.toUpperCase() : requestedCode;
  if (!/^(?:[A-Za-z0-9]{6}|[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{4})$/.test(code)) {
    return Response.json({ error: "Invalid quiz code" }, { status: 400 });
  }

  const [record] = await db.select({ quiz: quizLinks.quiz }).from(quizLinks).where(eq(quizLinks.code, code)).limit(1);
  if (!record) return Response.json({ error: "Quiz not found" }, { status: 404 });
  return Response.json({ quiz: record.quiz }, { headers: { "Cache-Control": "public, max-age=60" } });
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) return Response.json({ error: "Quiz payload too large" }, { status: 413 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isQuizPayload(body) || new TextEncoder().encode(JSON.stringify(body)).length > MAX_BODY_BYTES) {
    return Response.json({ error: "Invalid quiz" }, { status: 400 });
  }

  for (let attempt = 0; attempt < 8; attempt++) {
    const code = createCode();
    try {
      const [inserted] = await db
        .insert(quizLinks)
        .values({ code, quiz: body })
        .onConflictDoNothing()
        .returning({ code: quizLinks.code });
      if (inserted) return Response.json({ code: inserted.code }, { status: 201 });
    } catch (error) {
      console.error("Failed to save short quiz link", error);
      return Response.json({ error: "Unable to save quiz link" }, { status: 500 });
    }
  }
  return Response.json({ error: "Unable to allocate a short quiz code" }, { status: 503 });
}
