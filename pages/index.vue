<template>
    <div class="page-index">
        <Intro/>
        <About/>
    </div>
</template>

<script>
    export default {
        components: {
            Intro: () => import('@/components/index/Intro'),
            About: () => import('@/components/index/About'),
        }
    }
</script>

<style scoped lang="sass">
    .page-index
</style>