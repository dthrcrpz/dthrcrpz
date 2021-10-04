<template>
    <section class="projects">
        <div class="container">
            <h2 class="section-title">
                <img src="/images/projects/icon.svg" alt="">
                <span>projects</span>
            </h2>
            <p class="mini-title">browse through the latest websites I developed which I consider "highlights"</p>
            <div class="projects-wrapper">
                <div class="box" v-for="(n, key) in 5" :key="key">
                    <div class="real-box">
                        <div class="top">
                            <img src="/images/projects/sites/kogs.png" alt="kogs">
                        </div>
                        <div class="bottom">
                            <div class="content">
                                <p class="name">KOGS</p>
                                <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus saepe.</p>
                                <a href="javascript:void(0)" class="button teal">VISIT SITE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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
                margin-top: 20px
                .box
                    flex: 0 0 50%
                    padding: 15px
                    .real-box
                        width: 100%
                        display: flex
                        flex-flow: row wrap
                        padding: 20px
                        box-shadow: 0px 0px 7px rgba(92, 224, 216, 0.3)
                        .top
                            width: 100%
                            padding-top: 50%
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
                            .content
                                .name
                                    font-family: Fira Code
                                    font-weight: 600
                                    font-size: 25px
                                    margin-bottom: 5px
                                    color: $yellow
                                .description
                                    font-size: 16px
                                .button
                                    margin-top: 10px
                                    color: $teal
                                    display: block
                                    background-color: $blue
                                    text-align: center
                                    &:hover
                                        color: $teal
</style>