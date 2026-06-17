<script lang="ts">
    
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
    <title>test</title>            
</svelte:head>
<!-- contactForm -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Contact us</h3>
    <p class="mt-2 opacity-75">Tell us about your project and we will get back shortly.</p>
    <form method="POST" action="?/contactForm" use:enhance={handleEnhance()} class="mt-6 space-y-3 rounded-xl border border-base-300 bg-base-100 p-4">
        <input required type="text" name="name" placeholder="Name" class="input input-bordered w-full" />
        <input required type="email" name="email" placeholder="Email" class="input input-bordered w-full" />
        <input required type="text" name="subject" placeholder="Subject" class="input input-bordered w-full" />
        <textarea required name="message" class="textarea textarea-bordered min-h-28 w-full" placeholder="Message"></textarea>
        
        {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
        
        <button type="submit" disabled={formProcess} class="btn btn-primary w-full">Send message</button>
    </form>
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
<!-- contactForm -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <h3 class="text-center text-2xl font-bold">Contact us</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Tell us about your project and we will get back shortly.</p>
    <form method="POST" action="?/contactForm" use:enhance={handleEnhance()} class="mx-auto mt-6 w-full gap-3 rounded-xl bg-base-100 p-4">
        <div class="mb-3 flex flex-row gap-3">
            <div class="flex w-full flex-col gap-2">
                <input required type="text" name="name" placeholder="Name" class="input w-full input-bordered" />
                <input required type="email" name="email" placeholder="Email" class="input w-full input-bordered" />
                <input required type="text" name="company" placeholder="Company" class="input w-full input-bordered" />
                <input required type="text" name="subject" placeholder="Subject" class="input input-bordered w-full" />
            </div>
            <textarea required name="message" class="textarea w-full textarea-bordered" placeholder="Message"></textarea>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
        </div>
        <button type="submit" disabled={formProcess} class="btn btn-primary md:col-span-2">Send message</button>
    </form>
</section></div>
<!-- newsletter -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6 text-center">
    <h3 class="text-2xl font-bold">Newsletter</h3>
    <p class="mx-auto mt-2 max-w-2xl opacity-75">Get updates, product notes and practical ideas every week.</p>
    <div class="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
        <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-md" />
        <button type="button" class="btn btn-primary">Subscribe</button>
    </div>
</section></div>
<!-- newsletter -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="grid items-center gap-5 md:grid-cols-2">
        <div>
            <h3 class="text-2xl font-bold">Newsletter</h3>
            <p class="mt-2 opacity-75">Get updates, product notes and practical ideas every week.</p>
        </div>
        <div class="rounded-xl border border-base-300 bg-base-50 p-4">
            <input type="email" placeholder="Enter your email" class="input input-bordered w-full" />
            <button type="button" class="btn btn-primary mt-3 w-full">Subscribe</button>
        </div>
    </div>
</section></div>
<!-- newsletter -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
            <h3 class="text-xl font-bold">Newsletter</h3>
            <p class="mt-1 opacity-75">Get updates, product notes and practical ideas every week.</p>
        </div>
        <div class="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
            <input type="email" placeholder="Enter your email" class="input input-bordered w-full" />
            <button type="button" class="btn btn-primary">Subscribe</button>
        </div>
    </div>
</section></div>
<!-- login -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <div class="mx-auto w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-5">
        <h3 class="text-2xl font-bold">Login</h3>
        <p class="mt-1 text-sm opacity-70">Access your workspace and continue editing.</p>
        <form method="POST" action="?/login" use:enhance={handleEnhance()} class="mt-4 space-y-3">
            <label for="email" class="fieldset-label">Email</label>
            <input required type="email" name="email" class="input input-bordered w-full" />
            <label for="password" class="fieldset-label">Password</label>
            <input required type="password" name="password" class="input input-bordered w-full" />
            <div class="flex items-center justify-between text-sm">
            <label for="saveMe" class="label cursor-pointer gap-2">
                <input name="saveMe" type="checkbox" class="checkbox checkbox-sm" />
                <span>Remember me</span>
            </label><a href="#" class="link link-hover">Forgot password?</a></div>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
            
            <button type="submit" disabled={formProcess} class="btn btn-primary w-full">Login</button>
        </form>
    </div>
</section></div>
<!-- login -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="grid items-center gap-5 md:grid-cols-2">
        <div>
            <h3 class="text-2xl font-bold">Login</h3>
            <p class="mt-2 opacity-75">Access your workspace and continue editing.</p>
            <div class="mt-4 text-sm opacity-65">Secure sign-in with your email and password.</div>
        </div>
        <form method="POST" action="?/login" use:enhance={handleEnhance()} class="space-y-3 rounded-xl border border-base-300 bg-base-50 p-4">
            <input required type="email" name="email" placeholder="Email" class="input input-bordered w-full" />
            <input required type="password" name="password" placeholder="Password" class="input input-bordered w-full" />
            
            <label for="saveMe" class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" name="saveMe" class="checkbox checkbox-sm" />
                <span class="label-text">Remember me</span>
            </label>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
            
            <button type="submit" disabled={formProcess} class="btn btn-primary">Login</button>
        </form>
    </div>
</section></div>
<!-- login -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <div class="mx-auto w-full max-w-lg rounded-xl bg-base-100 p-5 shadow-sm">
        <h3 class="text-center text-2xl font-bold">Login</h3>
        <p class="mt-1 text-center text-sm opacity-70">Access your workspace and continue editing.</p>
        <form method="POST" action="?/login" use:enhance={handleEnhance()} class="mt-4 grid gap-3">
            <input required type="email" name="email" placeholder="Email" class="input input-bordered w-full" />
            <input required type="password" name="password" placeholder="Password" class="input input-bordered w-full" />
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}        
    
            <button type="submit" disabled={formProcess} class="btn btn-primary w-full">Login</button>
            <a href="#" class="link link-hover text-center text-sm">Forgot password?</a>
        </form>
    </div>
