<template>
    <div class="page-blogs">
        <div class="banner h-[300px] bg-dark-teal relative">
            <div class="cntnr flex flex-row h-full items-center justify-start sm:justify-center">
                <div class="icon flex-grow-0 flex-shrink-0 w-[100px] block">
                    <img src="/images/blogs/icon.svg" alt="blogs-icon" class="w-full">
                </div>
                <div class="texts pl-5">
                    <h1 class="w-full text-dark-blue font-bold text-3xl">blogs</h1>
                    <h2 class="w-full text-lg text-dark-blue font-bold">Just some stories & thoughts I'd like to share</h2>
                </div>
            </div>
            <img class="divider absolute bottom-0 w-full" src="/images/blogs/banner-divider.svg" alt="banner-divider">
        </div>
        <div class="boxes-wrapper min-h-[50vh] mb-8 mt-9">
            <div class="cntnr flex flex-wrap justify-start">
                <div class="box flex-grow-0 flex0 w-full md:w-1/2" key="ftr420">
                    <nuxt-link v-for="(blog, key) in blogs" :key="key" :to="blog.url" class="real-box duration-500 w-full flex flex-col h-full relative translate-x-[-3px] translate-y-[-3px] hover:translate-y-0 hover:translate-x-0 hover:after:translate-x-0 hover:after:translate-y-0 after:translate-y-[3px] after:translate-x-[3px] after:bg-red dark:after:bg-teal">
                        <div class="top w-full pt-[55%] relative overflow-hidden z-[2]">
                            <img :src="`/images/blogs/${blog.image}`" alt="find-the-rabbit" class="absolute w-full h-full object-cover top-0 left-0 bottom-0 right-0">
                        </div>
                        <div class="bottom px-5 py-5 relative z-[2] bg-dark-blue">
                            <div class="texts">
                                <p class="date text-sm font-montserrat opacity-70 text-yellow">{{ blog.date }}</p>
                                <p class="title text-lg font-fira-code font-semibold text-yellow">{{ blog.title }}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            blogs: [
                {
                    title: 'Find the Rabbit',
                    date: 'Dec 03, 2021',
                    url: '/blogs/find-the-rabbit',
                    image: 'rabbit.jpg'
                }
            ]
        }),
        methods: {
            properDate (date) {
                return this.$moment(date).format('MMM Do, YYYY')
            },
            removeNavLinks () {
                let navLinks = document.querySelectorAll(`nav .cntnr .col.links-wrapper a`)
                navLinks.forEach(link => {
                    link.classList.remove('active')
                })
            }
        },
        mounted () {
            this.removeNavLinks()
        },
        head () {
			return {
                title: `blogs | dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `blogs | dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `blogs | dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}/blogs` },
                    { hid: 'og:image', property: 'og:image', content: `${process.env.websiteUrl}/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },

                    { hid: 'description', property: 'description', content: `Just some stories & thoughts I'd like to share` },
                    { hid: 'og:description', property: 'og:description', content: `Just some stories & thoughts I'd like to share` },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}/blogs` }
                ],
			}
		}
    }
</script>

<style scoped>
    .real-box::before, .real-box::after  {
        transition: .5s;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        margin: auto;
    }
    .real-box::before {
        width: 70%;
        height: 70%;
        z-index: 1;
        box-shadow: 0 0 50px #5CE0D8;
        transition: .4s;
    }
</style>