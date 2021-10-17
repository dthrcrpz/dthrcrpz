<template>
    <div class="modal-container">
        <div class="modal" v-click-outside="close">
            <div class="header">
                <p class="centered-title">Thanks for messaging me!</p>
            </div>
            <div class="body">
                <p>I'll do my best to get back to you as soon as possible.</p>
            </div>
            <div class="footer">
                <div class="buttons">
                    <button class="button teal" @click="close()">Yeah, sure</button>
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

<style scoped lang="sass">
    .modal
        max-width: 600px
        .header
            padding: 40px 40px 10px 40px
            .centered-title
                font-size: 25px
                margin: auto
                text-align: center
                font-family: Montserrat
                color: $yellow
        .body
            // max-height: 50px
            overflow: auto
            padding: 10px 30px 30px
            text-align: center
        .footer
            width: 100%
            padding: 0 20px 20px
            .buttons
                display: flex
                justify-content: flex-end
                .button
                    margin-left: 10px
                    font-size: 15px
                    max-width: 150px
</style>