</section></div>
<!-- register -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <div class="mx-auto w-full max-w-lg rounded-2xl border border-base-300 bg-base-100 p-5">
        <h3 class="text-2xl font-bold">Register</h3>
        <p class="mt-1 text-sm opacity-70">Create an account to start building pages.</p>
        <form method="POST" action="?/register" use:enhance={handleEnhance()} class="mt-4 grid gap-3">
            <input required type="email" name="email" placeholder="Email" class="input input-bordered w-full" />
            <input required type="password" name="password" placeholder="Password" class="input input-bordered w-full" />
            <input required type="password" name="passwordRepeat" placeholder="Repeat password" class="input input-bordered w-full" />
            <label for="saveMe" class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" name="saveMe" class="checkbox checkbox-sm" />
                <span class="label-text">Save me</span>
            </label>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   

            <button type="submit"  disabled={formProcess} class="btn btn-primary w-full">Create account</button>
        </form>
    </div>
</section></div>
<!-- register -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="grid gap-5 md:grid-cols-2">
        <div>
            <h3 class="text-2xl font-bold">Register</h3>
            <p class="mt-2 opacity-75">Create an account to start building pages.</p>
            <p class="mt-4 text-sm opacity-65">Create your account in less than a minute.</p>
        </div>
        <form method="POST" action="?/register" use:enhance={handleEnhance()} class="space-y-3 rounded-xl border border-base-300 bg-base-50 p-4">
            <input required type="email" name="email" placeholder="Email" class="input input-bordered w-full" />
            <input required type="password" name="password" placeholder="Password" class="input input-bordered w-full" />
            <input required type="password" name="passwordRepeat" placeholder="Repeat password" class="input input-bordered w-full" />
            <label for="saveMe" class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" name="saveMe" class="checkbox checkbox-sm" />
                <span class="label-text">Save me</span>
            </label>
           
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
           
            <button type="submit" disabled={formProcess} class="btn btn-primary">Create account</button>
        </form>
    </div>
</section></div>
<!-- register -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <div class="mx-auto w-full max-w-xl rounded-xl bg-base-100 p-5 shadow-sm">
        <h3 class="text-center text-2xl font-bold">Register</h3>
        <p class="mt-2 text-center opacity-75">Create an account to start building pages.</p>
        <form method="POST" action="?/register" use:enhance={handleEnhance()} class="mt-5 grid gap-3 md:grid-cols-2">
            <input required type="email" name="email" placeholder="Email" class="input input-bordered md:col-span-2" />
            <input required type="password" name="password" placeholder="Password" class="input input-bordered" />
            <input required type="password" name="passwordRepeat" placeholder="Repeat password" class="input input-bordered" />
            <label for="saveMe" class="label cursor-pointer justify-start gap-2 md:col-span-2">
                <input type="checkbox" name="saveMe" class="checkbox checkbox-sm" />
                <span class="label-text">Save me</span>
            </label>
           
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
           
            <button type="submit" disabled={formProcess} class="btn btn-primary md:col-span-2">Create account</button>
        </form>
    </div>
</section></div>
<!-- hero -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-8 text-center">
    <span class="badge badge-primary">New</span>
    <h1 class="mx-auto mt-3 max-w-3xl text-4xl font-bold">Build pages faster</h1>
    <p class="mx-auto mt-4 max-w-2xl opacity-80">Compose sections with reusable blocks and ship in minutes.</p>
    <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-outline" href="#">See demo</a></div>
</section></div>
<!-- hero -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200 p-8">
    <div class="grid items-center gap-6 md:grid-cols-2">
        <div>
            <span class="badge badge-outline">New</span>
            <h1 class="mt-3 text-4xl font-bold">Build pages faster</h1>
            <p class="mt-4 opacity-80">Compose sections with reusable blocks and ship in minutes.</p>
            <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-ghost" href="#">See demo</a></div>
        </div>
        <div class="h-48 rounded-2xl border border-dashed border-base-300 bg-base-100/60"></div>
    </div>
</section></div>
<!-- hero -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/30 bg-primary/10 p-8">
    <div class="mx-auto max-w-4xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">New</p>
        <h1 class="mt-2 text-4xl font-bold">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-85">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-link" href="#">See demo</a></div>
    </div>
</section></div>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" >
    <div class="absolute inset-0 bg-gradient-to-br from-black/60 to-black/42"></div>
    <div class="relative z-10 mx-auto max-w-3xl py-20 text-center text-white">
        <span class="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">New</span>
        <h1 class="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-80">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-outline" href="#">See demo</a></div>
    </div>
</section>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center min-h-screen" >
    <div class="absolute inset-0 bg-linear-to-r from-black/60 via-black/36 to-transparent"></div>
    <div class="relative z-10 mx-auto w-full max-w-6xl py-20 text-white">
        <div class="max-w-lg">
            <span class="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">New</span>
            <h1 class="mt-3 text-4xl font-bold leading-tight">Build pages faster</h1>
            <p class="mt-4 opacity-80">Compose sections with reusable blocks and ship in minutes.</p>
            <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-ghost" href="#">See demo</a></div>
        </div>
    </div>
</section>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" >
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.72)_100%)]"></div>
    <div class="relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-55">New</p>
        <h1 class="mt-2 text-4xl font-bold leading-tight">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-85">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-link" href="#">See demo</a></div>
    </div>
