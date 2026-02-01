import { AuthProviders, type AuthProvidersType } from "./auth/auth";
import {
  languageIconList,
  type SupportedLngsType,
} from "./i18n/LanguageIconList";
import { AppRoutes, routePaths } from "./router/routePaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export {
  AppRoutes,
  routePaths,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  languageIconList,
  useTheme,
  AuthProviders,
  type ThemeType,
  type SupportedLngsType,
  type AuthProvidersType,
};
