<div class="projects relative rounded-b-3xl overflow-hidden shadow-sm transition-colors duration-300 border-white dark:border-primary border-b border-opacity-10 dark:border-opacity-10">
  <div class="container py-10 lg:py-20 relative">
    <div class="heading">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
        <span>projects</span>
      </h1>
      <p>My favorite websites I have worked on</p>
    </div>
    <div class="flex justify-start flex-wrap mt-5 xl:mt-10">
      {#each { length: 5 } as item}
        <div class="w-full md:w-1/2 xl:w-1/3 py-4 px-0 md:px-4">
          <div class="rounded-2xl overflow-hidden flex-col transition-shadow duration-300 shadow-[0px_1px_8px_0px_#00000020] dark:shadow-[0px_1px_8px_0px_#06b6d430]">
            <div class="pt-[60%] xl:pt-[70%] relative w-full">
              <img src="https://dthrcrpz.dev/images/projects/websites/kogs.webp" alt="kogs" class="image-cover">
            </div>
            <div class="flex flex-col p-5 xl:hidden">
              <p class="font-semibold mb-5 text-lg text-dark dark:text-white">Ride Revolution</p>
              <a href="https://google.com" target="_blank" class="btn btn-primary has-image">
                <span>VISIT WEBSITE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>