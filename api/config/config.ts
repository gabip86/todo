import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

interface ENV {
  JWT: string | undefined;
  MONGO: string | undefined;
  PORT: string | undefined;
}

interface Config {
  JWT: string;
  MONGO: string;
  PORT: string;
}

const getConfig = (): ENV => {
  return {
    JWT: process.env.JWT,
    MONGO: process.env.MONGO,
    PORT: process.env.PORT,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
