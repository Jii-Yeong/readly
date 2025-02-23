declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    readonly NEXT_PUBLIC_READLY_API_URL: string;
  }
}