<template>
    <div class="page-find-the-rabbit">
        redirecting...
    </div>
</template>

<script>
    export default {
        asyncData ({ redirect }) {
            redirect(302, '/blogs/find-the-rabbit')
        },
        head () {
			return {
                title: `Find the Rabbit | dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `Find the Rabbit | dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `Find the Rabbit | dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}/find-the-rabbit` },
                    { hid: 'og:image', property: 'og:image', content: `${process.env.websiteUrl}/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },

                    { hid: 'description', property: 'description', content: `A puzzle you're gonna want to solve fast` },
                    { hid: 'og:description', property: 'og:description', content: `A puzzle you're gonna want to solve fast` },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}/find-the-rabbit` }
                ],
			}
		}
    }
</script>