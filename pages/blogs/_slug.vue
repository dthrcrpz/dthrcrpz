<template>
    <div class="pt-24 min-h-screen">
        <section class="header">
            <div class="cntnr">
                <div class="banner mb-5">
                    <img :src="`/images/blogs/${blog.image}`" alt="" class="w-full">
                </div>
                <p class="date text-base text-dark-blue dark:text-yellow opacity-70 font-montserrat">{{ blog.date }}</p>
                <h1 class="text-3xl text-dark-blue dark:text-yellow font-bold font-fira-code">{{ blog.title }}</h1>
            </div>
        </section>
        <section class="content mt-5 mb-20">
            <div class="cntnr">
                <p>
                    Oooooh yeahhhh I've done it in a single day! <br><br>
                    Every time I work on a new Laravel project, I have always copy-pasted my File Manager module from my previous projects. <br><br>
                    The problem is, if my colleagues use it, there would be lots of back and forth as they're not used to it yet since there's no documentation and it's hard to locate the right files/codes to copy.
                    <br><br>
                    I also wanted to challenge myself and expand my knowledge on how Laravel works behind the scenes so I read Laravel's documentation <a href="https://laravel.com/docs/8.x/packages" target="_blank" class="a-link">here</a>.
                    <br><br>
                    So... after playing around for a day, I managed to get it done and publish it on Github and Packagist. The repository is at <a href="https://github.com/dthrcrpz/laravel-file-library" target="_blank" class="a-link">dthrcrpz/laravel-file-library (github.com)</a>. Documentation is included.
                    <br><br>
                    It's a very simple package and there's a lot lot lot lot of room for improvement.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            blog: {
                title: 'I Developed My First Laravel Package',
                slug: 'i-developed-my-first-laravel-package',
                date: 'Nov 23, 2021',
                image: 'laravel-package.png',
                metaDescription: `A simple package to upload files and attach them to your Models`,
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