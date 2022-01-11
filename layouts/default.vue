<template>
    <div>
        <Navbar/>
        <Nuxt/>
        <Foot/>
        <SideNav/>
        
        <transition name="fade">
            <ModalBackground v-if="showModal"/>
        </transition>

        <transition name="fade">
            <div class="loading" v-if="showLoading"></div>
        </transition>
    </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            Navbar: () => import('~/components/globals/Navbar'),
            SideNav: () => import('~/components/globals/SideNav'),
            ModalBackground: () => import('~/components/globals/ModalBackground'),
            Foot: () => import('~/components/globals/Foot'),
        },
        watch: {
            '$route': {
                handler: function (newVal, oldVal) {
                    this.setShowSideNav(false)
                }
            }
        },
        methods: {
            ...mapMutations({
                setShowSideNav: 'globals/setShowSideNav'
            }),
        },
        computed: {
            ...mapGetters({
                showModal: 'globals/getShowModal',
                showSideNav: 'globals/getShowSideNav',
                showLoading: 'globals/getShowLoading',
            })
        }
    }
</script>