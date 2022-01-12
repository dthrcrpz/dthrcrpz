<template>
    <div class="pt-24 min-h-screen">
        <section class="header">
            <div class="cntnr">
                <div class="banner mb-5">
                    <img src="/images/blogs/rabbit.jpg`" alt="" class="w-full">
                </div>
                <p class="date text-base text-dark-blue dark:text-yellow opacity-70 font-montserrat">Oct 31, 2021</p>
                <h1>Wala</h1>
            </div>
        </section>
        <section class="content">
            <div class="cntnr">
                hehhe
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            blog: {
                title: 'Hehe',
                slug: 'hehe',
                image: 'rabbit.png',
                metaDescription: `heheh`,
            }
        }),
        head () {
			return {
                title: `${this.blog.title} | dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `${this.blog.title} | dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `${this.blog.title} | dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}/blogs/${this.blog.slug}` },
                    { hid: 'og:image', property: 'og:image', content: `${process.env.websiteUrl}/images/blogs/${this.blog.image}` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: `${this.blog.title}` },

                    { hid: 'description', property: 'description', content: `${this.blog.metaDescription}` },
                    { hid: 'og:description', property: 'og:description', content: `${this.blog.metaDescription}` },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}/blogs/${this.blog.slug}` }
                ],
			}
		}
    }
</script>

<style scoped>

</style>