declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SITE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