</section>
<!-- feature -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <div class="grid gap-6 md:grid-cols-2">
        <div>
            <h3 class="text-3xl font-bold">Features</h3>
            <p class="mt-2 opacity-75">Everything you need to ship modern pages.</p>
        </div>
        <div class="space-y-3">
            
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Reusable sections</div>
            <p class="mt-2 text-sm opacity-75">Create once and reuse everywhere.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Fast editing</div>
            <p class="mt-2 text-sm opacity-75">Update content directly in construct mode.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Responsive layout</div>
            <p class="mt-2 text-sm opacity-75">Looks clean on desktop and mobile.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Theme ready</div>
            <p class="mt-2 text-sm opacity-75">Works with your theme tokens.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Drag and drop</div>
            <p class="mt-2 text-sm opacity-75">Reorder and compose faster.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="font-semibold">Production focused</div>
            <p class="mt-2 text-sm opacity-75">Built for real shipping workflows.</p>
        </div>
        </div>
    </div>
</section></div>
<!-- feature -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-center text-3xl font-bold">Features</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Everything you need to ship modern pages.</p>
    <div class="mt-6 grid gap-3 sm:grid-cols-2">
        
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Reusable sections</div>
            <p class="mt-2 text-sm opacity-75">Create once and reuse everywhere.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Fast editing</div>
            <p class="mt-2 text-sm opacity-75">Update content directly in construct mode.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Responsive layout</div>
            <p class="mt-2 text-sm opacity-75">Looks clean on desktop and mobile.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Theme ready</div>
            <p class="mt-2 text-sm opacity-75">Works with your theme tokens.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Drag and drop</div>
            <p class="mt-2 text-sm opacity-75">Reorder and compose faster.</p>
        </div>
        <div class="rounded-xl border border-base-300 p-3">
            <div class="font-semibold">Production focused</div>
            <p class="mt-2 text-sm opacity-75">Built for real shipping workflows.</p>
        </div>
    </div>
</section></div>
<!-- feature -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-3xl font-bold">Features</h3>
    <p class="mt-2 opacity-75">Everything you need to ship modern pages.</p>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Reusable sections</div>
            <p class="mt-2 text-sm opacity-75">Create once and reuse everywhere.</p>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Fast editing</div>
            <p class="mt-2 text-sm opacity-75">Update content directly in construct mode.</p>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Responsive layout</div>
            <p class="mt-2 text-sm opacity-75">Looks clean on desktop and mobile.</p>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Theme ready</div>
            <p class="mt-2 text-sm opacity-75">Works with your theme tokens.</p>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Drag and drop</div>
            <p class="mt-2 text-sm opacity-75">Reorder and compose faster.</p>
        </div>
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="font-semibold">Production focused</div>
            <p class="mt-2 text-sm opacity-75">Built for real shipping workflows.</p>
        </div>
    </div>
</section></div>
<!-- pricing -->
<div class=" mx-auto  container   max-w-5xl ">
<h3 class="text-3xl font-bold">Pricing</h3>
        <p class="mt-2 opacity-75">Pick a plan that matches your stage.</p><div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

    <article class="rounded-xl border border-base-300 p-4">
        
        <h4 class="font-semibold">Starter</h4>
        <p class="mt-2 text-3xl font-bold">$19<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 space-y-1 text-sm">
            <li>- 1 project</li><li>- Email support</li><li>- Basic analytics</li>
        </ul>
    </article>

    <article class="rounded-xl border border-base-300 p-4">
        
        <h4 class="font-semibold">Growth</h4>
        <p class="mt-2 text-3xl font-bold">$49<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 space-y-1 text-sm">
            <li>- 10 projects</li><li>- Priority support</li><li>- Advanced analytics</li>
        </ul>
    </article>

    <article class="rounded-xl border border-base-300 p-4">
        
        <h4 class="font-semibold">Scale</h4>
        <p class="mt-2 text-3xl font-bold">$99<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 space-y-1 text-sm">
            <li>- Unlimited projects</li><li>- Dedicated support</li><li>- Team access</li>
        </ul>
    </article>

</div></div>
<!-- pricing -->
<div class=" mx-auto  container   max-w-5xl ">
<h3 class="text-3xl font-bold">Pricing</h3>
        <p class="mt-2 opacity-75">Pick a plan that matches your stage.</p><div class="mt-6 grid gap-4 md:grid-cols-2">
    
        <article class="rounded-xl border border-base-300 p-5">
            
        <h4 class="font-semibold">Starter</h4>
        <p class="mt-2 text-3xl font-bold">$19<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 space-y-1 text-sm">
            <li>- 1 project</li><li>- Email support</li><li>- Basic analytics</li>
        </ul>
        </article>
    
        <article class="rounded-xl border border-base-300 p-5">
            
        <h4 class="font-semibold">Growth</h4>
        <p class="mt-2 text-3xl font-bold">$49<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 space-y-1 text-sm">
            <li>- 10 projects</li><li>- Priority support</li><li>- Advanced analytics</li>
        </ul>
        </article>
    
</div>

    <article class="mt-4 rounded-xl border border-dashed border-base-300 p-5">
        
        <h4 class="font-semibold">Scale</h4>
        <p class="mt-2 text-3xl font-bold">$99<span class="text-sm opacity-70">/mo</span></p>
        <ul class="mt-4 grid gap-1 text-sm md:grid-cols-3">
            <li>- Unlimited projects</li><li>- Dedicated support</li><li>- Team access</li>
        </ul>
    </article>
