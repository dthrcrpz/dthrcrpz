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
            <svg preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3.9 2000 95.3"><path fill="#22b4ab" d="M1859 18a6 6 0 00-7-6h-47a6 6 0 00-6 6v42a6 6 0 007 6h47a6 6 0 006-6zM1649 4a3 3 0 00-3-4l-25 1a3 3 0 00-4 3l1 22a3 3 0 003 4l25-1a3 3 0 004-3zM1468 18a6 6 0 00-7-6h-47a6 6 0 00-6 6v42a6 6 0 007 6h47a6 6 0 006-6zM1281 18a6 6 0 00-6-6h-47a6 6 0 00-7 6v42a6 6 0 007 6h47a6 6 0 007-6zM1069 6a3 3 0 00-3-2h-23a3 3 0 00-4 3l1 21a3 3 0 003 3h23a3 3 0 004-3zM889 18a6 6 0 00-7-6h-47a6 6 0 00-6 6v42a6 6 0 007 6h47a6 6 0 006-6zM694 18a6 6 0 00-7-6h-47a6 6 0 00-6 6v42a6 6 0 007 6h47a6 6 0 006-6zM487 5a3 3 0 00-3-3h-24a3 3 0 00-4 3l1 22a3 3 0 003 3h24a3 3 0 003-3zM310 18a6 6 0 00-6-6h-47a6 6 0 00-7 6v42a6 6 0 007 6h47a6 6 0 007-6zM113 18a6 6 0 00-7-6H59a6 6 0 00-6 6v42a6 6 0 007 6h47a6 6 0 006-6zM1928 8a3 3 0 00-3-3h-22a3 3 0 00-3 3v20a3 3 0 003 3l22-1a3 3 0 003-2zM1751 11a7 7 0 00-8-6h-51a7 7 0 00-8 7l1 46a7 7 0 007 7h52a7 7 0 007-7zM1556 11a7 7 0 00-7-6h-52a7 7 0 00-7 7v46a7 7 0 008 7h51a7 7 0 007-7zM1350 8a3 3 0 00-3-3h-22a3 3 0 00-3 3v19a3 3 0 003 3l22-1a3 3 0 003-2zM1172 11a7 7 0 00-7-6h-52a7 7 0 00-7 7v46a7 7 0 008 7h51a7 7 0 007-7zM977 11a7 7 0 00-7-6h-52a7 7 0 00-7 7v46a7 7 0 008 7h51a7 7 0 007-7zM764 4a3 3 0 00-3-3h-22a3 3 0 00-3 3v20a3 3 0 003 3h22a3 3 0 004-3zM590 11a7 7 0 00-8-6h-51a7 7 0 00-8 7l1 46a7 7 0 007 7h52a7 7 0 007-7zM398 11a7 7 0 00-7-6h-52a7 7 0 00-7 7v46a7 7 0 008 7h51a7 7 0 007-7zM188 4a4 4 0 00-5-4h-31a4 4 0 00-4 4v28a4 4 0 004 4h31a4 4 0 005-4z" opacity=".75"></path><g opacity=".5"><path fill="#22b4ab" d="M1890 31a4 4 0 00-4-4l-30 1a4 4 0 00-4 4v29a4 4 0 005 4h29a4 4 0 004-4zM1691 31a4 4 0 00-4-4l-29 1a4 4 0 00-4 4v29a4 4 0 004 4h30a4 4 0 004-4zM1496 31a4 4 0 00-4-4l-29 1a4 4 0 00-5 4l1 29a4 4 0 004 4h29a4 4 0 005-4zM1315 31a4 4 0 00-4-4l-29 1a4 4 0 00-4 4v29a4 4 0 004 4h30a4 4 0 004-4zM1115 31a4 4 0 00-4-4l-29 1a4 4 0 00-4 4v29a4 4 0 004 4h30a4 4 0 004-4zM919 31a4 4 0 00-4-4l-30 1a4 4 0 00-4 4v29a4 4 0 005 4h29a4 4 0 004-4zM725 31a4 4 0 00-4-4l-30 1a4 4 0 00-4 4v29a4 4 0 004 4h30a4 4 0 004-4zM531 31a4 4 0 00-4-4l-30 1a4 4 0 00-4 4v29a4 4 0 004 4h30a4 4 0 004-4zM341 31a4 4 0 00-4-4l-30 1a4 4 0 00-4 4v29a4 4 0 005 4h29a4 4 0 004-4zM142 31a4 4 0 00-4-4h-30a4 4 0 00-4 5v29a4 4 0 004 4h30a4 4 0 004-4z"></path></g><path fill="#22b4ab" d="M2000 95H0V49h2000z"></path><path fill="#22b4ab" d="M2000 29a7 7 0 00-7-6h-50a7 7 0 00-7 6l1 45a7 7 0 007 6h49a7 7 0 007-7zM1612 25a7 7 0 00-7-6h-49a7 7 0 00-7 7v44a7 7 0 007 6h50a7 7 0 007-6zM1419 29a7 7 0 00-7-6h-50a7 7 0 00-7 6l1 45a7 7 0 007 6h49a7 7 0 007-7zM1225 29a7 7 0 00-7-6h-49a7 7 0 00-7 6v45a7 7 0 007 6h49a7 7 0 007-7zM1031 29a7 7 0 00-7-6h-49a7 7 0 00-7 6l1 45a7 7 0 006 6h50a7 7 0 007-7zM838 29a7 7 0 00-7-6h-50a7 7 0 00-6 6v45a7 7 0 007 6h49a7 7 0 007-7zM644 29a7 7 0 00-7-6h-49a7 7 0 00-7 6v45a7 7 0 007 6h50a7 7 0 006-7zM450 29a7 7 0 00-7-6h-49a7 7 0 00-7 6l1 45a7 7 0 007 6h49a7 7 0 007-7zM257 29a7 7 0 00-7-6h-50a7 7 0 00-6 6v45a7 7 0 007 6h49a7 7 0 007-7zM63 29a7 7 0 00-7-6H7a7 7 0 00-7 6v45a7 7 0 007 6h50a7 7 0 006-7zM1806 29a7 7 0 00-7-6h-49a7 7 0 00-7 6v45a7 7 0 007 6h49a7 7 0 007-7z"></path></svg>
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
            header3: `I'm a Web Developer.`,
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
        .wave-divider
            position: absolute
            bottom: -1px
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
                transform: rotate(180deg)
                .shape-fill
                    fill: #22b4ab
</style>