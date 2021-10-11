<template>
    <section class="contact">
        <div class="top">
            <div class="container">
                <h2 class="section-title">
                    <img src="/images/contact/icon.svg" alt="">
                    <span>contact</span>
                </h2>
                <p class="mini-title">Idk what to put here</p>
            </div>
        </div>
        <div class="bottom">
            <div class="curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="container box">
                <form class="forms-container" @submit.prevent="submit()">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" v-model="form.name">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Your Email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <textarea name="message" id="" rows="7" placeholder="Your Message" v-model="form.message"></textarea>
                    </div>
                    <div class="buttons-group">
                        <button type="button" class="button red">Clear</button>
                        <button type="submit" class="button yellow">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            form: {
                name: '',
                email: '',
                message: '',
            }
        }),
        methods: {
            submit () {

            }
        }
    }
</script>

<style lang="sass" scoped>
    .contact
        .top
            padding: 60px 0 150px
            background-color: #22b4ab
            .container
                .section-title
                    img
                        margin-right: 10px
                        max-width: 60px
                        width: 100%
                    span
                        color: $blue
                .mini-title
                    color: $blue
                    font-size: 18px
                    text-align: center
                    font-family: Fira Code
                    max-width: 500px
                    width: 100%
                    margin: 0 auto
        .bottom
            position: relative
            .curve
                position: absolute
                top: 0
                left: 0
                width: 100%
                overflow: hidden
                line-height: 0
                z-index: 1
                svg
                    position: relative
                    display: block
                    width: calc(100% + 1.3px)
                    height: 56px
                    .shape-fill
                        fill: #22B4AB
            .box
                padding-top: 30px
                padding-bottom: 50px
                max-width: 768px
                z-index: 2
                position: relative
                background-color: rgba(0, 18, 32, 0.9)
                transform: translateY(-100px)
                box-shadow: 0px 0px 4px rgba(92, 224, 216, 0.6)
                .forms-container
                    max-width: 600px
                    width: 100%
                    margin: 20px auto 0
                    .buttons-group
                        display: flex
                        flex-flow: row wrap
                        justify-content: flex-end
                        .button
                            flex: 0 0 100px
                            margin-left: 10px
</style>