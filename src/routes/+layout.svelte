
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
        

        // Page change animation
        import FadeTransition from "./FadeTransition.svelte";
        import { page } from "$app/state";

        let { data, children } = $props();

        function normalizePath(pathname: string) {
            let decoded = pathname;

            try {
                decoded = decodeURIComponent(pathname);
            } catch {
                decoded = pathname;
            }

            const normalized = decoded.replace(/\/+$/, "");
            return normalized || "/";
        }

        const heroCoverPagePaths = new Set(["/page","/"].map(normalizePath));

        settings.theme = resolveInitialTheme(data.theme);
        settings.language = resolveInitialLanguage(data.locale);
        let cookieConsent = $state(data.cookieConsent ?? getCookieConsent());
        let showCookieBanner = $derived(cookieConsent === undefined);
        let navbarOverHero = $derived(heroCoverPagePaths.has(normalizePath(page.url.pathname)));
        let navbarPositionClass = $derived(navbarOverHero ? "fixed inset-x-0 top-0 z-50" : "sticky top-0 z-50");
        let navbarSpacingClass = "px-4 pt-3";

        function toggleTheme() {
            setThemePreference(settings.theme === themes[0] ? themes[1] : themes[0]);
        }

        function setLanguage(language: string) {
            setLanguagePreference(language);
            
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
        <link rel="icon" href="/site-assets/84-pshenitsa_koloski_pole_144604_3840x2160.jpg" />
        <title>Site</title>
    </svelte:head>
    
    <!-- Navigation bar -->
    <header class="{navbarPositionClass}  w-full">
  <nav class="w-full flex items-center justify-between gap-4 rounded-none border border-base-content/10 bg-base-100/85 px-3 py-2 shadow-sm shadow-base-content/5 backdrop-blur-xl">
    <a href="/" class="flex min-w-0 items-center gap-2 rounded-full px-2 text-sm font-black tracking-tight text-base-content">
      <span class="flex h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-base-content/10 bg-base-200"><img src="/site-assets/84-pshenitsa_koloski_pole_144604_3840x2160.jpg" alt="" class="h-full w-full object-cover"></span>
      <span class="truncate">Site</span>
    </a>
    <ul class="menu menu-horizontal hidden min-w-0 flex-nowrap rounded-full bg-base-200/70 px-1 py-0.5 md:flex [&>li>a]:rounded-full [&>li>a]:px-3 [&>li>a]:py-1.5 [&>li>a]:text-sm [&>li>a]:font-medium [&>li>a]:text-base-content/60 [&>li>a:hover]:bg-base-100 [&>li>a:hover]:text-base-content">
      
    <li><a href="/About us">About us</a></li>
    <li><a href="/Privacy Policy">Privacy Policy</a></li>
    </ul>
    <div class="flex gap-3 items-center">
        
        
        <a class="btn btn-primary btn-sm rounded-full px-5 whitespace-nowrap" href="/page">Home</a>
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
      <span class="flex h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-base-content/10 bg-base-200"><img src="/site-assets/84-pshenitsa_koloski_pole_144604_3840x2160.jpg" alt="" class="h-full w-full object-cover"></span>
      <div class="min-w-0">
        <p class="truncate text-base font-black tracking-tight">Site</p>
        <p class="text-sm text-base-content/60">Copyright &copy; 2026 - All rights reserved by Site</p>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:items-end">
      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm [&>a]:text-base-content/65 [&>a]:transition-colors [&>a:hover]:text-primary">
    <a class="font-semibold text-base-content hover:text-primary" href="/page">Home</a>
    <a href="/About us">About us</a><a href="/Privacy Policy">Privacy Policy</a>
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
    