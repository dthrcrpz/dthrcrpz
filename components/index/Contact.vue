<template>
    <section class="contact">
        <div class="top">
            <div class="container">
                <h2 class="section-title">
                    <img src="/images/contact/icon.svg" alt="">
                    <span>contact</span>
                </h2>
                <p class="mini-title">Wanna talk? Leave a message and I'll do my best to get back to you</p>
            </div>
        </div>
        <div class="bottom">
            <div class="curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="box-wrapper">
                <ValidationObserver class="container box" tag="div" ref="contactForm" v-slot="{ valid, handleSubmit }">
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
                            <button type="button" class="button red" @click="resetForm()">Reset</button>
                            <button type="submit" class="button yellow">Submit</button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
        <transition name="fade">
            <InquiryFeedbackModal v-if="showInquiryFeedbackModal"/>
        </transition>
    </section>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        components: {
            InquiryFeedbackModal: () => import('@/components/globals/InquiryFeedbackModal')
        },
        data: () => ({
            form: {
                name: '',
                email: '',
                message: '',
            },
            showInquiryFeedbackModal: false
        }),
        methods: {
            ...mapMutations({
                setShowLoading: 'globals/setShowLoading',
                setShowModal: 'globals/setShowModal'
            }),
            resetForm () {
                this.form.name = this.form.email = this.form.message = ''
                this.$refs.contactForm.reset()
            },
            submit (valid) {
                if (valid) {
                    this.setShowLoading(true)
                    
                    this.$axios.post(`https://api.emailjs.com/api/v1.0/email/send`, {
                        user_id: process.env.emailJsUserId,
                        service_id: process.env.emailJsServiceId,
                        template_id: process.env.emailJsTemplateId,
                        template_params: this.form
                    }).then(res => {
                        this.setShowLoading(false)
                        this.setShowModal(true)
                        this.showInquiryFeedbackModal = true
                        this.resetForm()
                    }).catch(err => {
                        console.log(err)
                    }).then(() => {
                        this.setShowLoading(false)
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