</div>
<!-- pricing -->
<div class=" mx-auto  container   max-w-5xl ">
<h3 class="text-3xl font-bold">Pricing</h3>
        <p class="mt-2 opacity-75">Pick a plan that matches your stage.</p><div class="mt-6 overflow-x-auto">
    <table class="table">
        <thead>
            <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Top features</th>
            </tr>
        </thead>
        <tbody>
            
                <tr>
                    <td>Starter</td>
                    <td>$19/mo</td>
                    <td>1 project, Email support</td>
                </tr>
            
                <tr>
                    <td>Growth</td>
                    <td>$49/mo</td>
                    <td>10 projects, Priority support</td>
                </tr>
            
                <tr>
                    <td>Scale</td>
                    <td>$99/mo</td>
                    <td>Unlimited projects, Dedicated support</td>
                </tr>
            
        </tbody>
    </table>
</div></div>
<!-- ctaBanner -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 ">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
            <h3 class="text-2xl font-bold">Ready to launch your next page?</h3>
            <p class="mt-2 opacity-80">Compose your layout with blocks and publish in minutes</p>
        </div>
        <a class="btn btn-primary" href="#">Get Started</a>
    </div>
</section></div>
<!-- howItWorks -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">How it works</h3>
    <p class="mt-2 opacity-75">A clear path from setup to delivery in a few steps.</p>
    <div class="mt-6 grid gap-3 md:grid-cols-3">
        
            <div class="rounded-xl border border-base-300 bg-base-100 p-4">
                <span class="badge badge-primary">Step 1</span>
                <h4 class="mt-3 font-semibold">Define the structure</h4>
                <p class="mt-2 text-sm opacity-70">Pick sections and choose a variant for each one.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 bg-base-100 p-4">
                <span class="badge badge-primary">Step 2</span>
                <h4 class="mt-3 font-semibold">Customize content</h4>
                <p class="mt-2 text-sm opacity-70">Edit copy, actions and details directly from the inspector.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 bg-base-100 p-4">
                <span class="badge badge-primary">Step 3</span>
                <h4 class="mt-3 font-semibold">Publish and iterate</h4>
                <p class="mt-2 text-sm opacity-70">Export your page and keep improving it with reusable blocks.</p>
            </div>
        
    </div>
</section></div>
<!-- howItWorks -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <h3 class="text-2xl font-bold">How it works</h3>
    <p class="mt-2 opacity-75">A clear path from setup to delivery in a few steps.</p>
    <ul class="timeline timeline-vertical mt-6">
        
            <li>
                <div class="timeline-start font-semibold">Define the structure</div>
                <div class="timeline-middle">
                    <div class="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div class="timeline-end mb-6 text-sm opacity-70">Pick sections and choose a variant for each one.</div>
                <hr />
            </li>
        
            <li>
                <div class="timeline-start font-semibold">Customize content</div>
                <div class="timeline-middle">
                    <div class="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div class="timeline-end mb-6 text-sm opacity-70">Edit copy, actions and details directly from the inspector.</div>
                <hr />
            </li>
        
            <li>
                <div class="timeline-start font-semibold">Publish and iterate</div>
                <div class="timeline-middle">
                    <div class="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div class="timeline-end mb-6 text-sm opacity-70">Export your page and keep improving it with reusable blocks.</div>
                <hr />
            </li>
        
    </ul>
</section></div>
<!-- howItWorks -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <h3 class="text-center text-2xl font-bold">How it works</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">A clear path from setup to delivery in a few steps.</p>
    <div class="mt-6 space-y-3">
        
            <div class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-outline mt-0.5">1</span>
                <div>
                    <p class="font-semibold">Define the structure</p>
                    <p class="mt-1 text-sm opacity-70">Pick sections and choose a variant for each one.</p>
                </div>
            </div>
        
            <div class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-outline mt-0.5">2</span>
                <div>
                    <p class="font-semibold">Customize content</p>
                    <p class="mt-1 text-sm opacity-70">Edit copy, actions and details directly from the inspector.</p>
                </div>
            </div>
        
            <div class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-outline mt-0.5">3</span>
                <div>
                    <p class="font-semibold">Publish and iterate</p>
                    <p class="mt-1 text-sm opacity-70">Export your page and keep improving it with reusable blocks.</p>
                </div>
            </div>
        
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
<!-- testimonial -->
<div class=" mx-auto  container   max-w-5xl "><section class="rounded-2xl p-6">
    
    <div class="mb-6 flex items-end justify-between gap-4">
        <h3 class="text-3xl font-bold">Testimonial</h3>
        <p class="max-w-sm text-right opacity-75">About Testimonial</p>
    </div>
    <div class="grid gap-4 sm:grid-cols-3">
        
        <blockquote class="flex flex-col rounded-2xl bg-primary/10 p-8">
            <div class="mb-4 text-4xl font-black text-primary opacity-40">"</div>
            <p class="grow leading-relaxed">This product seriously reduced our launch time.</p>
            
            <footer class="mt-6 flex items-center gap-3">
                <img class="h-12 w-12 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Alex" />
                <div class="min-w-0">
                    <div class="truncate font-semibold">Alex</div>
                    <div class="truncate text-sm opacity-70">Product Manager</div>
                </div>
            </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl bg-primary/10 p-8">
            <div class="mb-4 text-4xl font-black text-primary opacity-40">"</div>
            <p class="grow leading-relaxed">The most intuitive interface we've ever worked with. Our team adopted it in just one day.</p>
            
            <footer class="mt-6 flex items-center gap-3">
                <img class="h-12 w-12 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Sarah" />
                <div class="min-w-0">
                    <div class="truncate font-semibold">Sarah</div>
                    <div class="truncate text-sm opacity-70">Lead Designer</div>
                </div>
            </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl bg-primary/10 p-8">
            <div class="mb-4 text-4xl font-black text-primary opacity-40">"</div>
            <p class="grow leading-relaxed">Customer support is top-notch. They helped us resolve a complex integration issue in minutes.</p>
            
            <footer class="mt-6 flex items-center gap-3">
                <img class="h-12 w-12 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Michael" />
                <div class="min-w-0">
                    <div class="truncate font-semibold">Michael</div>
                    <div class="truncate text-sm opacity-70">CTO</div>
                </div>
            </footer>
        </blockquote>
    </div>
