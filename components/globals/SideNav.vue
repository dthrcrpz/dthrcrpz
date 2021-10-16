<template>
    <div :class="{ 'sidenav': true, 'show': showSideNav }">
        <div class="container">
            <div class="links-wrapper">
                <a href="javascript:void(0)">about me</a>
                <a href="javascript:void(0)">projects</a>
                <a href="javascript:void(0)">contact</a>
            </div>
        </div>
    </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                showSideNav: 'globals/getShowSideNav',
            })
        },
        methods: {
            ...mapMutations({
                setShowSideNav: 'globals/setShowSideNav'
            })
        }
    }
</script>

<style lang="sass" scoped>
    .sidenav
        position: fixed
        top: $navHeight
        max-width: 300px
        width: 100%
        right: 0
        height: calc(100% - #{$navHeight})
        background-color: rgba(0, 18,32, 0.9)
        user-select: none
        z-index: 10
        display: none
        transition: .4s
        right: -300px
        opacity: 0
        &.show
            right: 0px
            opacity: 1
        @media (max-width: 768px)
            display: block
        .container
            .links-wrapper
                margin-top: 40px
                a
                    margin: 0 auto 20px
                    text-align: center
                    position: relative
                    display: table
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
</style>