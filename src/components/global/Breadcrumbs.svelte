<nav class="breadcrumbs">
  <div class="container py-5">
    <ul class="flex items-center">
      <li class="mr-1 flex items-center" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" class="fill-dark dark:fill-white hover:fill-primary dark:hover:fill-primary transition-colors duration-300" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
        </a>
        <span class="ml-2">»</span>
      </li>
      {#each urls as url, key}
        <li class="mr-2" itemscope itemtype="https://schema.org/ListItem">
          {#if (key + 1) == urls.length}
            <span itemprop="item" href={ url.url } class="text-primary">{ url.label }</span>
          {:else}
            <a itemprop="item" class="text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300" href={ url.url }>{ url.label }</a>
            <span>»</span>
          {/if}
        </li>
      {/each}
    </ul>    
  </div>
</nav>

<script>
  export let urls
</script>