</section></div>
<!-- testimonial -->
<div class=" mx-auto  container   max-w-5xl "><section class="rounded-2xl p-6 text-center">
    <h3 class="text-3xl font-bold">Testimonial</h3>
    <p class="mx-auto mt-2 max-w-2xl opacity-75">About Testimonial</p>
    <div class="mt-6 grid gap-4 sm:grid-cols-3">
        
        <blockquote class="flex flex-col rounded-2xl p-6">
            
            <div class="mx-auto mb-4">
                <img class="h-16 w-16 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Alex" />
            </div>
            <p class="grow text-xl leading-relaxed opacity-90">"This product seriously reduced our launch time."</p>
            
            <footer class="mt-6">
                <div class="font-semibold">Alex</div>
                <div class="text-sm opacity-70">Product Manager</div>
            </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl p-6">
            
            <div class="mx-auto mb-4">
                <img class="h-16 w-16 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Sarah" />
            </div>
            <p class="grow text-xl leading-relaxed opacity-90">"The most intuitive interface we've ever worked with. Our team adopted it in just one day."</p>
            
            <footer class="mt-6">
                <div class="font-semibold">Sarah</div>
                <div class="text-sm opacity-70">Lead Designer</div>
            </footer>
        </blockquote>
        <blockquote class="flex flex-col rounded-2xl p-6">
            
            <div class="mx-auto mb-4">
                <img class="h-16 w-16 shrink-0 rounded-full border border-base-300 object-cover" src="/images/" alt="Michael" />
            </div>
            <p class="grow text-xl leading-relaxed opacity-90">"Customer support is top-notch. They helped us resolve a complex integration issue in minutes."</p>
            
            <footer class="mt-6">
                <div class="font-semibold">Michael</div>
                <div class="text-sm opacity-70">CTO</div>
            </footer>
        </blockquote>
    </div>
</section></div>
<!-- statsPanel -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="p-6">
    
    <div class="mb-6 flex h-full flex-row items-center gap-3 sm:flex-wrap">
        <h3 class="text-xl font-semibold">Site statistic</h3>
        <p class="opacity-75">Description about represented numbers</p>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        
        <div class="rounded-xl bg-base-200/60 p-4">
            <div class="text-2xl font-bold">12k+</div>
            <div class="mt-1 text-sm opacity-70">Active users</div>
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
<!-- statsPanel -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="p-6">
    <div class="grid gap-6 md:grid-cols-2">
        <div>
            <h3 class="text-3xl font-bold">Site statistic</h3>
            <p class="mt-2 opacity-75">Description about represented numbers</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
            
        <div class="rounded-xl border border-base-300 p-4">
            <div class="text-3xl font-black text-primary">12k+</div>
            <div class="mt-1 text-sm opacity-70">Active users</div>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="text-3xl font-black text-primary">98%</div>
            <div class="mt-1 text-sm opacity-70">Satisfaction</div>
        </div>
        <div class="rounded-xl border border-base-300 p-4">
            <div class="text-3xl font-black text-primary">24/7</div>
            <div class="mt-1 text-sm opacity-70">Support</div>
        </div>
        </div>
    </div>
</section></div>
<!-- statsPanel -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="p-6">
    <h3 class="text-center text-3xl font-bold">Site statistic</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Description about represented numbers</p>
    <div class="mt-8 flex flex-wrap justify-center gap-8">
        
        <div class="text-center">
            <div class="text-4xl font-black">12k+</div>
            <div class="mt-1 text-sm opacity-70">Active users</div>
        </div>
        <div class="text-center">
            <div class="text-4xl font-black">98%</div>
            <div class="mt-1 text-sm opacity-70">Satisfaction</div>
        </div>
        <div class="text-center">
            <div class="text-4xl font-black">24/7</div>
            <div class="mt-1 text-sm opacity-70">Support</div>
        </div>
    </div>
</section></div>
<!-- logosPartners -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Logos & Partners</h3>
    <p class="mt-2 opacity-75">Teams and partners that build with our platform.</p>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">NovaLabs</div><div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">Skyline</div><div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">Aether</div><div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">Northwind</div><div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">Vertex</div><div class="rounded-xl border border-base-300 bg-base-100 px-3 py-4 text-center text-sm font-semibold opacity-70">OmniCore</div>
    </div>
</section></div>
<!-- logosPartners -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">Trusted by</p>
            <h3 class="mt-1 text-2xl font-bold">Logos & Partners</h3>
        </div>
        <p class="max-w-md text-sm opacity-70">Teams and partners that build with our platform.</p>
    </div>
    <div class="mt-6 flex flex-wrap gap-2">
        <span class="badge badge-outline badge-lg">NovaLabs</span><span class="badge badge-outline badge-lg">Skyline</span><span class="badge badge-outline badge-lg">Aether</span><span class="badge badge-outline badge-lg">Northwind</span><span class="badge badge-outline badge-lg">Vertex</span><span class="badge badge-outline badge-lg">OmniCore</span>
    </div>
