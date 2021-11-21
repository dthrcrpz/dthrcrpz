<template>
    <footer>
        <div class="container">
            <p class="powered-by">This website is powered by:</p>
            <div class="plugs">
                <a rel="noopener" href="https://nuxtjs.org/" target="_blank">
                    <img src="/images/footer/plugs/nuxt.svg" alt="">
                </a>
                <a rel="noopener" class="layer0" href="https://www.layer0.co/" target="_blank">
                    <img src="/images/footer/plugs/layer0.svg" alt="">
                </a>
            </div>
            <div class="copyright">
                © 2021 Deither Corpuz. All rights reserved.
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
            .powered-by
                margin: 0 auto 10px
                text-align: center
                font-size: 14px
                font-family: Fira Code
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
                    img
                        width: 100%
            .copyright
                font-family: Fira Code
                text-align: center
                font-size: 14px
</style>