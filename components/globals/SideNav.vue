<template>
    <div :class="`fixed top-[62px] max-w-[300px] w-full h-screen pt-[62px] bg-gray-200 dark:bg-dark-teal select-none z-[9] duration-500 ${(showSideNav) ? 'right-0 opacity-1' : 'right-[-300px] opacity-0' } shadow-md`">
        <div class="container">
            <div class="links-wrapper mt-10">
                <template v-if="showIndexItems">
                    <a :class="`${(link.class == activeAnchor) ? 'active' : ''} mt-0 mx-auto mb-5 text-center relative table text-dark-blue dark:text-dark-blue`" href="javascript:void(0)" v-for="(link, key) in navLinks" :key="key" @click="scrollTo(link)">{{ link.label }}</a>
                    <div class="separator"></div>
                </template>
                <nuxt-link to="/blogs" class="mt-0 mx-auto mb-5 text-center relative table text-dark-blue dark:text-dark-blue">blogs</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                showSideNav: 'globals/showSideNav',
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

<style scoped>
    .links-wrapper a::before, .links-wrapper a::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: #1A2238;
        bottom: -5px;
        transition: .4s;
        width: 0%;
    }
    .links-wrapper a::before {
        left: 50%;
    }
    .links-wrapper a::after {
        right: 50%;
    }
    .links-wrapper a.active::before,
    .links-wrapper a.active::after,
    .links-wrapper a.nuxt-link-active::before,
    .links-wrapper a.nuxt-link-active::after {
        width: 50%;
    }
</style>