</section></div>
<!-- logosPartners -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/20 bg-primary/5 p-6">
    <h3 class="text-center text-2xl font-bold">Logos & Partners</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Teams and partners that build with our platform.</p>
    <div class="mt-6 grid gap-3 sm:grid-cols-2">
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">NovaLabs</div>
                <div class="mt-1 text-xs opacity-60">Technology partner</div>
            </div>
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">Skyline</div>
                <div class="mt-1 text-xs opacity-60">Strategic partner</div>
            </div>
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">Aether</div>
                <div class="mt-1 text-xs opacity-60">Cloud partner</div>
            </div>
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">Northwind</div>
                <div class="mt-1 text-xs opacity-60">Consulting partner</div>
            </div>
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">Vertex</div>
                <div class="mt-1 text-xs opacity-60">Research partner</div>
            </div>
        
            <div class="rounded-xl bg-base-100 px-4 py-3 shadow-sm">
                <div class="text-sm font-semibold">OmniCore</div>
                <div class="mt-1 text-xs opacity-60">Implementation partner</div>
            </div>
        
    </div>
</section></div>
<!-- awardsBadges -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-warning/30 bg-warning/10 p-6">
    <h3 class="text-2xl font-bold">Awards & Badges</h3>
    <p class="mt-2 opacity-75">Recognition from industry programs and partner networks.</p>
    <ul class="mt-6 space-y-2">
        
            <li class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-warning mt-0.5">Award</span>
                <div>
                    <p class="font-semibold">Top Product</p>
                    <p class="text-sm opacity-70">Product Awards &middot; 2026</p>
                </div>
            </li>
            <li class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-warning mt-0.5">Award</span>
                <div>
                    <p class="font-semibold">Design Excellence</p>
                    <p class="text-sm opacity-70">UX Guild &middot; 2025</p>
                </div>
            </li>
            <li class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-warning mt-0.5">Award</span>
                <div>
                    <p class="font-semibold">Partner of the Year</p>
                    <p class="text-sm opacity-70">Nova Alliance &middot; 2024</p>
                </div>
            </li>
            <li class="flex items-start gap-3 rounded-xl bg-base-100 px-4 py-3">
                <span class="badge badge-warning mt-0.5">Award</span>
                <div>
                    <p class="font-semibold">Security Verified</p>
                    <p class="text-sm opacity-70">Trust Council &middot; 2026</p>
                </div>
            </li>
    </ul>
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
<!-- awardsBadges -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Awards & Badges</h3>
    <p class="mt-2 opacity-75">Recognition from industry programs and partner networks.</p>
    <div class="mt-5 flex flex-wrap gap-2">
        <span class="badge badge-primary badge-lg">Top Product 2026</span><span class="badge badge-primary badge-lg">Design Excellence 2025</span><span class="badge badge-primary badge-lg">Partner of the Year 2024</span><span class="badge badge-primary badge-lg">Security Verified 2026</span>
    </div>
</section></div>
<!-- faq -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <h3 class="text-center text-2xl font-bold">Frequently asked questions</h3>
    <p class="mx-auto mt-2 max-w-2xl text-center opacity-75">Answers to the most common questions before getting started.</p>
    <ul class="mt-6 divide-y divide-base-300 rounded-xl border border-base-300 bg-base-100">
        
            <li class="px-4 py-3">
                <p class="font-semibold">How long does setup take?</p>
                <p class="mt-1 text-sm opacity-70">Most teams launch their first page in less than one day.</p>
            </li>
        
            <li class="px-4 py-3">
                <p class="font-semibold">Can I use custom branding?</p>
                <p class="mt-1 text-sm opacity-70">Yes, all blocks work with your current theme and fonts.</p>
            </li>
        
            <li class="px-4 py-3">
                <p class="font-semibold">Do you support mobile layouts?</p>
                <p class="mt-1 text-sm opacity-70">Each section is responsive and adapts for mobile by default.</p>
            </li>
        
            <li class="px-4 py-3">
                <p class="font-semibold">Can I export the final project?</p>
                <p class="mt-1 text-sm opacity-70">Yes, you can export page content and structure at any time.</p>
            </li>
        
            <li class="px-4 py-3">
                <p class="font-semibold">Is collaboration supported?</p>
                <p class="mt-1 text-sm opacity-70">You can share content workflows across your team.</p>
            </li>
        
    </ul>
</section></div>
<!-- faq -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <h3 class="text-2xl font-bold">Frequently asked questions</h3>
    <p class="mt-2 opacity-75">Answers to the most common questions before getting started.</p>
    <div class="mt-6 grid gap-3 md:grid-cols-2">
        
            <div class="rounded-xl border border-base-300 p-4">
                <h4 class="font-semibold">How long does setup take?</h4>
                <p class="mt-2 text-sm opacity-70">Most teams launch their first page in less than one day.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <h4 class="font-semibold">Can I use custom branding?</h4>
                <p class="mt-2 text-sm opacity-70">Yes, all blocks work with your current theme and fonts.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <h4 class="font-semibold">Do you support mobile layouts?</h4>
                <p class="mt-2 text-sm opacity-70">Each section is responsive and adapts for mobile by default.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <h4 class="font-semibold">Can I export the final project?</h4>
                <p class="mt-2 text-sm opacity-70">Yes, you can export page content and structure at any time.</p>
            </div>
        
            <div class="rounded-xl border border-base-300 p-4">
                <h4 class="font-semibold">Is collaboration supported?</h4>
                <p class="mt-2 text-sm opacity-70">You can share content workflows across your team.</p>
            </div>
        
    </div>
