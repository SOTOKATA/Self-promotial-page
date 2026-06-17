<script lang="ts">
    import { _ } from "svelte-i18n";
    
    
    
    
    let { data, form } = $props();
    
    
</script>

<svelte:head>
    <title>Home</title>            
</svelte:head>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" style="background-image:url('/site-assets/52-pole_pshenitsa_derevia_976131_3840x2160.jpg');background-size:cover;background-position:center;">
    <div class="absolute inset-0 bg-gradient-to-br from-black/60 to-black/42"></div>
    <div class="relative z-10 mx-auto max-w-3xl py-20 text-center text-white">
        <span class="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">{$_("submit")}</span>
        <h1 class="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight">{$_("pages.home.blocks.herocover_4450cc65-0b3e-464c-b3b3-cdf40f19c2df.title")}</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-80">{$_("pages.home.blocks.herocover_4450cc65-0b3e-464c-b3b3-cdf40f19c2df.description")}</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">About us</a><a class="btn btn-outline" href="https://hours-watcher.vercel.app/private/dashboard">Hours Watcher</a></div>
    </div>
</section>
<!-- statsPanel -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="p-6">
    
    <div class="mb-6 flex h-full flex-row items-center gap-3 sm:flex-wrap">
        <h3 class="text-xl font-semibold">{$_("pages.home.blocks.statspanel_f8935912-dd91-4fd1-b69f-f6b6debf0423.title")}</h3>
        <p class="opacity-75">Description about represented numbers</p>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="text-2xl font-bold">12k+</div>
            <div class="mt-1 text-sm opacity-70">{$_("pages.home.blocks.statspanel_f8935912-dd91-4fd1-b69f-f6b6debf0423.items.0.label")}</div>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="text-2xl font-bold">98%</div>
            <div class="mt-1 text-sm opacity-70">Satisfaction</div>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="text-2xl font-bold">24/7</div>
            <div class="mt-1 text-sm opacity-70">Support</div>
        </div>
    </div>
</section></div>
<!-- galleryMedia -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Gallery & Media</h3>
    <p class="mt-2 opacity-75">Showcase images, media highlights and moments from your work.</p>
    <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/site-assets/57-peyzazh-peyzazhi-priroda-pole.jpg" alt="/site-assets/57-peyzazh-peyzazhi-priroda-pole.jpg" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Launch Day</p>
                    <p class="opacity-65">Product reveal on stage</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/site-assets/56-pshenitsa_koloski_pole_144604_3840x2160.jpg" alt="/site-assets/56-pshenitsa_koloski_pole_144604_3840x2160.jpg" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Workshop</p>
                    <p class="opacity-65">Hands-on training session</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/site-assets/47-46725-prodovolstvennoe_zerno-nebo-pole-zakat-semeystvo_travy-192.jpg" alt="/site-assets/47-46725-prodovolstvennoe_zerno-nebo-pole-zakat-semeystvo_travy-192.jpg" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Customer Story</p>
                    <p class="opacity-65">Team interview clip</p>
                </figcaption>
            </figure>
        
    </div>
</section></div>
<!-- aboutUs -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl bg-base-100 p-6">
    <div class="grid gap-6 md:grid-cols-2">
        <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">Who we are</p>
            <h3 class="mt-2 text-3xl font-bold">About us</h3>
            <p class="mt-3 opacity-80">A small team building fast products with care.</p>
            <p class="mt-4 text-sm opacity-70">We combine design, engineering and business strategy to help teams ship better web experiences.</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <div class="rounded-xl bg-base-200/70 p-4">
                <div class="text-2xl font-bold">120+</div>
                <div class="text-sm opacity-70">Projects</div>
            </div>
            <div class="rounded-xl bg-base-200/70 p-4">
                <div class="text-2xl font-bold">18</div>
                <div class="text-sm opacity-70">Countries</div>
            </div>
            <div class="rounded-xl bg-base-200/70 p-4">
                <div class="text-2xl font-bold">99%</div>
                <div class="text-sm opacity-70">Client retention</div>
            </div></div>
    </div>
</section></div>