<template>
    <nav>
        <div class="container">
            <div class="col logo-wrapper">
                <nuxt-link class="logo" to="/">dthrcrpz</nuxt-link>
            </div>
            <div class="col links-wrapper">
                <a href="javascript:void(0)">about me</a>
                <a href="javascript:void(0)">projects</a>
                <a href="javascript:void(0)">connect</a>
            </div>
        </div>
    </nav>
</template>

<style lang="sass">
    nav
        user-select: none
        padding: 15px 0
        background-color: rgba(0, 18,32, 0.8)
        position: fixed
        top: 0
        left: 0
        right: 0
        width: 100%
        z-index: 10
        .container
            display: flex
            justify-content: space-between
            .col
                &.logo-wrapper
                    .logo
                        color: $teal
                        font-family: Fira Code
                        font-size: 25px
                        font-weight: 600
                &.links-wrapper
                    display: flex
                    align-items: center
                    a
                        margin-right: 20px
            
</style>