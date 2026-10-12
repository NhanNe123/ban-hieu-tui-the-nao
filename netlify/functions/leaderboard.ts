import type { Config } from "@netlify/functions";
import { desc, asc } from "drizzle-orm";
import { db } from "../../db/index.js";
import { scores } from "../../db/schema.js";

const top = () =>
  db
    .select({ name: scores.name, score: scores.score, total: scores.total, createdAt: scores.createdAt })
    .from(scores)
    .orderBy(desc(scores.score), asc(scores.createdAt))
    .limit(20);

export default async (req: Request) => {
  if (req.method === "GET") return Response.json(await top());

  if (req.method === "POST") {
    let body: any;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }
    const name = String(body?.name ?? "").trim().slice(0, 24);
    const total = Number(body?.total);
    const score = Number(body?.score);
    if (!name || !Number.isInteger(total) || total < 1 || total > 50 || !Number.isInteger(score) || score < 0 || score > total) {
      return Response.json({ error: "Invalid score" }, { status: 400 });
    }
    await db.insert(scores).values({ name, score, total });
    return Response.json(await top(), { status: 201 });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config: Config = { path: "/api/leaderboard" };
