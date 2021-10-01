<template>
    <section class="intro">
        <div class="container">
            <div class="header">
                <p class="subtle">HEHE!</p>
                <div class="typa-texts">
                    <h1 class="headers-container">
                        <p :class="`header-1 ${(header1Typing) ? 'typing' : ''}`">
                            <span class="normal">Hi! </span>
                            <span class="im">I am</span>
                        </p>
                        <p :class="`header-2 ${(header2Typing) ? 'typing' : ''}`">
                            <span class="name">Deither Corpuz</span>
                        </p>
                        <p :class="`header-3 ${(header3Typing) ? 'typing' : ''}`">I'm a Web Developer</p>
                    </h1>
                </div>
            </div>
        </div>

        <div class="blob blob-1">
            <img src="/images/backgrounds/blob-1.svg">
        </div>
        <div class="blob blob-2">
            <img src="/images/backgrounds/blob-3.svg">
        </div>
        <div class="blob blob-3">
            <img src="/images/backgrounds/blob-3.svg">
        </div>
        <div class="blob blob-4">
            <img src="/images/backgrounds/blob-4.svg">
        </div>
        <div class="blob blob-5">
            <img src="/images/backgrounds/blob-4.svg">
        </div>
        <div class="doge-typing">
            <img src="/images/backgrounds/doge-typing.webp" alt="doge-typing">
        </div>

        <div class="wave-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            header1: [
                `Hi! `,
                `I am`
            ],
            header2: `Deither Corpuz.`,
            header3: `I'm a Web Developer`,
            header1Typing: true,
            header2Typing: false,
        }),
        methods: {
            clearHeaders () {
				document.querySelector('.header-1 .normal').innerHTML = ''
				document.querySelector('.header-1 .im').innerHTML = ''
				document.querySelector('.header-2 .name').innerHTML = ''
				document.querySelector('.header-3').innerHTML = ''
			},
            typeHeaders () {
				this.clearHeaders()
				this.$store.commit('toggleShowDumbModeToggler', false)
				let me = this
				let header1NormalEl = document.querySelector('.header-1 .normal')
				let header1Im = document.querySelector('.header-1 .im')
				let header2Name = document.querySelector('.header-2 .name')
				let header3 = document.querySelector('.header-3')
				let hi = (this.dumbMode) ? `hEnL0! ` : this.header1[0]
				let im = (this.dumbMode) ? `am ` : this.header1[1]
				let name = (this.dumbMode) ? `dEither C0rpuz ` : this.header2
				let imWeb = (this.dumbMode) ? `am wEb devL0pper` : this.header3
				typeHi()
				function typeHi () {
					let i = 0
					let timer = setInterval(() => {
						if (i == hi.length - 1) {
							setTimeout(() => {
								clearTimeout(timer)
								typeIm()
							}, 300)
						}
						let char = hi.charAt(i)
						header1NormalEl.innerHTML += char
						i++
					}, 200)
				}
				function typeIm () {
					let i = 0
					let timer = setInterval(() => {
						if (i == im.length - 1) {
							clearTimeout(timer)
                            me.header1Typing = false
							me.header2Typing = true
                            setTimeout(() => {
								typeName()
							}, 500)
						}
						let char = im.charAt(i)
						header1NormalEl.innerHTML += char
						i++
					}, 70)
				}
				function typeName () {
					let i = 0
					let timer = setInterval(() => {
						if (i == name.length - 1) {
							clearTimeout(timer)
							me.header2Typing = false
							me.header3Typing = true
							setTimeout(() => {
								typeHeader3()
							}, 500)
						}
						let char = name.charAt(i)
						header2Name.innerHTML += char
						i++
					}, 100)
				}
				function typeHeader3 () {
					let i = 0
					let timer = setInterval(() => {
						if (i == imWeb.length - 1) {
							clearTimeout(timer)
							me.$store.commit('toggleShowDumbModeToggler', true)
						}
						let char = imWeb.charAt(i)
						header3.innerHTML += char
						i++
					}, 70)
				}
			}
        },
        mounted () {
			this.typeHeaders()
		}
    }
</script>

<style scoped lang="sass">
    .intro
        position: relative
        overflow: hidden
        height: 100vh
        .container
            display: flex
            height: 100%
            align-items: center
            .header
                user-select: none
                transform: translateY(-80px)
                .subtle
                    font-size: 150px
                    font-family: Montserrat
                    font-weight: 700
                    opacity: 0.03
                .typa-texts
                    padding-left: 20px
                    margin-top: -56px
                    .headers-container
                        font-family: Fira Code
                        .header-1, .header-2
                            position: relative
                            display: table
                            span
                                display: block
                            .normal
                                font-size: 30px
                            .name
                                font-size: 40px
                                color: $yellow
                            &.typing
                                &:after
                                    content: ''
                                    position: absolute
                                    height: 90%
                                    width: 10px
                                    right: -15px
                                    top: 0
                                    bottom: 0
                                    background-color: $teal
                                    animation: blink .5s alternate infinite
                        .header-2
                            &.typing
                                &:after
                                    background-color: yellow
                        .header-3
                            color: $teal
                            position: relative
                            display: table
                            &.typing
                                &:after
                                    content: ''
                                    position: absolute
                                    height: 90%
                                    width: 10px
                                    right: -15px
                                    top: 0
                                    bottom: 0
                                    background-color: $teal
                                    animation: blink .5s alternate infinite
        .blob
            position: absolute
            opacity: 0.5
            img
                -webkit-user-drag: none
                -khtml-user-drag: none
                -moz-user-drag: none
                -o-user-drag: none
                user-drag: none
                user-select: none
            &.blob-1, &.blob-2
                left: -100px
                bottom: 22px
            &.blob-3, &.blob-4
                transform: scale(1.3)
                right: -20px
                top: 0px
            &.blob-5
                transform: scale(0.5)
                top: 40%
                left: 10%
        .doge-typing
            position: absolute
            bottom: 0
            right: 0
            opacity: 0.2
            width: 700px
            transform: translateX(100px) translateY(86px) rotate(-21deg)
            img
                width: 100%
                border-radius: 100%
                user-select: none
                -webkit-user-drag: none
                -khtml-user-drag: none
                -moz-user-drag: none
                -o-user-drag: none
                user-drag: none
                user-select: none
        .wave-divider
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            overflow: hidden
            line-height: 0
            transform: rotate(180deg)
            z-index: 1
            svg
                position: relative
                display: block
                width: calc(117% + 1.3px)
                height: 45px
                .shape-fill
                    fill: #22b4ab
</style>