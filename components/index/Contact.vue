<template>
    <section class="contact">
        <div class="top">
            <div class="container">
                <h2 class="section-title">
                    <img src="/images/contact/icon.svg" alt="">
                    <span>contact</span>
                </h2>
                <p class="mini-title">Wanna talk about something? Leave a message and I'll do my best to get back to you</p>
            </div>
        </div>
        <div class="bottom">
            <div class="curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="box-wrapper">
                <ValidationObserver class="container box" tag="div" ref="form" v-slot="{ valid, handleSubmit }">
                    <form class="forms-container" @submit.prevent="handleSubmit(submit(valid))">
                        <ValidationProvider name="name" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                            <input type="text" placeholder="Your Name" v-model="form.name">
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <ValidationProvider name="email" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, email: true }">
                            <input type="text" placeholder="Your Email" v-model="form.email">
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <ValidationProvider name="message" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                            <textarea name="message" id="" rows="7" placeholder="Your Message" v-model="form.message"></textarea>
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <div class="buttons-group">
                            <button type="button" class="button red">Clear</button>
                            <button type="submit" class="button yellow">Submit</button>
                        </div>
                    </form>
                </ValidationObserver>
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
            submit (valid) {
                if (valid) {
                    this.$axios.post(`https://api.emailjs.com/api/v1.0/email/send`, {
                        user_id: process.env.emailJsUserId,
                        service_id: process.env.emailJsServiceId,
                        template_id: process.env.emailJsTemplateId,
                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        },
        mounted () {
            let targets = [
                `section.contact > div.top > div > h2`,
                `.contact .top .container .mini-title`,
                `section.contact > div.bottom > div > div.container.box`
            ]

            this.animateElements(targets)
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
                    transition: .8s
                    opacity: 0
                    &.ov
                        opacity: 1
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
                    transition: .8s
                    opacity: 0
                    &.ov
                        opacity: 1
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
            .box-wrapper
                @media (max-width: 1024px)
                    padding: 0 20px
                .box
                    padding-top: 30px
                    padding-bottom: 50px
                    max-width: 768px
                    z-index: 2
                    position: relative
                    background-color: rgba(0, 18, 32, 0.9)
                    box-shadow: 0px 0px 4px rgba(92, 224, 216, 0.6)
                    opacity: 0
                    transition: .8s
                    transform: translateY(-70px)
                    &.ov
                        opacity: 1
                        transform: translateY(-100px)
                    .forms-container
                        max-width: 600px
                        width: 100%
                        margin: 20px auto 0
                        .form-group
                            input, textarea
                                background-color: darken($blue, 1)
                        .buttons-group
                            display: flex
                            flex-flow: row wrap
                            justify-content: flex-end
                            .button
                                font-size: 16px
                                flex: 0 0 100px
                                margin-left: 10px
</style>