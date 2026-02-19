export const locales = ["mk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "mk";
