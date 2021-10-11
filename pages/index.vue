<template>
    <div class="page-index">
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
</template>

<script>
    export default {
        components: {
            Intro: () => import('@/components/index/Intro'),
            About: () => import('@/components/index/About'),
            Projects: () => import('@/components/index/Projects'),
            Contact: () => import('@/components/index/Contact'),
        }
    }
</script>