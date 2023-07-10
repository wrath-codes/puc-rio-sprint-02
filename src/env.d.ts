/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_READ_ACCESS_TOKEN: string
  readonly VITE_API_KEY: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_PUBLIC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}