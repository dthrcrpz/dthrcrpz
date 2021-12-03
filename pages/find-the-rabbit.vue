<template>
    <div class="page-find-the-rabbit">
        <div class="container">
            <div class="header">
                <h1>How Fast Can You Find the Rabbit?</h1>
                <p class="description">
                    I found <a href="https://youtu.be/XEt09iK8IXs?t=1259" target="_blank">this Youtube video</a> and I want to know the fastest pattern/algorithm people can make to find the rabbit.
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
            <h2>Let's get started</h2>
            <div class="puzzle-container">
                <div class="col game">
                    <div class="holes-container">
                        <div class="hole" v-for="(n, key) in 20" :key="key" @click="pickHole(n)">{{ n }}</div>
                    </div>
                    <p class="status success" v-if="success == true">Found the rabbit!</p>
                    <p class="status fail" v-if="success == false">Wrong hole!</p>
                </div>
                <div class="col logs">
                    <div class="counter">Move count: {{ counter }}</div>
                    <button class="button" @click="viewLogs ^= true">Toggle developer logs</button>
                    <button class="button reset" @click="resetPuzzle()">Reset</button>
                    <div class="logs-container" v-show="viewLogs">
                        <p v-for="(log, key) in logs" :key="key">{{ log }}</p>
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
            counter: 0
        }),
        methods: {
            pickHole (hole) {
                this.counter += 1
                if (hole == this.rabbitPosition) {
                    this.log(`Congrats! You found the rabbit at hole ${hole}!`)
                    this.success = true
                } else {
                    this.log(`You picked hole ${hole}. It's a WRONG hole.`)
                    this.success = false

                    let randomStep = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                    let oldPosition = this.rabbitPosition
                    this.rabbitPosition = (randomStep == 2) ? this.rabbitPosition + 1 : this.rabbitPosition - 1
                    this.log(`The rabbit moved from ${oldPosition} to ${this.rabbitPosition}`)
                }
            },
            log (message) {
                this.logs.unshift(message)
            },
            setRabbitPosition () {
                this.rabbitPosition = Math.floor(Math.random() * (20 - 1 + 1) + 1)
                this.log(`Rabbit is in hole ${this.rabbitPosition}`)
            },
            resetPuzzle () {
                this.logs = []
                this.log(`Puzle has been reset`)
                this.counter = 0
                this.setRabbitPosition()
            }
        },
        mounted () {
            this.setRabbitPosition()
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
                            background-color: $yellow
                            border: 1px solid $yellow
                            margin-right: 10px
                            margin-bottom: 10px
                            cursor: pointer
                            color: $blue
                            text-align: center
                            display: flex
                            justify-content: center
                            align-items: center
                            font-weight: 600
                            transition: .4s
                            &:hover
                                background-color: $blue
                                color: $yellow
                    .status
                        font-size: 25px
                        &.fail
                            color: $red
                        &.success
                            color: $teal
                .logs
                    margin-top: 30px
                    .counter
                        margin-bottom: 10px
                    .button
                        max-width: 300px
                        &.reset
                            max-width: 100px
                    .logs-container
                        margin-top: 20px
                        padding: 20px
                        border: 1px solid $yellow
                        max-height: 200px
                        overflow-y: scroll
                        display: flex
                        flex-direction: column-reverse
                        p
                            display: block
                            margin-bottom: 5px
                            font-size: 14px
</style>