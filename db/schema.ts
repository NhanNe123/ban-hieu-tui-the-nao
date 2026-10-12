import { pgTable, serial, text, integer, timestamp, jsonb } from "drizzle-orm/pg-core";

export const scores = pgTable("scores", {
  id: serial().primaryKey(),
  quizId: text("quiz_id"),
  name: text().notNull(),
  avatar: text().notNull().default("🙂"),
  score: integer().notNull(),
  total: integer().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const quizLinks = pgTable("quiz_links", {
  code: text().primaryKey(),
  quiz: jsonb().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
