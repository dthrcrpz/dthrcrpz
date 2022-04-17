<section class="technicalities relative rounded-b-3xl overflow-hidden shadow-sm transition-colors duration-300 border-white dark:border-primary border-b border-opacity-10 dark:border-opacity-10">
  <svg class="absolute left-0 bottom-0 opacity-10 2xl:w-full 2xl:h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" height="1366" preserveAspectRatio="none" viewBox="0 0 1366 1366">
    <g mask="url(&quot;#SvgjsMask1031&quot;)" fill="none">
      <path d="M1620.35 1160.71C1409.81 1126.47 1337.83 746.64 965.04 614.31 592.24 481.98 790.39 36.34 637.38-79.26" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
      <path d="M1469.49 771.41C1311.45 699.79 1362.72 282.29 1078.92 197.69 795.13 113.09 812.63-100.03 688.36-119.09" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
      <path d="M1383.1 1061.84C1267.41 1058.76 1167.96 891.09 952.81 891.09 737.67 891.09 829.36 1146.21 522.53 1061.84 215.69 977.47 306.47 159.33 92.24-46.82" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
      <path d="M1390.53 160.96C1212.09 184.99 1113.91 600.52 818.15 598.08 522.4 595.64 464.6-57.5 245.78-137.65" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
      <path d="M1431.99 647.56C1253.57 661.39 1184.5 1051.96 818.48 1016.38 452.46 980.8 481.65 20.68 204.97-163.76" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
    </g>
    <defs>
      <mask id="SvgjsMask1031">
        <rect width="1366" height="1366" fill="#ffffff"></rect>
      </mask>
    </defs>
  </svg>

  <div class="container py-10 lg:py-20 relative">
    <div class="heading">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M21.312 12.644c-.972-1.189-3.646-4.212-4.597-5.284l-1.784 1.018 4.657 5.35c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.601-.575-1.246-.295-1.817.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.744-.24-1.454-.688-2.003zm-8.292-10.492c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm-2.374 12.265l.991-2.691.813 1.017-.445 1.433 1.782.238.812 1.015-3.399-.321-.554-.691zm5.481-3.076l.552.691-.99 2.691-.812-1.015.44-1.438-1.778-.232-.812-1.016 3.4.319z"/></svg>
        <span>the technicalities</span>
      </h1>
      <p>List of skills, tools, and tech stacks I use</p>
    </div>

    {#each techStacks as techStack}
      <div class="mt-10 md:mt-20 flex flex-row flex-wrap justify-between">
        <div class="w-full md:w-[35%] mb-5">
          <h2 class="text-2xl md:text-4xl font-bold text-tertiary select-none mb-2">{ techStack.type }</h2>
          <p class="text-dark dark:text-white text-sm xl:text-base">{ techStack.description }</p>
        </div>
        <div class="flex flex-row flex-wrap w-full md:w-3/5">
          {#each techStack.stacks as stack}
            <div class="stack">
              <div class="icon w-[40px] h-[40px] flex justify-center items-end mb-5 transition-transform duration-300 {(stack.bg) ? 'bg-white px-1 py-1 rounded-md' : null } relative">
                {#if stack.learning}
                  <small class="absolute px-2 py-1 bg-secondary text-[10px] rounded-xl bg-opacity-50 top-0 -rotate-6 text-white">LEARNING</small>
                {/if}
                {#if stack.onQueue}
                  <small class="absolute px-2 py-1 bg-danger text-[10px] rounded-xl bg-opacity-50 top-0 -rotate-6 text-white">QUEUED</small>
                {/if}
                <!-- <img class="w-full" src="/images/techs/{ techStack.prefix }/{ stack.filename }" alt={stack.name}> -->
                <LazyImage
                  src="/images/techs/{ techStack.prefix }/{ stack.filename }"
                  placeholder="/images/extras/loading.svg"
                  alt={stack.name}
                  class="w-full"
                />
              </div>
              <p class="text-dark font-fira-code text-sm dark:text-white">{ stack.name }</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<script>
  import { LazyImage  } from 'svelte-lazy-image'

  let techStacks = [
    {
      type: 'Front-end',
      prefix: 'frontend',
      description: `Programming languages, markup languages, and frameworks used to create visual elements of a website that users can interact with.`,
      stacks: [
        { name: 'HTML', filename: 'html-5.svg' },
        { name: 'CSS', filename: 'css-3.svg' },
        { name: 'Javascript', filename: 'javascript.svg' },
        { name: 'SASS/SCSS', filename: 'sass.svg' },
        { name: 'VueJS', filename: 'vue.svg' },
        { name: 'NuxtJS', filename: 'nuxt.svg' },
        { name: 'TailwindCSS', filename: 'tailwindcss.svg' },
        { name: 'Svelte', filename: 'svelte.svg' },
        { name: 'Astro', filename: 'astro.svg' },
        { name: 'Typescript', filename: 'typescript.svg', onQueue: true },
        { name: 'React', filename: 'react.svg', onQueue: true },
      ]
    },
    {
      type: 'Back-end',
      prefix: 'backend',
      description: `Programming languages and frameworks that focus on the part of a website that users can't directly see. It handles all of the server-side logic such as storing of data, user authentication, file storage, and more. APIs are also written at the backend.`,
      stacks: [
        { name: 'Laravel', filename: 'laravel.svg' },
        { name: 'PHP', filename: 'php.svg' },
        { name: 'MySQL', filename: 'mysql.svg' },
        { name: 'Redis', filename: 'redis.svg' },
        { name: 'AdonisJS', filename: 'adonis.svg' },
        { name: 'OctoberCMS', filename: 'octobercms.svg', learning: true },
      ]
    },
    {
      type: 'Server and hosting',
      prefix: 'server-and-hosting',
      description: `These are the Operating Systems, Applications, and Web Services used to host a website and make it accessible in the internet.`,
      stacks: [
        { name: 'Ubuntu', filename: 'ubuntu.svg' },
        { name: 'CentOS', filename: 'centos.svg' },
        { name: 'NginX', filename: 'nginx.svg' },
        { name: 'AWS', filename: 'aws.svg', bg: true },
        { name: 'Firebase', filename: 'firebase.svg' },
      ]
    },
    {
      type: 'Tools',
      prefix: 'tools',
      description: `Applications that are used to build, run, test, and deploy a website. These are used to cast magic spells and start all of the cooking.`,
      stacks: [
        { name: 'VSCode', filename: 'vscode.svg' },
        { name: 'Terminal', filename: 'terminal.svg' },
        { name: 'Git', filename: 'git.svg' },
        { name: 'Postman', filename: 'postman.svg' },
        { name: 'INTERNET', filename: 'edge.svg' },
      ]
    }
  ]
</script>