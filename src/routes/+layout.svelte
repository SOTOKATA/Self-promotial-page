
    <script lang="ts">
        // Import TailwindCSS with DaisyUI plugin
        import "./layout.css";
        
        // Import settings
        import {
            applyLanguage,
            applyTheme,
            getCookieConsent,
            getLanguageName,
            resolveInitialLanguage,
            resolveInitialTheme,
            setCookieConsent,
            setLanguagePreference,
            setThemePreference,
            settings,
            themes
        } from '$lib/settings.svelte';
        import { browser } from '$app/environment';
        import { setAppLocale } from "$lib/i18n";

        // Page change animation
        import FadeTransition from "./FadeTransition.svelte";
        import { page } from "$app/state";

        let { data, children } = $props();

        const heroCoverPagePaths = new Set(["/About Us","/Home"]);

        function normalizePath(pathname: string) {
            const normalized = pathname.replace(/\/+$/, "");
            return normalized || "/";
        }

        settings.theme = resolveInitialTheme(data.theme);
        settings.language = resolveInitialLanguage(data.locale);
        let cookieConsent = $state(data.cookieConsent ?? getCookieConsent());
        let showCookieBanner = $derived(cookieConsent === undefined);
        let navbarOverHero = $derived(heroCoverPagePaths.has(normalizePath(page.url.pathname)));
        let navbarPositionClass = $derived(navbarOverHero ? "fixed inset-x-0 top-0 z-50" : "sticky top-0 z-50");
        let navbarSpacingClass = $derived(navbarOverHero ? "px-4 pt-3" : "px-4");

        function toggleTheme() {
            setThemePreference(settings.theme === themes[0] ? themes[1] : themes[0]);
        }

        function setLanguage(language: string) {
            setLanguagePreference(language);
            setAppLocale(language);
        }

        function acceptCookies() {
            setCookieConsent("accepted");
            setThemePreference(settings.theme);
            setLanguagePreference(settings.language);
            cookieConsent = "accepted";
        }

        function rejectCookies() {
            setCookieConsent("rejected");
            cookieConsent = "rejected";
        }

        $effect(() => {
            if (!browser) return;

            applyTheme(settings.theme);
            applyLanguage(settings.language);
        });
    </script>
    
    <svelte:head>
        <link rel="icon" href="/site-assets/56-pshenitsa_koloski_pole_144604_3840x2160.jpg" />
        <title>Self promotial page</title>
    </svelte:head>
    
    <!-- Navigation bar -->
    <header class="{navbarPositionClass} {navbarSpacingClass} w-full">
  <nav class="mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-full border border-base-content/10 bg-base-100/85 px-3 py-2 shadow-sm shadow-base-content/5 backdrop-blur-xl">
    <a href="/" class="flex min-w-0 items-center gap-2 rounded-full px-2 text-sm font-black tracking-tight text-base-content">
      <span class="flex h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-base-content/10 bg-base-200"><img src="/site-assets/56-pshenitsa_koloski_pole_144604_3840x2160.jpg" alt="" class="h-full w-full object-cover"></span>
      <span class="truncate">Self promotial page</span>
    </a>
    <ul class="menu menu-horizontal hidden min-w-0 flex-nowrap rounded-full bg-base-200/70 px-1 py-0.5 md:flex [&>li>a]:rounded-full [&>li>a]:px-3 [&>li>a]:py-1.5 [&>li>a]:text-sm [&>li>a]:font-medium [&>li>a]:text-base-content/60 [&>li>a:hover]:bg-base-100 [&>li>a:hover]:text-base-content">
      
    <li><a href="/About Us">About Us</a></li>
    </ul>
    <div class="flex gap-3 items-center">
        <button type="button" onclick={toggleTheme}
    class="btn btn-ghost btn-sm btn-circle"
    aria-label="Toggle theme">
  {#if settings.theme === themes[0]}
  <svg
    class="h-5 w-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  {:else}
  <svg
    class="h-5 w-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
  {/if}
</button>
        <div class="dropdown dropdown-end">
  <button type="button" tabindex="0" 
        class="btn btn-ghost btn-sm m-1 whitespace-nowrap uppercase">{settings.language}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </button>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 mt-1 w-max min-w-full max-w-[calc(100vw-2rem)] p-2 shadow-sm">
    <li><button type="button" class="capitalize whitespace-nowrap" onclick={() => setLanguage("en")}>English</button></li>
    <li><button type="button" class="capitalize whitespace-nowrap" onclick={() => setLanguage("pt")}>Portuguese</button></li>
    <li><button type="button" class="capitalize whitespace-nowrap" onclick={() => setLanguage("uk")}>Ukrainian</button></li>
  </ul>
</div>
        <a class="btn btn-primary btn-sm rounded-full px-5 whitespace-nowrap" href="/Home">Home</a>
    </div>
  </nav>
</header>
    
    <!-- Main content -->
    <FadeTransition key={page.url.pathname} hash={page.url.hash}>
        <div class=" mt-0 w-full flex flex-col gap-3 min-h-screen mb-24 ">
            {@render children()}
        </div>
    </FadeTransition>
    
    <!-- Footer -->
    <footer class=" border-t border-base-content/10 bg-base-100 px-5 py-8 text-base-content">
  <div class="w-full flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div class="flex min-w-0 items-center gap-3">
      <span class="flex h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-base-content/10 bg-base-200"><img src="/site-assets/56-pshenitsa_koloski_pole_144604_3840x2160.jpg" alt="" class="h-full w-full object-cover"></span>
      <div class="min-w-0">
        <p class="truncate text-base font-black tracking-tight">Self promotial page</p>
        <p class="text-sm text-base-content/60">Copyright &copy; 2026 - All rights reserved by Self promotial page</p>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:items-end">
      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm [&>a]:text-base-content/65 [&>a]:transition-colors [&>a:hover]:text-primary">
    <a class="font-semibold text-base-content hover:text-primary" href="/Home">Home</a>
    <a href="/About Us">About Us</a>
  </nav>
      
    </div>
  </div>
</footer>

    {#if showCookieBanner}
        <!-- Cookie banner -->
        <div class="fixed inset-x-0 bottom-0 z-50">
<section class="border-y border-base-300 bg-base-100 p-4">
    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
            <p class="font-semibold">Cookie banner</p>
            <p class="text-sm opacity-70">We use cookies to improve experience, analytics and performance.</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <button type="button" class="btn btn-sm btn-outline" onclick={rejectCookies}>Manage</button><button type="button" class="btn btn-sm" onclick={rejectCookies}>Reject</button><button type="button" class="btn btn-sm btn-primary" onclick={acceptCookies}>Accept all</button>
        </div>
    </div>
</section></div>
    {/if}
    