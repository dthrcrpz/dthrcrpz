<template>
    <section class="about">
        <div class="container">
            <h2 class="section-title">
                <img src="/images/about/icon.svg" alt="about-dthrcrpz">
                <span>about me</span>
            </h2>
        </div>
        <div class="columns-container">
            <div class="container">
                <div class="col left">
                    <div class="egg"></div>
                    <div class="texts">
                        <p class="title">Who's this guy?</p>
                        <p class="desc has-bash">
                            A <i>self-proclaimed</i> highly skilled and creative Full Stack Web Developer
                        </p>
                        <p class="desc has-bash">
                            Solid experience on developing user-centered websites using the stacks mentioned <a href="javascript:void(0)">HERE</a>
                        </p>
                        <p class="desc has-bash">
                            Developed responsive, optimized, and SEO-friendly websites for more than 4 years, using the best practices and latest UX trends for best user experience
                        </p>
                        <p class="desc has-bash">
                            Extensive knowledge in developing web applications with multiple APIs and third-party integrations
                        </p>
                    </div>
                    <div class="triangle">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div class="col right">
                    <div class="texts">
                        <div class="code">
                            <img src="/images/about/code.svg" alt="">
                        </div>
                        <p class="title">Tech Stacks</p>
                        <div class="stack">
                            <p class="category has-bash">Front-end</p>
                            <ul>
                                <li>Nuxt</li>
                                <li>Vue</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>SASS/LESS/Stylus</li>
                            </ul>
                        </div>
                        <div class="stack">
                            <p class="category has-bash">Back-end</p>
                            <ul>
                                <li>Laravel</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>Redis</li>
                            </ul>
                        </div>
                        <div class="stack">
                            <p class="category has-bash">Server</p>
                            <ul>
                                <li>Ubuntu, CentOS</li>
                                <li>NginX, Apache</li>
                                <li>AWS (Favorite)</li>
                            </ul>
                        </div>
                        <div class="stack">
                            <p class="category has-bash">Tools</p>
                            <ul>
                                <li>Git</li>
                                <li>WSL</li>
                                <li>VSCode</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted () {
            let targets = [
                `.section-title`,
                `section.about > div.columns-container > div > div.col.left .texts p`
            ]

            this.animateElements(targets)
        }
    }
</script>

<style scoped lang="sass">
    .about
        position: relative
        padding-top: 50px
        background-color: darken($teal, 20)
        .container
            .section-title
                color: $blue
                transition: 1s
                opacity: 0
                transform: translateY(-10px)
                &.ov
                    opacity: 1
                    transform: translateY(0px)
        .columns-container
            position: relative
            width: 100%
            display: table
            background-color: darken($teal, 20)
            overflow: hidden
            .container
                display: flex
                justify-content: space-between
                .has-bash
                    padding-left: 25px
                    position: relative
                    &::before
                        content: '>_'
                        position: absolute
                        left: 0
                        font-family: Fira Code
                        font-size: 14px
                .col
                    padding: 60px 0
                    .texts
                        .title
                            color: $blue
                            font-family: Fira Code
                            font-weight: 700
                            font-size: 30px
                            margin-bottom: 20px
                            text-align: center
                    &.left
                        flex: 0 0 45%
                        position: relative
                        padding-right: 10px
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
                            p
                                transition: 1s
                                opacity: 0
                                transform: translateX(-30px)
                                &.ov
                                    opacity: 1
                                    transform: translateX(0px)
                            .desc
                                color: $blue
                                font-size: 18px
                                margin-bottom: 10px
                                font-weight: 700
                                font-family: Fira Code
                                a
                                    color: lighten($blue, 25)
                        .triangle
                            position: absolute
                            bottom: 0
                            left: 0
                            width: 100%
                            overflow: hidden
                            line-height: 0
                            transform: rotate(180deg)
                            svg
                                position: relative
                                display: block
                                width: calc(100% + 1.3px)
                                height: 28px
                                .shape-fill
                                    fill: $blue
                        &::after
                            content: ''
                            position: absolute
                            background-image: url('/images/about/right-wave.svg')
                            background-size: cover
                            background-position: left
                            background-repeat: no-repeat
                            left: 100%
                            width: 100px
                            height: 100%
                            top: 0px
                    &.right
                        flex: 0 0 55%
                        background-color: $blue
                        display: flex
                        align-items: center
                        padding-left: 165px
                        justify-content: center
                        flex-flow: row wrap
                        .texts
                            flex: 0 0 100%
                            z-index: 1
                            .code
                                margin: 0 auto 20px
                                max-width: 250px
                                img
                                    width: 100%
                                    border-radius: 100%
                                    animation: dimming_shadow .4s infinite alternate
                                    box-shadow: 0 0 11px rgb(92 224 216)
                            .title
                                color: $yellow
                            .stack
                                margin-bottom: 18px
                                font-family: Fira Code
                                .category
                                    font-size: 24px
                                    color: $yellow
                                    &::before
                                        top: unset
                                        bottom: 5px
                                        color: $yellow
                                ul
                                    column-count: 2
                                    list-style-type: disclosure-closed
                                    li
                                        margin-left: 20px
            &::after
                content: ''
                background-color: $blue
                width: 50%
                height: 100%
                position: absolute
                top: 0px
                left: calc(50% + 300px)

</style>