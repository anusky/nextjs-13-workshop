import { rest } from "msw";

export const contactHandlers = [
  rest.get("/api/contact", (_req, res, ctx) => {
    return res(ctx.json({ name: "nextjs workshop" }));
  }),
  rest.get("http://localhost:3000/api/contact", (_req, res, ctx) => {
    return res(ctx.json({ name: "nextjs workshop" }));
  }),
];
