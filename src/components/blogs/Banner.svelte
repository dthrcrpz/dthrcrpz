<section class="relative min-h-[450px] flex flex-col blog-banner">
  <img class="absolute opacity-20 z-10 w-full h-full inset-0 object-cover" src="/images/banners/Polygon Luminary.svg" alt="blogs">

  <div class="container relative z-20 flex items-start flex-grow flex-col justify-center">
    <h1 class="text-7xl font-bold mb-5 text-dark dark:text-primary">{ title }</h1>
    {#if description}
      <p class="font-comic-code text-lg max-w-[345px] w-full text-dark dark:text-white">{ description }</p>
    {/if}
  </div>
</section>

<script>
  export let title
  export let description = null
</script>