<template>
    <nav>
        <div class="container">
            <div class="col logo-wrapper">
                <nuxt-link class="logo" to="/">dthrcrpz</nuxt-link>
            </div>
            <div class="col links-wrapper">
                <a :class="{ 'active': link.class == activeAnchor }" href="javascript:void(0)" v-for="(link, key) in navLinks" :key="key" @click="scrollTo(link)">{{ link.label }}</a>
                <div class="separator"></div>
                <nuxt-link to="/blogs">blogs</nuxt-link>
            </div>
            <div :class="{ 'col': true, 'burger': true, 'active': showSideNav }">
                <a href="javascript:void(0)" @click="toggleSideNav()">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                showSideNav: 'globals/getShowSideNav',
            })
        },
        data: () => ({
            navLinks: [
                { label: 'about me', class: '.about' },
                { label: 'projects', class: '.projects' },
                { label: 'contact', class: '.contact' },
            ],
            activeAnchor: null,
            scrolling: false,
            scrolled: false
        }),
        methods: {
            ...mapMutations({
                setShowSideNav: 'globals/setShowSideNav'
            }),
            scrollTo (link) {
                this.$scrollTo(link.class, 500, {
                    onStart: () => {
                        this.scrolling = true
                        this.activeAnchor = link.class
                    },
                    onDone: () => {
                        this.scrolling = false
                    },
                    onCancel: () => {
                        this.scrolling = false
                    }
                })
            },
            toggleSideNav () {
                this.setShowSideNav(!this.showSideNav)
            },
            setScrollObserver () {
                const me = this
                let current_scroll = window.pageYOffset | document.body.scrollTop

                me.scrolled = (current_scroll > 10) ? true : false

                let targets = [
                    `section.intro`,
                    `section.about`,
                    `section.projects`,
                    `section.contact`,
                ]

                /**
                * Observer (IntersectionObserver)
                * @param {[array]} items [target elements] */
                let observer = new IntersectionObserver((items) => {
                    items.forEach((item, key) => {
                        let bounding = item.target.getBoundingClientRect()
                        if (bounding.bottom > 0 &&
                            bounding.right > 0 &&
                            bounding.left < (window.innerWidth || document.documentElement.clientWidth) &&
                            bounding.top < (window.innerHeight || document.documentElement.clientHeight)) {
                            me.activeAnchor = (!me.scrolling) ? `.${item.target.classList.item(0)}` : me.activeAnchor
                        }
                    })
                })

                /**
                * Listing all the elements in order to observe */
                targets.forEach((target, key) => {
                    let element = document.querySelector(target)
                    if (element) {
                        observer.observe(element)
                    }
                })
            }
        },
        mounted () {
            window.addEventListener('scroll', this.setScrollObserver)

            setTimeout(() => {
                this.setScrollObserver()
            }, 200)
        },
        destroyed () {
            window.removeEventListener('scroll', this.setScrollObserver)
        }
    }
</script>

<style lang="sass">
    nav
        user-select: none
        padding: 15px 0
        background-color: rgba(0, 18,32, 0.9)
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
                        height: 20px
                        width: 2px
                        margin-right: 20px
                        background-color: $teal
                        display: block
                &.burger
                    position: relative
                    width: 35px
                    height: 26px
                    display: none
                    border: 1px solid transparent
                    &.active
                        &:hover
                            a
                                div
                                    width: 118% !important
                        a
                            div
                                &:nth-child(2)
                                    opacity: 0
                                &:nth-child(1),
                                &:nth-child(3)
                                    width: 100%
                                &:nth-child(1)
                                    transform: translateX(-3px) translateY(10px) rotate(35deg)
                                    width: 118%
                                &:nth-child(3)
                                    transform: translateX(3px) translateY(-11px) rotate(-35deg)
                                    width: 118%
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
    @media (max-width: 768px)
        nav
            .container
                .col
                    &.links-wrapper
                        display: none
                    &.burger
                        display: block
</style>