</section></div>
<!-- faq -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Frequently asked questions</h3>
    <p class="mt-2 opacity-75">Answers to the most common questions before getting started.</p>
    <div class="mt-6 space-y-2">
        
            <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold">How long does setup take?</div>
                
                <div class="collapse-content text-sm opacity-75">
                    <p>Most teams launch their first page in less than one day.</p>
                </div>
            </div>
        
            <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold">Can I use custom branding?</div>
                
                <div class="collapse-content text-sm opacity-75">
                    <p>Yes, all blocks work with your current theme and fonts.</p>
                </div>
            </div>
        
            <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold">Do you support mobile layouts?</div>
                
                <div class="collapse-content text-sm opacity-75">
                    <p>Each section is responsive and adapts for mobile by default.</p>
                </div>
            </div>
        
            <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold">Can I export the final project?</div>
                
                <div class="collapse-content text-sm opacity-75">
                    <p>Yes, you can export page content and structure at any time.</p>
                </div>
            </div>
        
            <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-semibold">Is collaboration supported?</div>
                
                <div class="collapse-content text-sm opacity-75">
                    <p>You can share content workflows across your team.</p>
                </div>
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
<!-- galleryMedia -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="flex items-end justify-between gap-2">
        <div>
            <h3 class="text-2xl font-bold">Gallery & Media</h3>
            <p class="mt-2 opacity-75">Showcase images, media highlights and moments from your work.</p>
        </div>
        <span class="badge badge-outline">Carousel</span>
    </div>
    <div class="carousel mt-6 w-full gap-3 rounded-box">
        
        <div id="slide0" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Launch Day</p>
                            <p class="opacity-65">Product reveal on stage</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide1" class="btn btn-circle btn-sm">❯</a>
            </div>
        </div>
    
        <div id="slide1" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Workshop</p>
                            <p class="opacity-65">Hands-on training session</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide0" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide2" class="btn btn-circle btn-sm">❯</a>
            </div>
        </div>
    
        <div id="slide2" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Customer Story</p>
                            <p class="opacity-65">Team interview clip</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide3" class="btn btn-circle btn-sm">❯</a>
            </div>
        </div>
    
        <div id="slide3" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Product Detail</p>
                            <p class="opacity-65">Feature in action</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide4" class="btn btn-circle btn-sm">❯</a>
            </div>
        </div>
    
        <div id="slide4" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Conference</p>
                            <p class="opacity-65">Booth and demos</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide5" class="btn btn-circle btn-sm">❯</a>
            </div>
        </div>
    
        <div id="slide5" class="carousel-item relative w-full justify-center">
            <div class="w-[85%] sm:w-[60%]">
                <div class="w-full overflow-hidden rounded-xl border border-base-300 bg-base-100">
                    
                    <div class="h-40 bg-base-200">
                        <img 
                            class=" object-cover w-full h-full " 
                            src="/images/" 
                            alt="/images/" 
                        />
                    </div>

                    
                        <div class="px-3 py-2 text-sm">
                            <p class="font-semibold">Behind the scenes</p>
                            <p class="opacity-65">Team collaboration</p>
                        </div>
                    

                </div>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" class="btn btn-circle btn-sm">❮</a>
                <a href="#slide0" class="btn btn-circle btn-sm">❯</a>
            </div>
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
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Launch Day</p>
                    <p class="opacity-65">Product reveal on stage</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Workshop</p>
                    <p class="opacity-65">Hands-on training session</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Customer Story</p>
                    <p class="opacity-65">Team interview clip</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Product Detail</p>
                    <p class="opacity-65">Feature in action</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Conference</p>
                    <p class="opacity-65">Booth and demos</p>
                </figcaption>
            </figure>
        
            <figure class="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <div class="h-40 bg-base-200">
                    <img class=" object-cover w-full h-full " src="/images/" alt="/images/" />
                </div>
               
                
                <figcaption class="px-3 py-2 text-sm">
                    <p class="font-semibold">Behind the scenes</p>
                    <p class="opacity-65">Team collaboration</p>
                </figcaption>
            </figure>
        
    </div>
</section></div>
<!-- singleVideo -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6 bg-base-200">
    <div class="flex flex-col gap-6 lg:flex-row-reverse lg:items-center">
        <div class="flex-1 lg:pl-6">
            <h3 class="text-3xl font-bold">Video Spotlight</h3>
            <p class="mt-4 text-lg opacity-75">Watch our latest video presentation and learn more.</p>
        </div>
        <div class="w-full flex-1 overflow-hidden rounded-xl bg-base-300 border border-base-300 drop-shadow-xl">
            
            <div class="flex aspect-video w-full items-center justify-center opacity-50">
                <span>No video selected</span>
            </div>
        </div>
    </div>
</section></div>
<!-- singleVideo -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <div class="text-center md:mx-auto md:w-3/4 lg:w-2/3">
        <h3 class="text-3xl font-bold">Video Spotlight</h3>
        <p class="mt-4 text-lg opacity-75">Watch our latest video presentation and learn more.</p>
    </div>
    <div class="mt-8 w-full overflow-hidden rounded-xl border border-base-300 bg-base-200">
        
        <div class="flex aspect-video w-full items-center justify-center opacity-50 bg-base-300">
            <span>No video selected</span>
        </div>
    </div>
</section></div>
<!-- singleVideo -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <div class="flex flex-col gap-6 md:flex-row md:items-center">
        <div class="flex-1">
            <h3 class="text-3xl font-bold">Video Spotlight</h3>
            <p class="mt-4 text-lg opacity-75">Watch our latest video presentation and learn more.</p>
        </div>
        <div class="w-full flex-1 overflow-hidden rounded-xl border border-base-300 bg-base-200">
            
            <div class="flex aspect-video w-full items-center justify-center opacity-50 bg-base-300">
                <span>No video selected</span>
            </div>
        </div>
    </div>
