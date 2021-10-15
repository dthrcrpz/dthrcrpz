<template>
    <nav>
        <div class="container">
            <div class="col logo-wrapper">
                <nuxt-link class="logo" to="/">dthrcrpz</nuxt-link>
            </div>
            <div class="col links-wrapper">
                <a href="javascript:void(0)">about me</a>
                <a href="javascript:void(0)">projects</a>
                <a href="javascript:void(0)">contact</a>
            </div>
            <div class="col burger">
                <a href="javascript:void(0)">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
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
            align-items: center
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
                        position: relative
                        &:hover
                            &:before, &:after
                                width: 50%
                        &:before, &:after
                            content: ''
                            position: absolute
                            height: 2px
                            background-color: $yellow
                            bottom: -5px
                            transition: .4s
                            width: 0%
                        &:before
                            left: 50%
                        &:after
                            right: 50%
                &.burger
                    position: relative
                    width: 35px
                    height: 26px
                    a
                        display: block
                        height: 100%
                        div
                            position: absolute
                            height: 3px
                            background-color: $yellow
                            width: 100%
                            transition: .4s
                            &:nth-child(1)
                                width: 60%
                                top: 0
                                left: 0
                            &:nth-child(2)
                                left: 0
                                top: 50%
                                transform: translateY(-50%)
                            &:nth-child(3)
                                bottom: 0
                                right: 0
                                width: 60%
                        &:hover
                            div
                                &:nth-child(1),
                                &:nth-child(3)
                                    width: 100%
                                &:nth-child(2)
                                    width: 80%
</style>