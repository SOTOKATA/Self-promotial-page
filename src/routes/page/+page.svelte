<script lang="ts">
    
    
    
    
    
    let { data, form } = $props();
    
    
</script>

<svelte:head>
    <title>page</title>            
</svelte:head>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" style="background-image:url('/site-assets/84-pshenitsa_koloski_pole_144604_3840x2160.jpg');background-size:cover;background-position:center;">
    <div class="absolute inset-0 bg-gradient-to-br from-black/60 to-black/42"></div>
    <div class="relative z-10 mx-auto max-w-3xl py-20 text-center text-white">
        <span class="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">New</span>
        <h1 class="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-80">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-outline" href="#">See demo</a></div>
    </div>
</section>