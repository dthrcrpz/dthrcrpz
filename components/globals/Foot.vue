<template>
    <footer>
        <div class="container">
            <div class="plugs">
                <a href="https://nuxtjs.org/" target="_blank">
                    <img src="/images/footer/plugs/nuxt.svg" alt="">
                </a>
                <a class="netlify" href="https://www.netlify.com/" target="_blank">
                    <img src="/images/footer/plugs/netlify.svg" alt="">
                </a>
            </div>
            <div class="copyright">
                Copyright © 2021. All Rights Reserved.
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
    footer
        padding-bottom: 30px
        .land
            width: 100%
        .container
            .plugs
                display: flex
                width: 100%
                justify-content: center
                margin-bottom: 20px
                align-items: center
                a
                    max-width: 100px
                    width: 100%
                    margin: 0 10px
                    transition: .4s
                    &:hover
                        transform: scale(1.1)
                    &.netlify
                        max-width: 80px
                    img
                        width: 100%
            .copyright
                text-align: center
</style>