<template>
    <section class="about">
        <div class="container">
            <h2 class="section-title">about me</h2>
        </div>
        <div class="columns-container">
            <div class="container">
                <div class="col left">
                    <div class="egg"></div>
                    <div class="texts">
                        <p class="title">Who's this guy?</p>
                        <p class="desc">
                            A <i>self-proclaimed</i> highly skilled and creative Full Stack Web Developer.
                        </p>
                        <p class="desc">
                            Solid experience on developing user-centered websites using the stacks mentioned <a href="javascript:void(0)">HERE</a>
                        </p>
                        <p class="desc">
                            Developed responsive, optimized, and SEO-friendly websites for over 4 years, using the best practices and latest UX trends for best user experience.
                        </p>
                        <p class="desc">
                            Extensive knowledge in developing web applications for multiple APIs, third-party integrations, and databases.
                        </p>
                    </div>
                </div>
                <div class="col right">
                    right dito
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
    .about
        height: 400px
        position: relative
        padding-top: 50px
        background-color: darken($teal, 20)
        .container
            .section-title
                color: $blue
                &::before, &::after
                    background-color: $blue
        .columns-container
            position: relative
            width: 100%
            display: table
            background-color: darken($teal, 20)
            overflow: hidden
            .container
                display: flex
                justify-content: space-between
                .col
                    z-index: 1
                    padding-right: 10px
                    &.left
                        flex: 0 0 45%
                        padding-bottom: 50px
                        .egg
                            height: 280px
                            width: 230px
                            margin: 0 auto 30px
                            border-radius: 50% 50% 50% 50%/60% 60% 40% 40%
                            background-image: url('/me.jpg')
                            background-position: 50%
                            background-size: cover
                            background-repeat: no-repeat
                            -webkit-animation: shaking_weak .3s infinite alternate
                            animation: shaking_weak .3s infinite alternate
                            transition: .5s
                        .texts
                            .title
                                color: $blue
                                font-family: Fira Code
                                font-weight: 700
                                font-size: 30px
                                margin-bottom: 20px
                                text-align: center
                            .desc
                                padding-left: 25px
                                position: relative
                                color: $blue
                                font-size: 18px
                                margin-bottom: 10px
                                font-weight: 700
                                font-family: Fira Code
                                a
                                    color: lighten($blue, 25)
                                &::before
                                    content: '>_'
                                    position: absolute
                                    left: 0
                                    font-family: Fira Code
                                    font-size: 14px
                    &.right
                        flex: 0 0 55%
                        background-color: $blue
                        position: relative
                        &::before
                            content: ''
                            position: absolute
                            background-image: url('/images/about/right-wave.svg')
                            background-size: cover
                            background-position: left
                            background-repeat: no-repeat
                            left: -1px
                            width: 100px
                            height: 100%
                            top: -1px
            &::after
                content: ''
                background-color: $blue
                width: 50%
                height: 100%
                position: absolute
                top: 0px
                left: calc(50% + 300px)

</style>