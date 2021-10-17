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
				meta: [
                    { hid: 'title', property: 'title', content: `dthrcrpz` },
					{ hid: 'description', property: 'description', content: `Deither Corpuz's portfolio` },
					{ hid: 'og:description', property: 'og:description', content: `Deither Corpuz's portfolio` },
                    { hid: 'og:title', property: 'og:title', content: `dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `https://dthrcrpz.me` },
                    { hid: 'og:type', property: 'og:type', content: 'website' },
                    { hid: 'og:site_name', property: 'og:site_name', content: 'dthrcrpz' },
                    { hid: 'og:image', property: 'og:image', content: `https://dthrcrpz.me/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },
                    { hid: 'keywords', property: 'keywords', content: 'deither, corpuz, deither corpuz, deither corpuz portfolio, deither portfolio, corpuz portfolio, web developer, laravel developer, vue developer, laravel, vue, fullstack web developer, full-stack, full stack developer' },
				],
				link: [
                    { rel: 'canonical', href: `https://dthrcrpz.me` }
                ],
			}
		}
    }
</script>