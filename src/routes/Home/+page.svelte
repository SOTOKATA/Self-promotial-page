<script lang="ts">
    
    
    
    
    
    let { data, form } = $props();
    
    
</script>

<svelte:head>
    <title>Home</title>            
</svelte:head>
<!-- heroCover -->
<section class="relative w-full overflow-hidden flex items-center justify-center min-h-screen" style="background-image:url('/site-assets/84-pshenitsa_koloski_pole_144604_3840x2160.jpg');background-size:cover;background-position:center;">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.72)_100%)]"></div>
    <div class="relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] opacity-55">New</p>
        <h1 class="mt-2 text-4xl font-bold leading-tight">Build pages faster</h1>
        <p class="mx-auto mt-4 max-w-2xl opacity-85">Compose sections with reusable blocks and ship in minutes.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3"><a class="btn btn-primary" href="#">Get started</a><a class="btn btn-link" href="#">See demo</a></div>
    </div>
</section>