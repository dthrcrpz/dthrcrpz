<template>
    <nav class="select-none py-[15px] px-0 bg-gray-200 bg-opacity-90 fixed top-0 left-0 right-0 w-full z-10 duration-500 dark:bg-dark-blue">
        <div class="cntnr flex justify-between items-center">
            <div class="col logo-wrapper">
                <nuxt-link class="logo text-dark-blue font-fira-code text-2xl font-semibold duration-500 dark:text-teal" to="/">dthrcrpz</nuxt-link>
            </div>
            <div class="flex justify-between items-center">
                <div @click="toggleTheme()" class="user text-purple cursor-pointer text-3xl leading-none mr-4 text-dark-blue hover:text-red focus:text-red duration-500 dark:text-teal dark:hover:text-yellow">
                    <font-awesome-icon icon="sun" v-show="theme == 'dark'"/>
                    <font-awesome-icon icon="moon" v-show="theme == 'light'"/>
                </div>
                <div class="user text-purple cursor-pointer text-3xl leading-none mr-3 text-dark-blue hover:text-red focus:text-red duration-500 dark:text-teal dark:hover:text-yellow">
                    <font-awesome-icon icon="bars"/>
                </div>
            </div>
            <!-- <div :class="{ 'col': true, 'burger': true, 'active': showSideNav }"
            >
                <a href="javascript:void(0)" @click="toggleSideNav()">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div> -->
        </div>
    </nav>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                showSideNav: 'globals/showSideNav',
                theme: 'globals/theme',
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
            scrolling: false,
            scrolled: false
        }),
        methods: {
            ...mapMutations({
                setShowSideNav: 'globals/setShowSideNav',
                setTheme: 'globals/setTheme',
            }),
            scrollTo (link) {
                this.$ga.event({
                    eventCategory: 'click',
                    eventAction: 'navbarlinkClick',
                    eventLabel: 'clickedNavbarLink',
                    eventValue: link.label
                })

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
            },
            toggleTheme () {
                this.setTheme((this.theme == 'dark') ? 'light' : 'dark')
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