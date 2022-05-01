<template>
  <div>
    <Hero/>
    <About/>
    <Technicalities/>
    <Projects/>
    <Thanks/>
  </div>
</template>

<script>
  import Hero from "@/components/pages/index/Hero.vue"
  import About from "@/components/pages/index/About.vue"
  import Technicalities from "@/components/pages/index/Technicalities.vue"
  import Projects from "@/components/pages/index/Projects.vue"
  import Thanks from "@/components/pages/index/Thanks.vue"

  export default {
    components: {
      Hero,
      About,
      Technicalities,
      Projects,
      Thanks
    }
  }
</script>