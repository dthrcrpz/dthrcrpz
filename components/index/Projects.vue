<template>
    <section class="projects">
        <div class="container">
            <h2 class="section-title">
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
                            <img :src="`/images/projects/sites/${project.id}.png`" alt="kogs">
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
        })
    }
</script>

<style scoped lang="sass">
    .projects
        padding: 70px 0
        .container
            .section-title
                color: $teal
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
            .projects-wrapper
                display: flex
                justify-content: space-between
                flex-flow: row wrap
                margin-top: 30px
                .box
                    flex: 0 0 50%
                    padding: 15px
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
                                .description
                                    font-size: 14px
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
</style>