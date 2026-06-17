import { browser } from "$app/environment";

export const themes = ["paper-mint","midnight-lime"] as const;
export const languages = ["en","pt","uk"] as const;
export const languageNames = {"en":"English","pt":"Portuguese","uk":"Ukrainian"} as const;
export const themeCookieName = "theme";
export const localeCookieName = "locale";
export const cookieConsentName = "cookie-consent";

export type Theme = typeof themes[number];
export type Language = typeof languages[number];
export type CookieConsent = "accepted" | "rejected";

export const settings = $state<{
    theme: Theme;
    language: Language;
}>({
    theme: themes[0],
    language: languages[0]
});

function getCookie(name: string) {
    if (!browser)
        return undefined;

    const value = document.cookie
        .split("; ")
        .find((part) => part.startsWith(name + "="))
        ?.split("=")
        .slice(1)
        .join("=");

    if (!value)
        return undefined;

    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
}

function setCookie(name: string, value: string) {
    if (!browser)
        return;

    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

function deleteCookie(name: string) {
    if (!browser)
        return;

    document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

export function getCookieConsent(): CookieConsent | undefined {
    const consent = getCookie(cookieConsentName);
    return consent === "accepted" || consent === "rejected"
        ? consent
        : undefined;
}

export function canStorePreferences() {
    return getCookieConsent() === "accepted";
}

export function setCookieConsent(consent: CookieConsent) {
    setCookie(cookieConsentName, consent);

    if (consent === "rejected") {
        deleteCookie(themeCookieName);
        deleteCookie(localeCookieName);
    }
}

function setPreferenceCookie(name: string, value: string) {
    if (canStorePreferences())
        setCookie(name, value);
}

function isTheme(theme: unknown): theme is Theme {
    return typeof theme === "string" && themes.includes(theme as Theme);
}

function isLanguage(language: unknown): language is Language {
    return typeof language === "string" && languages.includes(language as Language);
}

function getSystemTheme(): Theme {
    if (!browser)
        return themes[0];

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themes[1]
        : themes[0];
}

function getBrowserLanguage(): Language | undefined {
    if (!browser)
        return undefined;

    const browserLocales = [
        window.navigator.language,
        window.navigator.language.split("-")[0]
    ];

    return browserLocales.find(isLanguage);
}

export function resolveInitialTheme(serverTheme?: string | null): Theme {
    if (isTheme(serverTheme))
        return serverTheme;

    const cookieTheme = canStorePreferences() ? getCookie(themeCookieName) : undefined;
    if (isTheme(cookieTheme))
        return cookieTheme;

    return getSystemTheme();
}

export function resolveInitialLanguage(serverLanguage?: string | null): Language {
    const cookieLanguage = canStorePreferences() ? getCookie(localeCookieName) : undefined;
    if (isLanguage(cookieLanguage))
        return cookieLanguage;

    return getBrowserLanguage()
        ?? (isLanguage(serverLanguage) ? serverLanguage : undefined)
        ?? languages[0];
}

export function applyTheme(theme: string) {
    if (!browser || !isTheme(theme))
        return;

    document.documentElement.setAttribute("data-theme", theme);
}

export function applyLanguage(language: string) {
    if (!browser || !isLanguage(language))
        return;

    document.documentElement.lang = language;
}

export function getLanguageName(language: string) {
    return isLanguage(language)
        ? languageNames[language]
        : language.toUpperCase();
}

export function setThemePreference(theme: string) {
    if (!isTheme(theme))
        return;

    settings.theme = theme;
    applyTheme(theme);
    setPreferenceCookie(themeCookieName, theme);
}

export function setLanguagePreference(language: string) {
    if (!isLanguage(language))
        return;

    settings.language = language;
    applyLanguage(language);
    setPreferenceCookie(localeCookieName, language);
}