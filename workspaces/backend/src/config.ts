import config from "config";

import { ConfigSchema } from "../config/schema";

const typedConfig = ConfigSchema.parse(config);

export default typedConfig;
