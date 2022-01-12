<template>
    <section class="projects pt-[70px] px-0 pb-[130px] relative">
        <div class="cntnr">
            <h2 class="section-title" delay="1000">
                <img src="/images/projects/icon.svg" alt="" class="max-w-[50px] mr-4">
                <span>projects</span>
            </h2>
            <p class="mini-title">Browse through the latest websites I developed which I consider "highlights"</p>
            <div class="projects-wrapper flex justify-between flex-row flex-wrap mt-8 duration-500">
                <div v-for="(project, key) in projects" :key="key" class="box flex-shrink-0 flex-grow-0 w-full md:w-1/2 py-4 px-0 md:px-4 duration-500">
                    <div class="real-box w-full flex flex-col py-5 px-5 h-full relative duration-500 shadow-teal hover:shadow-teal-glow group">
                        <a rel="noopener" :href="project.agency.url" target="_blank" class="agency absolute max-w-[120px] w-full duration-500  opacity-1 md:opacity-0 group-hover:opacity-100">
                            <img :src="`/images/projects/agencies/${project.agency.logo}`" alt="" class="w-full">
                        </a>
                        <div class="top w-full pt-[55%] relative overflow-hidden">
                            <picture v-lazy-load>
                                <source :srcset="`/images/projects/websites/${project.id}.webp`" type="image/webp">
                                <img width="100%" height="100%" :src="`/images/projects/websites/${project.id}.png`" :alt="project.name" v-lazy-load class="absolute w-full h-full object-cover top-0 left-0 bottom-0 right-0"/>
                            </picture>
                        </div>
                        <div class="bottom my-5 flex flex-col justify-between h-full">
                            <div class="texts flex flex-row flex-wrap">
                                <p class="name font-fira-code font-semibold text-2xl mb-1 text-red dark:text-yellow flex-[100%] duration-500">{{ project.name }}</p>
                                <p class="description text-sm flex-[100%] text-dark-blue dark:text-teal duration-500">{{ project.description }}</p>
                            </div>
                            <a rel="noopener" :href="project.url" target="_blank" class="button mt-2 text-dark-blue dark:text-teal block dark:bg-dark-blue text-center self-end text-base border border-dark-blue dark:border-teal hover:bg-dark-blue hover:text-teal dark:hover:bg-teal dark:hover:text-dark-blue">VISIT SITE ➹</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="waves absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block h-[75px] md:h-[78px]">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            projects: [
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
                    id: 'koreatayosoon',
                    name: 'KoreaTayoSoon',
                    url: 'https://koreatayosoon.ph/',
                    description: `Join the Creative Contest by Korea Tourism Organization and win AMAZING prizes such as ROUNDTRIP TICKETS TO KOREA`,
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
            ]
        }),
        mounted () {
            let targets = [
                `section.projects > div.cntnr > h2`,
                `section.projects > div.cntnr > .mini-title`,
                `section.projects > div.cntnr > div .box`
            ]

            this.animateElements(targets)
        }
    }
</script>

<style>
    .waves svg {
        width: calc(100% + 1.3px);
    }
    .waves svg .shape-fill {
        fill: #22b4ab;
    }
    .agency {
        bottom: calc(100% - 13px);
    }
</style>