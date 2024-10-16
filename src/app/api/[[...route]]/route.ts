import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json("API Jira Clone");
});

export const GET = handle(app);
