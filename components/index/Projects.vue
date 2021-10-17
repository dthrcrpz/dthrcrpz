<template>
    <section class="projects">
        <div class="container">
            <h2 class="section-title" delay="1000">
                <img src="/images/projects/icon.svg" alt="">
                <span>projects</span>
            </h2>
            <p class="mini-title">Browse through the latest websites I developed which I consider "highlights"</p>
            <div class="projects-wrapper">
                <div class="box" v-for="(project, key) in projects" :key="key">
                    <div class="real-box">
                        <a class="agency" :href="project.agency.url" target="_blank">
                            <img :src="`/images/projects/agencies/${project.agency.logo}`" alt="">
                        </a>
                        <div class="top">
                            <img :src="`/images/projects/websites/${project.id}.png`" :alt="project.name" v-lazy-load/>
                        </div>
                        <div class="bottom">
                            <div class="texts">
                                <p class="name">{{ project.name }}</p>
                                <p class="description">{{ project.description }}</p>
                            </div>
                            <a :href="project.url" target="_blank" class="button teal">VISIT SITE ➹</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="waves">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
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
                `section.projects > div.container > h2`,
                `section.projects > div.container > .mini-title`,
                `section.projects > div.container > div .box`
            ]

            this.animateElements(targets)
        }
    }
</script>

<style scoped lang="sass">
    .projects
        padding: 70px 0 130px
        position: relative
        .waves
            position: absolute
            bottom: -1px
            left: 0
            width: 100%
            overflow: hidden
            line-height: 0
            transform: rotate(180deg)
            svg
                position: relative
                display: block
                width: calc(100% + 1.3px)
                height: 78px
                @media (max-width: 767px)
                    width: calc(100% + 1.3px)
                    height: 75px
                .shape-fill
                    fill: #22B4AB
        .container
            .section-title
                color: $teal
                opacity: 0
                transition: .8s
                &.ov
                    opacity: 1
                img
                    max-width: 50px
                    margin-right: 15px
            .mini-title
                color: $teal
                font-size: 18px
                text-align: center
                font-family: Fira Code
                max-width: 500px
                width: 100%
                margin: 0 auto
                opacity: 0
                transition: .8s
                &.ov
                    opacity: 1
            .projects-wrapper
                display: flex
                justify-content: space-between
                flex-flow: row wrap
                margin-top: 30px
                .box
                    flex: 0 0 50%
                    padding: 15px
                    transition: 1s
                    opacity: 0
                    transform: translateY(30px)
                    &.ov
                        opacity: 1
                        transform: translateY(0px)
                    .real-box
                        width: 100%
                        display: flex
                        flex-flow: column
                        padding: 20px
                        box-shadow: 0px 0px 7px rgba(92, 224, 216, 0.3)
                        height: 100%
                        position: relative
                        transition: .4s
                        &:hover
                            box-shadow: 0px 0px 10px rgba(92, 224, 216, 0.6)
                            .agency
                                opacity: 1
                        .agency
                            position: absolute
                            max-width: 120px
                            width: 100%
                            bottom: calc(100% - 13px)
                            opacity: 0
                            transition: .4s
                            img
                                width: 100%
                        .top
                            width: 100%
                            padding-top: 55%
                            position: relative
                            overflow: hidden
                            img
                                position: absolute
                                width: 100%
                                height: 100%
                                object-fit: cover
                                top: 0
                                left: 0
                                bottom: 0
                                right: 0
                        .bottom
                            margin-top: 20px
                            display: flex
                            flex-flow: column
                            justify-content: space-between
                            height: 100%
                            .texts
                                display: flex
                                flex-flow: row wrap
                                .name
                                    font-family: Fira Code
                                    font-weight: 600
                                    font-size: 25px
                                    margin-bottom: 5px
                                    color: $yellow
                                    flex: 0 0 100%
                                .description
                                    font-size: 14px
                                    flex: 0 0 100%
                            .button
                                margin-top: 10px
                                color: $teal
                                display: block
                                background-color: $blue
                                text-align: center
                                align-self: flex-end
                                &:hover
                                    color: $blue
                                    background-color: $teal
    @media (max-width: 1024px)
        .projects
            .container
                .projects-wrapper
                    .box
                        flex: 0 0 100%
                        padding: 15px 0
                        margin-bottom: 20px
                        .real-box
                            .agency
                                opacity: 1
</style>