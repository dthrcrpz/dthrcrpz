<template>
    <div>
        <Navbar/>
        <Nuxt/>
        
        <transition name="fade">
            <ModalBackground v-if="showModal"/>
        </transition>
    </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            Navbar: () => import('~/components/globals/Navbar'),
            ModalBackground: () => import('~/components/globals/ModalBackground'),
        },
        computed: {
            ...mapGetters({
                showModal: 'globals/getShowModal'
            })
        },
        methods: {
            ...mapMutations({
                setShowModal: 'globals/setShowModal'
            })
        }
    }
</script>

<style lang="sass">
    @font-face
        font-family: 'Montserrat', sans-serif
        font-style: normal
        font-display: auto

    @font-face
        font-family: 'Lato', sans-serif
        font-style: normal
        font-display: auto

    html
        box-sizing: border-box

    body
        color: $teal
        font-family: Montserrat
        min-height: 100vh
        background-color: $blue

    *, *:before, *:after
        box-sizing: inherit
        padding: 0
        margin: 0
        background-repeat: no-repeat

    a, a:link, a:active, a:visited, a:hover
        text-decoration: none
        color: $yellow

    a, button, input, select, textarea
        &:focus
            outline: none !important

    button
        cursor: pointer

    .button
        width: 100%
        background-color: $yellow
        font-size: 20px
        padding: 10px
        color: $blue
        font-family: Lato
        border: 1px solid $yellow
        user-select: none
        font-weight: 900
        width: 100%
        transition: .4s
        &:hover
            background-color: $blue
            color: $yellow
        &.red
            border: 1px solid $red
            background-color: $red
            &:hover
                color: $red
                background-color: $blue
        &.teal
            border: 1px solid $teal
            background-color: $teal
            &:hover
                color: $teal
                background-color: $blue
        &.yellow
            border: 1px solid $yellow
            background-color: $yellow
            &:hover
                color: $yellow
                background-color: $blue

    .noselect
        user-select: none

    .t
        border: 1px  solid red

    .page-enter-active, .page-leave-active
        transition: opacity .3s

    .page-enter, .page-leave-to
        opacity: 0
        transform: translateY(50px)

    .no-scroll 
        overflow: hidden 

    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s 

    .fade-enter, .fade-leave-to
        opacity: 0 

    .container 
        max-width: 1280px
        width: 100%
        margin: 0 auto
        padding: 0 20px
        box-sizing: border-box

    .modal-background
        position: fixed
        z-index: 199
        width: 100vw
        height: 100vh
        top: 0
        right: 0
        left: 0
        bottom: 0
        background-color: rgba(0, 0, 0, 0.7)
        max-height: 100vh
        overflow-y: auto
        backdrop-filter: blur(1px)

    .modal-container
        position: fixed
        height: 100vh
        width: 100%
        display: block
        padding: 0 15px 140px
        top: 0
        left: 0
        z-index: 200
        overflow-y: auto
        .modal
            border-radius: 3px
            z-index: 200
            width: 100%
            display: table
            top: 10%
            left: 0
            right: 0
            margin: 6% auto 0
            background-color: $blue
            box-shadow: 1px 2px 11px $teal

    .btt
        position: fixed
        bottom: 30px
        right: 30px
        height: 45px
        width: 45px
        cursor: pointer
        background-color: #fff
        background-image: url('/images/btt.svg')
        background-position: center
        background-size: contain
        transition: .5s
        transform: translateY(20px)
        opacity: 0
        visibility: hidden
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4)
        border-radius: 100%
        border: 2px solid $blue
        &:hover
            transform: translateY(-5px) !important
        &.shown
            opacity: 1
            visibility: visible
            transform: translateY(0px)
        @media (max-width: 768px) 
            bottom: 20px
            right: 20px
            height: 35px
            width: 35px

    /*** Works on common browsers ***/
    ::selection  
        background-color: $teal
        color: $blue

    /*** Mozilla based browsers ***/
    ::-moz-selection  
        background-color: $teal
        color: $blue

    /***For Other Browsers ***/
    ::-o-selection  
        background-color: $teal
        color: $blue

    ::-ms-selection  
        background-color: $teal
        color: $blue

    /*** For Webkit ***/
    ::-webkit-selection  
        background-color: $teal
        color: $blue
    /**	End */

    .section-title
        color: $blue
        text-align: center
        margin: 0 auto 30px
        position: relative
        display: flex
        transition: .4s
        width: 100%
        align-items: center
        justify-content: center
        img
            max-width: 80px
            width: 100%
        span
            font-family: Fira Code
            font-weight: 600
            font-size: 48px

    .section-subtitle
        color: $blue
        text-align: center
        margin: 0 auto 30px
        font-size: 20px
        display: table

    .form-group
        position: relative

    .validation-errors
        position: absolute
        top: calc(100% + -4px)
        background: $red
        color: #fff
        font-size: 13px
        z-index: 3
        padding: 5px 15px
        border-radius: 3px
        @extend .noselect
        left: 10px
        box-shadow: 0 2px 9px rgba(0, 0, 0, 0.4)
        &.with-textarea
            top: 100%
        &:before
            content: ""
            position: absolute
            bottom: calc(100% - 1px)
            width: 0
            height: 0
            border-left: 7px solid transparent
            border-right: 7px solid transparent
            border-bottom: 7px solid #ff5757
            left: 17px
            z-index: 1
        &.offset
            top: calc(100% - 25px)

    .loading
        position: fixed
        z-index: 9999
        width: 100vw
        height: 100vh
        top: 0
        right: 0
        left: 0
        bottom: 0
        background-color: $blue
        max-height: 100vh
        overflow-y: auto
        background-image: url('/loading.svg')
        background-repeat: no-repeat
        background-position: center
        background-size: 80px
        cursor: progress

    .banner-background
        opacity: 1
        position: fixed
        width: 100%
        height: 100%
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin: auto
        z-index: 1

    .to-top
        position: fixed
        width: 50px
        height: 50px
        bottom: 20px
        right: 20px
        cursor: pointer
        transition: .4s
        svg
            width: 100%
            height: 100%
            background-color: #fff
            border-radius: 50%
            box-shadow: 0 3px 11px rgba(0, 0, 0, 0.5)
            polygon
                transition: .4s
        &:hover
            svg
                polygon
                    transform: translateY(-5px)

    /* width */
    ::-webkit-scrollbar
        width: 7px

    /* Track */
    ::-webkit-scrollbar-track
        background: lighten($blue, 10%)
    
    /* Handle */
    ::-webkit-scrollbar-thumb
        background: $teal

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover
        background: $teal

    .pre-load
        opacity: 0
        visibility: hidden
        pointer-events: none

    img
        -webkit-user-drag: none
        -khtml-user-drag: none
        -moz-user-drag: none
        -o-user-drag: none
        user-drag: none
        user-select: none
        -webkit-user-select: none
        -khtml-user-select: none
        -moz-user-select: none
        -o-user-select: none
</style>