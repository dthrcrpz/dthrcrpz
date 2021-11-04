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
        },
        head () {
			return {
                title: `dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}` },
                    { hid: 'og:image', property: 'og:image', content: `https://dthrcrpz.me/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}` }
                ],
			}
		}
    }
</script>