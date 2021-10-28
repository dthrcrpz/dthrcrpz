<template>
    <div class="page-blogs">
        <div class="banner">
            <div class="container">
                <div class="icon">
                    <img src="/images/blogs/icon.svg" alt="blogs-icon">
                </div>
                <div class="texts">
                    <h1>blogs</h1>
                    <h2>Just some stories I would like to share</h2>
                </div>
            </div>
            <img class="divider" src="/images/blogs/banner-divider.svg" alt="banner-divider">
        </div>
        <div class="boxes-wrapper">
            <div class="container">
                <div class="box" v-for="(blog, key) in blogs.items" :key="key">
                    <nuxt-link :to="`/blogs/${blog.fields.slug}`" class="real-box">
                        <div class="top">
                            <img :src="`https:${blog.fields.thumbnail.fields.file.url}`" alt="">
                        </div>
                        <div class="bottom">
                            <div class="texts">
                                <p class="title">{{ blog.fields.title }}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
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
        methods: {
            removeNavLinks () {
                let navLinks = document.querySelectorAll(`nav .container .col.links-wrapper a`)
                navLinks.forEach(link => {
                    link.classList.remove('active')
                })
            }
        },
        asyncData ({ env }) {
            return Promise.all([
                client.getEntries({
                    'content_type': 'blog',
                    'order': '-fields.sequence'
                })
            ]).then(([blogs]) => {
                return {
                    blogs: blogs
                }
            })
        },
        mounted () {
            this.removeNavLinks()
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
                flex-flow: row
                height: 100%
                align-items: center
                justify-content: center
                .icon
                    flex: 0 0 100px
                    display: block
                    img
                        width: 100%
                .texts
                    padding-left: 20px
                    h1
                        width: 100%
                        color: $blue
                    h2
                        width: 100%
                        font-size: 18px
                        color: $blue
                @media (max-width: 580px)
                    justify-content: flex-start
            .divider
                position: absolute
                bottom: 0
                width: 100%
        .boxes-wrapper
            min-height: 50vh
            margin-bottom: 30px
            .container
                display: flex
                flex-flow: row wrap
                justify-content: flex-start
                .box
                    flex: 0 0 50%
                    padding: 20px
                    @media (max-width: 768px)
                        flex: 0 0 100%
                    .real-box
                        transition: .4s
                        width: 100%
                        display: flex
                        flex-flow: column
                        height: 100%
                        position: relative
                        transition: .4s
                        transform: translate(-3px, -3px)
                        &:hover
                            transform: translate(0px, 0px)
                            &::before
                                box-shadow: 0 0 100px $teal
                            &::after
                                transform: translate(0px, 0px)
                        &::before, &::after
                            transition: .4s
                            content: ''
                            position: absolute
                            top: 0
                            left: 0
                            right: 0
                            bottom: 0
                            width: 100%
                            height: 100%
                            z-index: 1
                            margin: auto
                        &::before
                            width: 70%
                            height: 70%
                            z-index: 1
                            box-shadow: 0 0 50px $teal
                            transition: .4s
                        &::after
                            background-color: $teal
                            transform: translate(3px, 3px)
                        .top
                            width: 100%
                            padding-top: 55%
                            position: relative
                            overflow: hidden
                            z-index: 2
                            img
                                position: absolute
                                width: 100%
                                height: 100%
                                object-fit: cover
                                top: 0
                                left: 0
                                bottom: 0
                                right: 0
                        .bottom
                            padding: 20px
                            position: relative
                            z-index: 2
                            background-color: $blue
                            .texts
                                .title
                                    font-family: Fira Code
                                    font-weight: 600
</style>