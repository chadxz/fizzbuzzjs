import type { PartialConfig } from "./schema";

const config: PartialConfig = {
  environment: "development",
  hookdeck: {
    signingSecret: "",
  },
  logLevel: "debug",
};

export default config;
