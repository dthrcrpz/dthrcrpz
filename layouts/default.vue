<template>
  <Head>
    <Meta charset="utf-8" />
		<Meta name="viewport" content="width=device-width" />
    <!-- Primary Tags -->
    <Meta name="title" content="dthrcrpz"/>
		<Meta name="description" content="Deither Corpuz's portfolio website"/>
    <Title>dthrcrpz</Title>

    <!-- OG / Facebook -->
    <Meta property="og:title" content="dthrcrpz"/>
		<Meta property="og:type" content="website"/>
		<Meta property="og:image" content="/images/dthrcrpz-mask.png"/>
		<Meta property="og:url" content="https://dthrcrpz.dev"/>
		<Meta property="og:description" content="Deither Corpuz's portfolio website"/>
		<Meta property="og:site_name" content="dthrcrpz"/>
		<Meta property="og:image:type" content="image/png"/>
		<Meta property="og:image:width" content="1200"/>
		<Meta property="og:image:height" content="628"/>
		<Meta property="og:image:alt" content="dthrcrpz"/>
		<Meta property="og:image:url" content="/images/dthrcrpz-mask.png"/>
		<Meta property="og:image:secure_url" content="/images/dthrcrpz-mask.png"/>

		<!-- Twitter -->
		<Meta property="twitter:card" content="summary_large_image"/>
		<Meta property="twitter:url" content="https://dthrcrpz.dev"/>
		<Meta property="twitter:title" content="dthrcrpz"/>
		<Meta property="twitter:description" content="Deither Corpuz's portfolio website"/>
		<Meta property="twitter:image" content="/images/dthrcrpz-mask.png"/>

		<!-- Extras -->
		<Meta name="keywords" content="deither, corpuz, deither corpuz, deither corpuz portfolio, deither portfolio, corpuz portfolio, web developer, laravel developer, vue developer, laravel, vue, fullstack web developer, full-stack, full stack developer"/>
		<Meta name="format-detection" content="telephone=no"/>
		<Link rel="canonical" href="https://dthrcrpz.dev"/>

		<!-- Favicon and fonts -->
		<Link rel="icon" href="/favicon.png" />
		<Link rel="preconnect" href="https://fonts.googleapis.com"/>
		<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<Link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"/>
  </Head>

	<Navbar/>
	<div class="pt-[67.92px]">
	  <slot/>
	</div>
</template>

<script>
	import Navbar from "@/components/global/Navbar.vue"

	export default {
		components: {
			Navbar
		}
	}
</script>