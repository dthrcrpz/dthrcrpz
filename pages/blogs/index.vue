<template>
    <div class="page-blogs">
        <div class="banner">
            <div class="container">
                <h1>blogs</h1>
                <h2>Just some stories I would like to share</h2>
            </div>
            <img class="divider" src="/images/blogs/banner-divider.svg" alt="banner-divider">
        </div>
    </div>
</template>

<script>
    import { createClient } from "~/plugins/contentful"

    const client = createClient()

    export default {
        data: () => ({
            blogs: []
        }),
        asyncData ({ env }) {
            return Promise.all([
                client.getEntries({
                    'content_type': 'blog',
                    'order': '-sys.createdAt'
                })
            ]).then(([blogs]) => {
                return {
                    blogs: blogs
                }
            })
        }
    }
</script>

<style scoped lang="sass">
    .page-blogs
        .banner
            height: 300px
            background-color: #22b4ab
            position: relative
            .container
                display: flex
                flex-flow: column
                height: 100%
                align-items: center
                justify-content: center
                h1
                    color: $blue
                    text-align: center
                h2
                    font-size: 18px
                    color: $blue
                    text-align: center
            .divider
                position: absolute
                bottom: 0
                width: 100%
</style>