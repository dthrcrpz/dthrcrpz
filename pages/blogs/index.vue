<template>
    <div class="page-blog">
        
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