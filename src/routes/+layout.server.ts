import type { LayoutServerLoad } from "./$types";

const fallbackLocale = "uk";
const supportedLocales = ["uk","en","pt"];
const supportedThemes = ["studio-day","violet"];
const localeCookieName = "locale";
const themeCookieName = "theme";

export const load: LayoutServerLoad = ({ cookies }) => {
    const cookieLocale = cookies.get(localeCookieName);
    const locale = cookieLocale && supportedLocales.includes(cookieLocale)
        ? cookieLocale
        : fallbackLocale;
    const cookieTheme = cookies.get(themeCookieName);
    const theme = cookieTheme && supportedThemes.includes(cookieTheme)
        ? cookieTheme
        : null;

    return { locale, theme };
};
