CREATE TABLE "quiz_links" (
	"code" text PRIMARY KEY,
	"quiz" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
