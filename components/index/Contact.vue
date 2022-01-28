<template>
    <section class="contact">
        <div class="top pt-[60px] px-0 pb-[150px] bg-dark-teal">
            <div class="cntnr">
                <h2 class="section-title text-dark-blue">
                    <span class="mr-4">
                        <font-awesome-icon icon="id-card"/>
                    </span>
                    <span>contact</span>
                </h2>
                <p class="mini-title text-dark-blue">Wanna talk? Leave a message and I'll do my best to get back to you</p>
            </div>
        </div>
        <div class="bottom relative">
            <div class="curve absolute top-0 left-0 w-full overflow-hidden leading-[0] z-[1]">
                <svg class="relative block h-[56px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="box-wrapper py-0 px-5 md:px-0">
                <ValidationObserver class="w-full mx-auto px-5 box pt-[30px] pb-[50px] max-w-3xl z-[2] relative bg-dark-blue bg-opacity-90 duration-500 translate-y-[-100px]" tag="div" ref="contactForm" v-slot="{ valid, handleSubmit }">
                    <form class="forms-container max-w-[600px] w-full mt-5 mx-auto mb-0" @submit.prevent="handleSubmit(submit(valid))">
                        <ValidationProvider name="name" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                            <input type="text" placeholder="Your Name" v-model="form.name" class="form-input">
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <ValidationProvider name="email" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, email: true }">
                            <input type="text" placeholder="Your Email" v-model="form.email" class="form-input">
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <ValidationProvider name="message" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                            <textarea name="message" id="" rows="7" placeholder="Your Message" v-model="form.message" class="form-input"></textarea>
                            <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                        </ValidationProvider>
                        <div class="buttons-group flex justify-end flex-row flex-wrap duration-500">
                            <button type="button" class="button py-2 text-base max-w-[100px] ml-3 bg-red border border-red text-dark-blue dark:text-dark-blue hover:bg-transparent hover:text-red dark:hover:bg-dark-blue dark:hover:text-red" @click="resetForm()">Reset</button>
                            <button type="submit" class="button py-2 text-base max-w-[100px] ml-3 border bg-yellow border-yellow text-dark-blue hover:bg-dark-blue hover:text-yellow hover:border-yellow">Submit</button>
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

<style scoped>
    .curve svg {
        width: calc(100% + 1.3px);
    }
    .curve svg .shape-fill {
        fill: #22B4AB;
    }
    .box {
        box-shadow: 0px 0px 4px rgba(92, 224, 216, 0.6);
    }
</style>