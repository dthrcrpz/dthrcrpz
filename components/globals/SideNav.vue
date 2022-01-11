<template>
    <div :class="`fixed top-[62px] max-w-[300px] w-full h-screen pt-[62px] bg-gray-200 dark:bg-dark-blue select-none z-[9] duration-500 ${(showSideNav) ? 'right-0 opacity-1' : 'right-[-300px] opacity-0' } shadow-md`">
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