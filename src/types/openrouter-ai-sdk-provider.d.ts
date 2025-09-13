// Ambient module declaration for optional dependency used via dynamic import.
// This avoids TypeScript "Cannot find module" errors in editors when the
// type resolver lags, while the package provides its own .d.ts at runtime.
declare module "@openrouter/ai-sdk-provider" {
  // We intentionally keep this minimal; actual types are provided by the package.
  export const createOpenRouter: (opts: { apiKey?: string; baseURL?: string; extraBody?: Record<string, unknown> }) => (
    modelId: string,
    options?: any
  ) => any;
}
