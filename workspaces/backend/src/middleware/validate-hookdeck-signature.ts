import type { Context, Next } from "hono";
import { createHmac } from "node:crypto";
import config from "@backend/src/config";

export default async function validateHookdeckSignature(
  c: Context,
  next: Next,
) {
  const signature = c.req.header("x-hookdeck-signature");
  const signature2 = c.req.header("x-hookdeck-signature-2");

  if (!c.req.raw.body) {
    c.status(403);
    return;
  }

  const hash = createHmac("sha256", config.hookdeck.signingSecret)
    .update(await c.req.text())
    .digest("base64");

  if (hash !== signature && hash !== signature2) {
    console.log("Request not originating from Hookdeck");
    c.status(403);
    return;
  }

  console.log("Hookdeck signature valid");
  await next();
}
