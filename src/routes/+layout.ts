import type { LayoutLoad } from "./$types";
import { waitLocale } from "svelte-i18n";
import { initI18n } from "$lib/i18n";

export const load: LayoutLoad = async ({ data }) => {
    await initI18n(data.locale);
    await waitLocale();

    return { locale: data.locale, theme: data.theme };
};
