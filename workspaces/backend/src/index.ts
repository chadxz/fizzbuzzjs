import { serve } from "@hono/node-server";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { inspect } from "node:util";

const app = new Hono();
import validateHookdeckSignature from "@backend/src/middleware/validate-hookdeck-signature";

app.post("/shortcut", validateHookdeckSignature, async c => {
  console.log(
    "📥 received webhook",
    inspect(await c.req.json(), { depth: null }),
  );
  return c.json({ message: "accepted" });
});

app.get(
  "/fizzbuzz/:count",
  zValidator(
    "param",
    z.object({
      count: z.string().pipe(z.coerce.number().min(1)),
    }),
  ),
  c => {
    return c.json({
      message: `Fizbuzz ${c.req.param().count}!`,
    });
  },
);

console.log("✨ Listening on http://localhost:3000");
serve({ fetch: app.fetch, port: 3000 });
