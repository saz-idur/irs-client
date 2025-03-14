// This file provides TypeScript type definitions for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    NODE_ENV: "development" | "production" | "test"
  }
}

