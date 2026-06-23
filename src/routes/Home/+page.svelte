<script lang="ts">
    import { _ } from "svelte-i18n";
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import { slide } from 'svelte/transition';
    
    let { data, form } = $props();
    
    
    let formProcess = $state<boolean>(false);
    
    const handleEnhance = (): SubmitFunction => {
        return () => {
            formProcess = true;
            return async ({ update }) => {
                formProcess = false;
                await update();
            };
        };
    };
</script>

<svelte:head>
    <title>Home</title>            
</svelte:head>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" style="background-image:url('/site-assets/73-pshenitsa_kolosia_pole_176911_1920x1080.jpg');background-size:cover;background-position:center;">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.72)_100%)]"></div>
    <div class="relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-55">New</p>
        <h1 class="mt-2 text-4xl font-bold leading-tight">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-85">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">{$_("ewewe")}</a><a class="btn btn-link" href="#">See demo</a></div>
    </div>
</section>
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
<!-- awardsBadges -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <h3 class="text-2xl font-bold">Awards & Badges</h3>
    <p class="mt-2 opacity-70">Recognition from industry programs and partner networks.</p>
    <div class="mt-6 grid gap-3 md:grid-cols-2">
        
            <div class="rounded-xl border border-base-300 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">2026</p>
                <h4 class="mt-1 font-semibold">Top Product</h4>
                <p class="mt-1 text-sm opacity-70">Product Awards</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">2025</p>
                <h4 class="mt-1 font-semibold">Design Excellence</h4>
                <p class="mt-1 text-sm opacity-70">UX Guild</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">2024</p>
                <h4 class="mt-1 font-semibold">Partner of the Year</h4>
                <p class="mt-1 text-sm opacity-70">Nova Alliance</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">2026</p>
                <h4 class="mt-1 font-semibold">Security Verified</h4>
                <p class="mt-1 text-sm opacity-70">Trust Council</p>
            </div>
        
    </div>
</section></div>
<!-- galleryMedia -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-center text-2xl font-bold">Gallery & Media</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Showcase images, media highlights and moments from your work.</p>
    <div class="mt-6 grid gap-3 md:grid-cols-4">
        
            <figure class="overflow-hidden rounded-xl border border-base-300 md:col-span-2 md:row-span-2">
                <div class="h-84 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Launch Day</figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 ">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Workshop</figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 ">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Customer Story</figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 ">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Product Detail</figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 ">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Conference</figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 ">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
                <figcaption class="px-3 py-2 text-sm font-medium">Behind the scenes</figcaption>
            </figure>
        
    </div>
</section></div>
<!-- testimonial -->
<div class=" mx-auto  container   max-w-5xl "><section class="rounded-2xl p-6">
    <h3 class="text-3xl font-bold">Testimonial</h3>
    <p class="mt-2 opacity-75">About Testimonial</p>
    <div class="mt-6 grid gap-4 sm:grid-cols-3">
        
        <blockquote class="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6">
            <p class="grow text-lg leading-relaxed">This product seriously reduced our launch time.</p>
            
        <footer class="mt-5 flex items-center gap-3 border-t border-base-300 pt-4">
            <img class="h-11 w-11 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Alex" />
            <div class="min-w-0">
                <div class="truncate font-semibold">Alex</div>
                <div class="truncate text-sm opacity-70">Product Manager</div>
            </div>
        </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6">
            <p class="grow text-lg leading-relaxed">The most intuitive interface we've ever worked with. Our team adopted it in just one day.</p>
            
        <footer class="mt-5 flex items-center gap-3 border-t border-base-300 pt-4">
            <img class="h-11 w-11 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Sarah" />
            <div class="min-w-0">
                <div class="truncate font-semibold">Sarah</div>
                <div class="truncate text-sm opacity-70">Lead Designer</div>
            </div>
        </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6">
            <p class="grow text-lg leading-relaxed">Customer support is top-notch. They helped us resolve a complex integration issue in minutes.</p>
            
        <footer class="mt-5 flex items-center gap-3 border-t border-base-300 pt-4">
            <img class="h-11 w-11 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Michael" />
            <div class="min-w-0">
                <div class="truncate font-semibold">Michael</div>
                <div class="truncate text-sm opacity-70">CTO</div>
            </div>
        </footer>
        </blockquote>
    </div>
</section></div>
<!-- contactForm -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="grid gap-6 md:grid-cols-2">
        <div>
            <h3 class="text-2xl font-bold">Contact us</h3>
            <p class="mt-2 opacity-75">Tell us about your project and we will get back shortly.</p>
            <div class="mt-5 space-y-2 text-sm opacity-70"><p>team@example.com</p><p>+1 (555) 010-2001</p><p>21 Market Street, Lisbon</p></div>
        </div>
        <form method="POST" action="?/contactForm" use:enhance={handleEnhance()} class="space-y-3 rounded-xl border border-base-300 bg-base-50 p-4">
            <input required type="text" name="name"  placeholder="Full name" class="input input-bordered w-full" />
            <input required type="email" name="email" placeholder="Work email" class="input input-bordered w-full" />
            <input required type="text" name="subject" placeholder="Subject" class="input input-bordered w-full" />
            <textarea required name="message" class="textarea textarea-bordered min-h-28 w-full" placeholder="How can we help?"></textarea>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   

            <button type="submit" disabled={formProcess} class="btn btn-primary">Send message</button>
        </form>
    </div>
</section></div>