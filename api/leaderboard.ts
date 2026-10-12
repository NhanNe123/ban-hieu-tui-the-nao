import { asc, desc, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { scores } from "../db/schema.js";

const top = (quizId: string) =>
  db
    .select({ name: scores.name, avatar: scores.avatar, score: scores.score, total: scores.total, createdAt: scores.createdAt })
    .from(scores)
    .where(eq(scores.quizId, quizId))
    .orderBy(desc(scores.score), asc(scores.createdAt))
    .limit(100);

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "GET") {
    const quizId = new URL(request.url).searchParams.get("quizId") ?? "";
    if (!/^[a-z0-9]{6,20}$/.test(quizId)) {
      return Response.json({ error: "Invalid quiz ID" }, { status: 400 });
    }
    return Response.json(await top(quizId), { headers: { "Cache-Control": "no-store" } });
  }

  if (request.method === "POST") {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }
    if (!body || typeof body !== "object") return Response.json({ error: "Invalid score" }, { status: 400 });
    const payload = body as Record<string, unknown>;
    const quizId = typeof payload.quizId === "string" ? payload.quizId : "";
    const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 24) : "";
    const avatar = typeof payload.avatar === "string" && payload.avatar.length <= 16 ? payload.avatar : "";
    const total = Number(payload.total);
    const score = Number(payload.score);
    if (!/^[a-z0-9]{6,20}$/.test(quizId) || !name || !avatar || !Number.isInteger(total) || total < 1 || total > 15 || !Number.isInteger(score) || score < 0 || score > total) {
      return Response.json({ error: "Invalid score" }, { status: 400 });
    }
    await db.insert(scores).values({ quizId, name, avatar, score, total });
    return Response.json(await top(quizId), { status: 201 });
  }

  return new Response("Method not allowed", { status: 405 });
}
