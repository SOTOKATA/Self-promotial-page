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
    <title>test</title>            
</svelte:head>
<!-- login -->
<div class="mb-1"></div><div class=" mx-auto  container   max-w-5xl ">
<section class="rounded-2xl p-6">
    <div class="mx-auto w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-5">
        <h3 class="text-2xl font-bold">{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.title")}</h3>
        <p class="mt-1 text-sm opacity-70">{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.description")}</p>
        <form method="POST" action="?/login" use:enhance={handleEnhance()} class="mt-4 space-y-3">
            <label for="email" class="fieldset-label">{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.emailLabel")}</label>
            <input required type="email" name="email" class="input input-bordered w-full" />
            <label for="password" class="fieldset-label">{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.passwordLabel")}</label>
            <input required type="password" name="password" class="input input-bordered w-full" />
            <div class="flex items-center justify-between text-sm">
            <label for="saveMe" class="label cursor-pointer gap-2">
                <input name="saveMe" type="checkbox" class="checkbox checkbox-sm" />
                <span>{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.rememberText")}</span>
            </label><a href="#" class="link link-hover">{$_("pages.test.blocks.login_844c66e4-377d-4807-b872-9f63ca2952ea.forgotText")}</a></div>
            
            {#if form?.message}
                <div role="alert" transition:slide={{duration: 300}} class="alert alert-error alert-soft mt-2 mb-2">{form.message}</div>
            {/if}   
            
            <button type="submit" disabled={formProcess} class="btn btn-primary w-full">{$_("enter")}</button>
        </form>
    </div>
</section></div>