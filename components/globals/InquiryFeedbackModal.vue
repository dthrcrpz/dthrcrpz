<template>
    <div class="modal-container">
        <div class="modal max-w-[600px]" v-click-outside="close">
            <div class="header pt-10 px-10 pb-3">
                <p class="centered-title text-2xl mx-auto my-auto text-center font-montserrat text-yellow">Thanks for messaging me!</p>
            </div>
            <div class="body overflow-auto pt-3 px-8 pb-8">
                <p>I'll do my best to get back to you as soon as possible.</p>
            </div>
            <div class="footer w-full pt-0 px-5">
                <div class="buttons flex justify-end">
                    <button class="button ml-3 text-base max-w-[150px]" @click="close()">Yeah, sure</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                setShowModal: 'globals/setShowModal'
            }),
            close () {
                this.$parent.showInquiryFeedbackModal = false
                this.setShowModal(false)
            }
        }
    }
</script>