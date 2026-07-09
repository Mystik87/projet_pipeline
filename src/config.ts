export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME ?? 'React Vite App',
  apiUrl: import.meta.env.VITE_API_URL ?? 'https://api.example.com',
  featureEnabled: import.meta.env.VITE_FEATURE_FLAG === 'true',
  runtimeMode: import.meta.env.VITE_RUNTIME_MODE ?? import.meta.env.MODE,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}
