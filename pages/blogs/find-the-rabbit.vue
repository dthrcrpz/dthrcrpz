<template>
    <div class="page-find-the-rabbit py-[100px] px-0">
        <div class="cntnr">
            <div class="header mb-8">
                <h1 class="mb-5 text-3xl font-bold">How Fast Can You Find the Rabbit?</h1>
                <p class="description">
                    I found <a href="https://youtu.be/XEt09iK8IXs?t=1259" class="text-red dark:text-yellow" target="_blank">this Youtube video</a> and I want to know the fastest pattern/algorithm people can make to find the rabbit.
                    <br><br>
                    In this puzzle, there are 20 holes. <br>
                    A rabbit is hidden in a random hole. <br>
                    You're gonna pick a hole to check if the rabbit is there. <br>
                    Every time you pick a <b>wrong</b> hole, the rabbit moves to either <b>Hole + 1</b> or <b>Hole + 2</b>. <br>
                    For example, if the rabbit is in <b>Hole 10</b> and you picked the wrong hole, it will move to either <b>Hole 9</b> or <b>Hole 11</b>. <br><br>
                    You should find the rabbit <b>BEFORE</b> it moves to another hole. <br>
                    For example, the rabbit is in <b>Hole 10</b> and you picked <b>Hole 11</b>. <br>
                    It then moved to <b>Hole 11</b>. -- THAT IS NOT CONSIDERED A RIGHT ANSWER. <br>
                    Find the rabbit's <b>CURRENT</b> position.
                </p>
            </div>
            <h2 class="font-bold text-2xl">Let's get started</h2>
            <div class="puzzle-container mt-5 flex flex-row flex-wrap justify-between">
                <div class="col game">
                    <div class="holes-container mb-3 flex-row flex-wrap flex">
                        <div class="hole w-12 h-12 bg-yellow border border-yellow mr-3 mb-3 cursor-pointer text-dark-blue flex justify-center items-center font-semibold duration-500 hover:bg-dark-blue hover:text-yellow" v-for="(n, key) in 20" :key="key" @click="pickHole(n)">{{ n }}</div>
                    </div>
                    <p class="status text-2xl text-dark-blue dark:text-teal" v-if="success == true">Found the rabbit!</p>
                    <p class="status text-2xl text-red" v-if="success == false">Wrong hole!</p>
                </div>
                <div class="col logs mt-8 w-full">
                    <div class="counter mb-3">Move count: {{ counter }}</div>
                    <div class="flex flex-row flex-wrap w-full">
                        <button class="button mb-3 py-2 text-base max-w-[300px] mr-3 bg-dark-blue border border-dark-blue text-teal dark:bg-yellow dark:border-yellow dark:text-dark-blue dark:hover:bg-dark-blue dark:hover:text-yellow" @click="viewLogs ^= true">{{ (viewLogs) ? 'Hide' : 'Show' }} developer logs</button>
                        <button class="button mb-3 py-2 text-base max-w-[100px] bg-red border border-red text-dark-blue dark:text-dark-blue hover:bg-transparent dark:hover:bg-dark-blue dark:hover:text-red" @click="resetPuzzle()">Reset</button>
                    </div>
                    <div class="logs-container mt-5 px-5 py-5 border border-dark-blue dark:border-yellow max-h-52 overflow-y-scroll flex flex-col-reverse" v-show="viewLogs">
                        <p v-for="(log, key) in logs" :key="key" class="block mb-1 text-sm">{{ log }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            success: null,
            rabbitPosition: null,
            logs: [],
            viewLogs: true,
            counter: 0,
            resetCount: 0
        }),
        methods: {
            pickHole (hole) {
                if (this.success) {
                    return false
                }
                this.counter += 1
                if (hole == this.rabbitPosition) {
                    this.log(`Congrats! You found the rabbit at hole ${hole}!`)
                    this.success = true
                } else {
                    this.log(`You picked hole ${hole}. It's a WRONG hole.`)
                    this.success = false

                    this.moveRabbitPosition()
                }
            },
            log (message) {
                this.logs.unshift(message)
            },
            moveRabbitPosition () {
                let randomStep = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                let oldPosition = this.rabbitPosition

                if (this.rabbitPosition == 1) {
                    this.rabbitPosition = 2
                } else if (this.rabbitPosition == 20) {
                    this.rabbitPosition = 19
                } else {
                    this.rabbitPosition = (randomStep == 2) ? this.rabbitPosition + 1 : this.rabbitPosition - 1
                }

                this.log(`The rabbit moved from ${oldPosition} to ${this.rabbitPosition}`)
            },
            setInitialRabbitPosition () {
                this.rabbitPosition = Math.floor(Math.random() * (20 - 1 + 1) + 1)
                this.log(`Rabbit is in hole ${this.rabbitPosition}`)
            },
            resetPuzzle () {
                this.resetCount += 1
                this.logs = []
                this.log(`Puzle has been reset [${this.resetCount}]`)
                this.counter = 0
                this.setInitialRabbitPosition()
            }
        },
        mounted () {
            this.setInitialRabbitPosition()
        },
        head () {
			return {
                title: `Find the Rabbit | dthrcrpz`,
				meta: [
                    { hid: 'title', property: 'title', content: `Find the Rabbit | dthrcrpz` },
                    { hid: 'og:title', property: 'og:title', content: `Find the Rabbit | dthrcrpz` },
                    { hid: 'og:url', property: 'og:url', content: `${process.env.websiteUrl}/find-the-rabbit` },
                    { hid: 'og:image', property: 'og:image', content: `${process.env.websiteUrl}/shibe.png` },
                    { hid: 'og:image:alt', property: 'og:image:alt', content: 'dthrcrpz' },

                    { hid: 'description', property: 'description', content: `A puzzle you're gonna want to solve fast` },
                    { hid: 'og:description', property: 'og:description', content: `A puzzle you're gonna want to solve fast` },
				],
				link: [
                    { rel: 'canonical', href: `${process.env.websiteUrl}/find-the-rabbit` }
                ],
			}
		}
    }
</script>

<style scoped>

</style>