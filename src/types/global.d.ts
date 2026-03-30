// src/types/global.d.ts o vite-env.d.ts
declare global {
    interface Window {
      google: typeof import("google.maps");
    }
  }