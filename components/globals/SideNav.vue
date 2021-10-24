<template>
    <div :class="{ 'sidenav': true, 'show': showSideNav }">
        <div class="container">
            <div class="links-wrapper">
                <template v-if="showIndexItems">
                    <a :class="{ 'active': link.class == activeAnchor }" href="javascript:void(0)" v-for="(link, key) in navLinks" :key="key" @click="scrollTo(link)">{{ link.label }}</a>
                    <div class="separator"></div>
                </template>
                <nuxt-link to="/blogs">blogs</nuxt-link>
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
            }),
            showIndexItems () {
                return this.$route.path == '/'
            }
        },
        data: () => ({
            navLinks: [
                { label: 'about me', class: '.about' },
                { label: 'projects', class: '.projects' },
                { label: 'contact', class: '.contact' },
            ],
            activeAnchor: null,
        }),
        methods: {
            ...mapMutations({
                setShowSideNav: 'globals/setShowSideNav'
            }),
            scrollTo (link) {
                this.$scrollTo(link.class, 500, {
                    onStart: () => {
                        this.setShowSideNav(false)
                        this.activeAnchor = link.class
                    }
                })
            },
        },
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
                    &:hover, &.active, &.nuxt-link-active
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
                .separator
                    width: 100%
                    max-width: 100px
                    height: 2px
                    background-color: $teal
                    display: block
                    margin: 0 auto 20px
</style>