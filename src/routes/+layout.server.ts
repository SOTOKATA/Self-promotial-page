import type { LayoutServerLoad } from "./$types";

const fallbackLocale = "en";
const supportedLocales = ["en"];
const supportedThemes = ["studio-day","dark-webcraft"];
const localeCookieName = "locale";
const themeCookieName = "theme";
const cookieConsentName = "cookie-consent";

export const load: LayoutServerLoad = ({ cookies }) => {
    const storedCookieConsent = cookies.get(cookieConsentName);
    const cookieConsent = storedCookieConsent === "accepted" || storedCookieConsent === "rejected"
        ? storedCookieConsent
        : undefined;
    const canUsePreferenceCookies = cookieConsent === "accepted";
    const cookieLocale = canUsePreferenceCookies ? cookies.get(localeCookieName) : undefined;
    const locale = cookieLocale && supportedLocales.includes(cookieLocale)
        ? cookieLocale
        : fallbackLocale;
    const cookieTheme = canUsePreferenceCookies ? cookies.get(themeCookieName) : undefined;
    const theme = cookieTheme && supportedThemes.includes(cookieTheme)
        ? cookieTheme
        : null;

    return { locale, theme, cookieConsent };
};
