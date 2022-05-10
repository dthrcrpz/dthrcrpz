<section class="projects relative overflow-hidden">
  <svg class="absolute left-0 bottom-0 opacity-10 2xl:w-full 2xl:h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" height="1366" preserveAspectRatio="none" viewBox="0 0 1366 1366">
      <g fill="none">
          <path d="M577.15-10.32C379.09 168.88 432.82 936.31 173.01 978.68-86.8 1021.05-104.39 682.24-231.13 664.5" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
          <path d="M871.02-91.5C685.82 201.49 835.78 1225.02 536.63 1254.02 237.48 1283.02 100.02 627.61-132.16 571.02" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
          <path d="M806.51-168.46C627.4 56.01 769.64 901.04 468.22 929.28 166.81 957.52-7.82 510.62-208.35 492.16" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
          <path d="M1172.63-30.36C938.93 44.36 866.76 717.42 540.12 720.05 213.48 722.68 96.96 315.54-92.39 296.59" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
          <path d="M725.8-115.59C514.64 127.57 589.79 1053.54 319.51 1106.86 49.23 1160.18 62.82 675.92-86.78 628.76" class="stroke-dark dark:stroke-primary transition-colors duration-300" stroke-width="2"></path>
      </g>
      <defs>
          <mask id="SvgjsMask1039">
              <rect width="1366" height="1366" fill="#ffffff"></rect>
          </mask>
      </defs>
  </svg>

  <div class="container py-10 lg:py-20 relative">
    <div class="heading">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
        <span>projects</span>
      </h1>
      <p>My favorite websites I have worked on</p>
    </div>
    <div class="flex justify-start flex-wrap mt-5 xl:mt-10">
      {#each projects as project}
        <div class="project-box w-full md:w-1/2 py-4 px-0 md:px-4">
          <div class="rounded-2xl relative group flex-col transition-shadow duration-300 shadow-[0px_1px_8px_0px_#00000020] dark:shadow-[0px_1px_8px_0px_#06b6d430]">
            <a href={project.agency.url} target="_blank" class="agency absolute max-w-[85px] md:max-w-[120px] w-full shadow-sm hover:shadow-md hover:shadow-primary shadow-primary transition-all duration-300 opacity-1 xl:opacity-0 group-hover:opacity-100 bg-dark px-3 py-2 rounded-xl z-[2] top-0 left-5 -translate-y-1/2">
              <img class="lazy" src="/images/extras/loading.svg" data-src="/images/projects/agencies/{ project.agency.logo }" data-srcset="/images/projects/agencies/{ project.agency.logo }" alt="designblue">
            </a>
            <div class="pt-[60%] xl:pt-[70%] relative w-full rounded-t-2xl xl:rounded-b-2xl overflow-hidden">
              <img class="lazy image-cover" src="/images/extras/loading.svg" data-src="/images/projects/websites/{ project.id }.png" data-srcset="/images/projects/websites/{ project.id }.png" alt={ project.name }>
            </div>
            <div class="flex flex-col p-5 xl:hidden bg-white dark:bg-dark rounded-b-xl">
              <p class="font-semibold mb-5 text-lg text-dark dark:text-white">{ project.name }</p>
              <a href={project.url} target="_blank" class="btn btn-primary has-image">
                <span>VISIT WEBSITE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
              </a>
            </div>
            <div class="overlay absolute hidden xl:flex flex-col justify-center items-center w-full h-full top-0 left-0 m-auto transition-colors duration-300 bg-dark rounded-2xl bg-opacity-0 group-hover:bg-opacity-80">
              <p class="text-white font-bold text-2xl mb-3 text-center max-w-[300px] w-full transition-all duration-300 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{ project.name }</p>
              <a href={project.url} target="_blank" class="btn btn-primary has-image transition-all translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span>VISIT WEBSITE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  /* data */
  let projects = [
    {
      id: 'manila-ocean-park',
      name: 'Manila Ocean Park',
      url: 'https://www.manilaoceanpark.com/',
      description: `Philippines' first world-class marine theme park. Buy tickets and book from here!`,
      agency: {
        logo: 'designblue.svg',
        url: 'https://designbluemanila.com/'
      }
    },
    {
      id: 'kogs',
      name: 'KOGs',
      url: 'https://kogs.gg/',
      description: `Buy these highly collectible, easily transferrable non-fungible tokens (NFTs) here. Play to Earn!`,
      agency: {
        logo: 'designblue.svg',
        url: 'https://designbluemanila.com/'
      }
    },
    {
      id: 'ride-revolution',
      name: 'Ride Revolution',
      url: 'https://www.riderevolution.ph/',
      description: `A platform where you can buy packages and book your classes from this very nice indoor cycling studio. Achieve fitness!`,
      agency: {
        logo: 'designblue.svg',
        url: 'https://designbluemanila.com/'
      }
    },
    {
      id: 'ggtc',
      name: 'GGTC',
      url: 'https://ggtc.world/',
      description: `Make a difference! Save lives by countering tobacco industry interference.`,
      agency: {
        logo: 'designblue.svg',
        url: 'https://designbluemanila.com/'
      }
    },
  ]
</script>