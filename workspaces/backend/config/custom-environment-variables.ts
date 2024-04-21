import type { PartialEnvConfig } from "./schema";

const config: PartialEnvConfig = {
  environment: "NODE_ENV",
  hookdeck: {
    signingSecret: "HOOKDECK_SIGNING_SECRET",
  },
};

export default config;
