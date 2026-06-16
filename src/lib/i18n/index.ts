import { browser } from "$app/environment";
import { init, locale as activeLocale, register } from "svelte-i18n";

export const fallbackLocale = "uk";
export const supportedLocales = ["uk","en","pt"];
export const localeCookieName = "locale";

register("uk", () => import("./uk.json"));
register("en", () => import("./en.json"));
register("pt", () => import("./pt.json"));

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

function resolveInitialLocale(serverLocale: string = fallbackLocale) {
    if (!browser)
        return serverLocale;

    const storedLocale = getCookie(localeCookieName);
    if (storedLocale && supportedLocales.includes(storedLocale))
        return storedLocale;

    const browserLocales = [
        window.navigator.language,
        window.navigator.language.split("-")[0]
    ];
    const browserLocale = browserLocales.find((locale) => supportedLocales.includes(locale));
    if (browserLocale)
        return browserLocale;

    return serverLocale;
}

export function setAppLocale(locale: string) {
    if (!supportedLocales.includes(locale))
        return;

    activeLocale.set(locale);

    setCookie(localeCookieName, locale);
}

export function initI18n(initialLocale: string = fallbackLocale) {
    return init({
        fallbackLocale,
        initialLocale: resolveInitialLocale(initialLocale),
        ignoreTag: true
    });
}
