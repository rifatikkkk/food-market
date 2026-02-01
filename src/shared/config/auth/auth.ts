export const AuthProviders = {
  LOCAL: "LOCAL",
  GOOGLE: "GOOGLE",
} as const;

export type AuthProvidersType =
  (typeof AuthProviders)[keyof typeof AuthProviders];
