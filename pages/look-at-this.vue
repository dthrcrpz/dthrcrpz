<template>
    <div>
        redirecting...
    </div>
</template>

<script>
    export default {
        mounted () {
            location.href = `https://youtu.be/dQw4w9WgXcQ`
        },
        head () {
			return {
                title: `Look at This | dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `Look at This | dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `Look at This | dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}/find-the-rabbit` },
                    { hid: 'og:image', property: 'og:image', content: `${process.env.websiteUrl}/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },

                    { hid: 'description', property: 'description', content: `You need to take a look at this.` },
                    { hid: 'og:description', property: 'og:description', content: `You need to take a look at this.` },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}/find-the-rabbit` }
                ],
			}
		}
    }
</script>

<style lang="sass" scoped>
    .page-find-the-rabbit
        padding: 100px 0
        .container
            .header
                margin-bottom: 30px
                h1
                    margin-bottom: 20px
            .puzzle-container
                margin-top: 20px
                display: flex
                flex-flow: row wrap
                justify-content: space-between
                .col
                    flex: 0 0 100%
                .game
                    .holes-container
                        display: flex
                        margin-bottom: 10px
                        flex-flow: row wrap
                        .hole
                            width: 50px
                            height: 50px
                            background-color: #FFCF43
                            border: 1px solid #FFCF43
                            margin-right: 10px
                            margin-bottom: 10px
                            cursor: pointer
                            color: #1A2238
                            text-align: center
                            display: flex
                            justify-content: center
                            align-items: center
                            font-weight: 600
                            transition: .4s
                            &:hover
                                background-color: #1A2238
                                color: #FFCF43
                    .status
                        font-size: 25px
                        &.fail
                            color: #ff5757
                        &.success
                            color: #5CE0D8
                .logs
                    margin-top: 30px
                    .counter
                        margin-bottom: 10px
                    .button
                        max-width: 300px
                        margin-bottom: 10px
                        &.reset
                            max-width: 100px
                    .logs-container
                        margin-top: 20px
                        padding: 20px
                        border: 1px solid #FFCF43
                        max-height: 200px
                        overflow-y: scroll
                        display: flex
                        flex-direction: column-reverse
                        p
                            display: block
                            margin-bottom: 5px
                            font-size: 14px
</style>