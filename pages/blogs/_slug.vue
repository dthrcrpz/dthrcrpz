<template>
    <div class="page-blog-slug">
        <section class="header">
            <div class="container">
                <div class="banner" v-if="blog.fields.hasOwnProperty('banner')">
                    <img :src="`https:${blog.fields.banner.fields.file.url}`" alt="">
                </div>
                <h1>{{ blog.fields.title }}</h1>
            </div>
        </section>
        <section class="content">
            <div class="container">
                <RichTextRenderer :document="blog.fields.body" :nodeRenderers="renderNodes()"/>
            </div>
        </section>
    </div>
</template>

<script>
    import { createClient } from "~/plugins/contentful"
    import RichTextRenderer from 'contentful-rich-text-vue-renderer'
    import { BLOCKS } from '@contentful/rich-text-types'

    const client = createClient()

    export default {
        components: {
            RichTextRenderer
        },
        data: () => ({
            blog: null
        }),
        methods: {
            renderNodes () {
                return {
                    [BLOCKS.EMBEDDED_ASSET]: (node, key, h, next) => {
                        let imageWidth = node.data.target.fields.file.details.image.width

                        return h('img', {
                            key: key,
                            attrs: {
                                src: `https:${node.data.target.fields.file.url}`,
                                title: node.data.target.fields.file.fileName,
                                alt: node.data.target.fields.file.fileName,
                            },
                            style: {
                                maxWidth: '100%',
                                width: `${imageWidth}px`
                            }
                        })
                    }
                }
            }
        },
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
        min-height: 90vh
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
        .content
            margin: 30px auto 100px
            .container
                p, h1, h2, h3, h4, h5, h6, hr
                    margin-bottom: 20px
                hr
                    width: 90%
                    margin: 40px auto
                    border: 1px solid $teal
</style>