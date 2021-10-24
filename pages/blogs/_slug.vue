<template>
    <div class="page-blog-slug">
        <section class="header">
            <div class="container">
                <div class="banner" v-if="blog.fields.hasOwnProperty('banner')">
                    <img :src="`https:${blog.fields.banner.fields.file.url}`" alt="">
                </div>
                <h1>{{ blog.fields.title }}</h1>
            </div>
            {{ blog.fields }}
        </section>
    </div>
</template>

<script>
    import { createClient } from "~/plugins/contentful"

    const client = createClient()

    export default {
        data: () => ({
            blog: null
        }),
        asyncData ({ env, params }) {
            return Promise.all([
                client.getEntries({
                    'content_type': 'blog',
                    'fields.slug': params.slug
                })
            ]).then(([blog]) => {
                return {
                    blog: blog.items[0]
                }
            })
        },
    }
</script>

<style scoped lang="sass">
    .page-blog-slug
        padding-top: calc(30px + #{$navHeight})
        .header
            .container
                .banner
                    margin-bottom: 20px
                    img
                        max-width: 100%
                h1
                    font-size: 35px
                    font-family: Fira Code
                    font-weight: 600
</style>