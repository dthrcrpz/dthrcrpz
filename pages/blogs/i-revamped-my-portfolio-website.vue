<template>
    <div class="pt-24 min-h-screen">
        <section class="header">
            <div class="cntnr">
                <div class="banner mb-5">
                    <img :src="`/images/blogs/${blog.image}`" alt="" class="w-full max-w-2xl">
                </div>
                <p class="date text-base text-dark-blue dark:text-yellow opacity-70 font-montserrat">{{ blog.date }}</p>
                <h1 class="text-3xl text-dark-blue dark:text-yellow font-bold font-fira-code">{{ blog.title }}</h1>
            </div>
        </section>
        <section class="content mt-5 mb-20">
            <div class="cntnr">
                <p>
                    After <b>NOT</b> doing my best to motivate myself, I finally had the energy to code my new portfolio website.
                    <br><br>
                    I looked into bunch of web design ideas/tips from different sources, hoping to gain some knowledge and apply it here.
                    <br><br>
                    I chose these color schemes, minimalistic design, and <b>NOT SO FORMAL</b> path because I think it resembles my personality.... or nah. Idk, maybe I just think this is cool.
                </p>
                <p class="text-dark-blue dark:text-yellow font-semibold text-2xl my-5">Here are the changes I made:</p>
                <div v-for="(version, key) in versions" :key="key" class="mb-16">
                    <p class="text-dark-blue dark:text-yellow font-semibold text-xl mb-3">{{ version.label }}:</p>
                    <p>--Old--</p>
                    <img :src="`/images/blogs/i-revamped-my-portfolio-website/old_${version.id}.png`" class="mb-5">
                    <p>--New--</p>
                    <img :src="`/images/blogs/i-revamped-my-portfolio-website/new_${version.id}.png`">
                </div>
                <p class="text-dark-blue dark:text-yellow font-semibold text-xl my-5">Update: I'll add an image viewer soon. I felt lazy again.</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            blog: {
                title: 'I Revamped My Portfolio Website',
                slug: 'i-revamped-my-portfolio-website',
                date: 'Oct 20, 2021',
                image: 'smart-doge.jpg',
                metaDescription: `After NOT doing my best to motivate myself, I finally had the energy to code my new portfolio website.`,
            },
            versions: [
                { label: 'Banner', id: 'banner' },
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact Form', id: 'contact' }
            ]
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