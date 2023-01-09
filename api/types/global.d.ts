declare namespace NodeJS {
  interface ProcessEnv {
    JWT: string;
    MONGO: string;
    PORT: string;
  }
}