</section></div>
<!-- careers -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-primary/25 bg-primary/5 p-6">
    <div class="rounded-xl bg-base-100 p-5 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">Open roles</p>
        <h3 class="mt-2 text-2xl font-bold">Careers</h3>
        <p class="mt-2 opacity-75">Join the team and build products used by modern teams.</p>
    </div>
    <div class="mt-4 grid gap-3 md:grid-cols-2">
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <h4 class="font-semibold">Frontend Engineer</h4>
                <p class="mt-1 text-sm opacity-70">Remote · EU</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-sm btn-primary mt-3" href="#">Apply now</a>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <h4 class="font-semibold">Product Designer</h4>
                <p class="mt-1 text-sm opacity-70">Lisbon</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-sm btn-primary mt-3" href="#">Apply now</a>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <h4 class="font-semibold">Content Strategist</h4>
                <p class="mt-1 text-sm opacity-70">Remote · US</p>
                <p class="text-sm opacity-70">Contract</p>
                <a class="btn btn-sm btn-primary mt-3" href="#">Apply now</a>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <h4 class="font-semibold">Customer Success Lead</h4>
                <p class="mt-1 text-sm opacity-70">Porto</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-sm btn-primary mt-3" href="#">Apply now</a>
            </article>
        
    </div>
</section></div>
<!-- careers -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl border border-base-300 bg-base-100 p-6">
    <h3 class="text-2xl font-bold">Careers</h3>
    <p class="mt-2 opacity-75">Join the team and build products used by modern teams.</p>
    <div class="mt-6 overflow-hidden rounded-xl border border-base-300">
        
            <div class="grid gap-2 border-b border-base-300 p-4 last:border-b-0 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center">
                <p class="font-semibold">Frontend Engineer</p>
                <p class="text-sm opacity-70">Remote · EU</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-xs btn-outline" href="#">Apply now</a>
            </div>
        
            <div class="grid gap-2 border-b border-base-300 p-4 last:border-b-0 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center">
                <p class="font-semibold">Product Designer</p>
                <p class="text-sm opacity-70">Lisbon</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-xs btn-outline" href="#">Apply now</a>
            </div>
        
            <div class="grid gap-2 border-b border-base-300 p-4 last:border-b-0 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center">
                <p class="font-semibold">Content Strategist</p>
                <p class="text-sm opacity-70">Remote · US</p>
                <p class="text-sm opacity-70">Contract</p>
                <a class="btn btn-xs btn-outline" href="#">Apply now</a>
            </div>
        
            <div class="grid gap-2 border-b border-base-300 p-4 last:border-b-0 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center">
                <p class="font-semibold">Customer Success Lead</p>
                <p class="text-sm opacity-70">Porto</p>
                <p class="text-sm opacity-70">Full-time</p>
                <a class="btn btn-xs btn-outline" href="#">Apply now</a>
            </div>
        
    </div>
</section></div>
<!-- careers -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <h3 class="text-2xl font-bold">Careers</h3>
    <p class="mt-2 opacity-75">Join the team and build products used by modern teams.</p>
    <div class="mt-6 space-y-3">
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h4 class="font-semibold">Frontend Engineer</h4>
                    <a class="btn btn-sm btn-primary" href="#">Apply now</a>
                </div>
                <p class="mt-2 text-sm opacity-70">Remote · EU &middot; Full-time</p>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h4 class="font-semibold">Product Designer</h4>
                    <a class="btn btn-sm btn-primary" href="#">Apply now</a>
                </div>
                <p class="mt-2 text-sm opacity-70">Lisbon &middot; Full-time</p>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h4 class="font-semibold">Content Strategist</h4>
                    <a class="btn btn-sm btn-primary" href="#">Apply now</a>
                </div>
                <p class="mt-2 text-sm opacity-70">Remote · US &middot; Contract</p>
            </article>
        
            <article class="rounded-xl border border-base-300 bg-base-100 p-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h4 class="font-semibold">Customer Success Lead</h4>
                    <a class="btn btn-sm btn-primary" href="#">Apply now</a>
                </div>
                <p class="mt-2 text-sm opacity-70">Porto &middot; Full-time</p>
            </article>
        
    </div>
</section></div>
<!-- aboutUs -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl bg-base-100 p-6">
    <div class="grid gap-6 md:grid-cols-3">
        <div class="md:col-span-2">
            <h3 class="text-3xl font-bold">About us</h3>
            <p class="mt-3 opacity-80">A small team building fast products with care.</p>
            
            <blockquote class="mt-4 rounded-xl bg-base-200/60 p-4 italic opacity-80">
                "We combine design, engineering and business strategy to help teams ship better web experiences."
            </blockquote>
        </div>
        
        <div class="rounded-xl border border-dashed border-base-300 p-4">
            <div class="text-xs uppercase tracking-[0.15em] opacity-60">Team stats</div>
            <ul class="mt-3 space-y-2 text-sm">
                <li>- 120+ - Projects</li><li>- 18 - Countries</li><li>- 99% - Client retention</li>
            </ul>
        </div>
    </div>
</section></div>
<!-- aboutUs -->
<div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl bg-base-100 p-6 text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">Our story</p>
    <h3 class="mt-2 text-3xl font-bold">About us</h3>
    <p class="mx-auto mt-4 max-w-3xl opacity-80">We combine design, engineering and business strategy to help teams ship better web experiences.</p>
    
    <div class="mt-6 grid gap-4 md:grid-cols-2">
        
        <div class="rounded-xl border border-base-300 p-4 text-left">
            <div class="text-xs uppercase tracking-[0.15em] opacity-60">Mission</div>
            <div class="mt-2 font-medium">Build practical tools that save time.</div>
        </div>
        
        <div class="rounded-xl border border-base-300 p-4 text-left">
            <div class="text-xs uppercase tracking-[0.15em] opacity-60">Vision</div>
            <div class="mt-2 font-medium">Make quality web creation accessible.</div>
        </div>
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