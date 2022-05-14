<section class="blogs mt-5 md:mt-10 pb-10">
  <div class="container flex flex-wrap justify-start">
    {#each blogs as blog, key}
      <div class="box w-full sm:w-1/2 xl:w-1/3 p-2 mb-5">
        <a class="inner-box flex flex-col group" href="/blogs/{ blog.slug }">
          <div class="top relative pt-[70%] overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105 lazy" src="/images/extras/loading.svg" data-src="/images/blogs/{ blog.image }" data-srcset="/images/blogs/{ blog.image }" alt={ blog.image }>
          </div>
          <div class="texts p-3 font-comic-code">
            <p class="text-xs text-dark dark:text-white opacity-60">{ blog.date } • Deither Corpuz</p>
            <h2 class="font-bold text-xl text-dark dark:text-white group-hover:text-primary">{ blog.title }</h2>
          </div>
        </a>
      </div>
    {/each}
  </div>
</section>

<script>
  /* data */
  let blogs = [
    {
      title: 'I Developed My First Laravel Package',
      slug: 'i-developed-my-first-laravel-package',
      date: 'Nov 23, 2021',
      image: 'laravel-package.png'
    },
    {
      title: 'Find the Rabbit',
      slug: 'find-the-rabbit',
      date: 'Dec 03, 2021',
      image: 'rabbit.jpg'
    },
  ]
</script>