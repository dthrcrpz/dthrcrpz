<template>
    <div class="page-index">
        <Intro/>
        <About/>
        <Projects/>
    </div>
</template>

<script>
    export default {
        components: {
            Intro: () => import('@/components/index/Intro'),
            About: () => import('@/components/index/About'),
            Projects: () => import('@/components/index/Projects'),
        }
    }
</script>