<template>
    <section class="intro relative overflow-hidden h-screen">
        <div class="cntnr flex h-full items-center">
            <div class="header select-none translate-y-[-80px]">
                <p class="subtle opacity-[0.03] text-[100px] md:text-[150px] font-montserrat font-bold duration-500 text-dark-blue dark:text-teal">HEHE!</p>
                <div class="typa-texts pl-0 md:pl-5 mt-[-56px] font-bold">
                    <h1 class="headers-container font-fira-code">
                        <p :class="`header-1 duration-500 mb-3 relative table text-dark-blue dark:text-teal ${(header1Typing) ? 'typing' : ''} after:bg-dark-blue dark:after:bg-teal`">
                            <span class="block normal text-3xl">Hi! </span>
                            <span class="block im"></span>
                        </p>
                        <p :class="`header-2 duration-500 mb-3 relative table ${(header2Typing) ? 'typing' : ''} after:bg-red dark:after:bg-yellow`">
                            <span class="block name text-3xl md:text-[40px] text-red dark:text-yellow"></span>
                        </p>
                        <p :class="`header-3 duration-500 relative table text-dark-blue dark:text-teal text-2xl ${(header3Typing) ? 'typing' : ''} after:bg-dark-blue dark:after:bg-teal`"></p>
                    </h1>
                </div>
            </div>
        </div>

        <div class="blob absolute duration-500 opacity-50 blob-1 left-[-100px] bottom-6">
            <img class="duration-500 opacity-1 dark:opacity-0" width="100%" height="100%" v-lazy-load src="/images/backgrounds/dark-blob-1.svg">
			<img class="duration-500 opacity-0 dark:opacity-100" width="100%" height="100%" v-lazy-load src="/images/backgrounds/blob-1.svg">
        </div>
        <div class="blob absolute duration-500 opacity-50 blob-2 left-[-100px] bottom-6">
            <img class="duration-500 opacity-1 dark:opacity-0" width="100%" height="100%" v-lazy-load src="/images/backgrounds/dark-blob-3.svg">
			<img class="duration-500 opacity-0 dark:opacity-100" width="100%" height="100%" v-lazy-load src="/images/backgrounds/blob-3.svg">
        </div>
        <div class="blob absolute duration-500 opacity-50 blob-3 -right-5 top-0 scale-105">
            <img class="duration-500 opacity-1 dark:opacity-0" width="100%" height="100%" v-lazy-load src="/images/backgrounds/dark-blob-3.svg">
			<img class="duration-500 opacity-0 dark:opacity-100" width="100%" height="100%" v-lazy-load src="/images/backgrounds/blob-3.svg">
        </div>
        <div class="blob absolute duration-500 opacity-50 blob-4 -right-5 top-0 scale-105">
            <img class="duration-500 opacity-1 dark:opacity-0" width="100%" height="100%" v-lazy-load src="/images/backgrounds/dark-blob-4.svg">
			<img class="duration-500 opacity-0 dark:opacity-100" width="100%" height="100%" v-lazy-load src="/images/backgrounds/blob-4.svg">
        </div>
        <div class="blob absolute duration-500 opacity-50 blob-5 top-[40%] left-[10%] scale-50">
            <img class="duration-500 opacity-1 dark:opacity-0" width="100%" height="100%" v-lazy-load src="/images/backgrounds/dark-blob-4.svg">
			<img class="duration-500 opacity-0 dark:opacity-100" width="100%" height="100%" v-lazy-load src="/images/backgrounds/blob-4.svg">
        </div>
        <div class="doge-typing absolute bottom-0 right-0 opacity-20 w-[700px] translate-x-[200px] md:translate-x-[100px] translate-y-[86px] rotate-[-21deg]">
            <img width="100%" height="100%" v-lazy-load src="/images/backgrounds/doge-typing.webp" alt="doge-typing" class="w-full rounded-[100%]">
        </div>

        <div class="wave-divider absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180 z-[1]">
            <svg class="relative block h-11 rotate-180 " xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.1 35.33 3.38" preserveAspectRatio="none"><path d="M1.25 3.16c.67-.65 35.3 1.51 34.05-1.23-.42-.02-.85.06-1.25 0-.09.07-.18.1-.27 0-.31.02-.59.02-.88-.18-.15 0-.31-.31-.47-.12-.24-.25-.52.1-.72-.1-.66-.05-1.27-.31-1.9-.3-.22.22-.43-.06-.66.13-.15.05-.33.06-.5.1-.2.17-.41-.1-.62 0-.2-.07-.4-.18-.6.06-.42.19-.8.15-1.17.42-.49.23-1.03.63-1.65.8-.2.11-.4.32-.61.13-.5-.08-1.07.14-1.54-.04-.17.1-.35-.18-.54-.14-.16-.11-.32 0-.46-.14-.1-.23-.2.01-.31-.1-.28-.14-.57-.06-.88-.08-.25.21-.48-.26-.75-.1-.15.13-.29 0-.43-.05-.1.04-.19.06-.28 0-.47 0-.93-.1-1.4-.17-.15.15-.31-.1-.47-.02-.1.15-.2 0-.29.05-.1.05-.18.14-.27.07-.07.08-.13-.1-.19.03-.08.05-.2.17-.29.02-.22-.25-.49-.15-.7-.35-.13.03-.24-.2-.36-.12-.07.2-.15 0-.22-.05-.2-.14-.38 0-.55-.24-.2.06-.38-.3-.55-.18-.19.04-.37-.11-.57-.09-.09-.1-.19-.1-.28 0-.09.03-.17-.07-.25.02-.09-.22-.17-.11-.25-.07-.09.03-.17-.07-.25 0-.08-.17-.16-.05-.24-.07-.1.3-.5-.27-.7-.13-.07.13-.13.12-.2.05-.06.07-.12-.08-.18-.02-.12-.08-.23.31-.38.28-.06.06-.12-.08-.19 0-.08.19-.16-.17-.24.04-.17-.06-.36.05-.5-.04-.14.05-.3-.14-.44-.16-.15-.18-.3-.05-.46-.11-.1-.14-.2.09-.3-.04-.33.16-.64-.1-.99.06-.33.16-.68-.17-.97-.13-.16-.19-.3-.05-.46-.2C5.52.4 5.37.7 5.2.46 5.1.38 5 .46 4.9.4 4.8.2 4.68.3 4.57.32c-.22-.27-.45.19-.66-.08C3.75.2 3.59.11 3.43.17c-.3.2-.58-.28-.81-.06-.4.12-.8-.26-1.16-.04-.2.03-.38-.1-.57.1-.27.37-.55 0-.87.2-.01.99-.24 2.82 1.23 2.8" opacity=".2" fill="#22B4AB"></path><g><path d="M.02 3.26H35.3V2.03l-.32.02c-.15-.04-.3 0-.46-.02-.16-.02-.32.1-.47 0-.09.07-.18.1-.27 0a.45.45 0 01-.21.02c-.07-.05-.14.02-.2-.04-.15.02-.3-.05-.47-.16-.15 0-.31-.31-.47-.11-.16-.18-.32-.05-.48-.08-.08-.02-.16.13-.24-.02-.17-.04-.34-.1-.5-.05a.71.71 0 00-.5-.1.86.86 0 00-.5-.13c-.14-.1-.27.01-.4-.03-.14.17-.27.06-.4.05-.09.04-.17 0-.26.08a.37.37 0 00-.24.1c-.08-.02-.17-.07-.26 0-.2.17-.41-.1-.62 0-.2-.07-.4-.18-.6.06-.2.07-.4.17-.6.15-.2.17-.38.07-.57.27-.09-.07-.18.13-.27.16-.08.04-.15.02-.23.14-.17.06-.36.16-.55.3-.2.04-.4.12-.6.2-.2.11-.4.32-.61.13-.2-.08-.42.02-.63.04a3.13 3.13 0 00-.63-.03c-.1.05-.19.03-.28-.05-.1.08-.18-.02-.27-.06-.09-.04-.18-.08-.27-.08-.09-.07-.17-.03-.26-.08-.07.04-.14 0-.2-.06-.1-.23-.2.01-.31-.1-.1.02-.2-.15-.31-.06-.09 0-.17-.07-.26-.03-.1-.03-.2.08-.31.01-.11.1-.22.1-.32-.02-.15-.17-.3-.08-.43-.09-.15.14-.29 0-.43-.04-.1.04-.19.06-.28 0-.16.08-.31-.06-.47-.02-.15-.09-.3-.04-.46-.07-.16-.02-.31-.02-.47-.08-.15.15-.31-.1-.47-.02-.1.16-.2 0-.29.05-.09.06-.18.14-.27.07-.07.08-.13-.1-.19.03-.08.05-.2.17-.29.02-.1-.07-.22-.19-.34-.19-.06-.06-.11-.06-.17-.06-.06.02-.12.02-.18-.1-.06 0-.12 0-.18-.06-.06-.1-.13-.08-.19-.05-.07.18-.15-.01-.22-.06-.1-.1-.18-.04-.27-.08-.1.05-.19-.08-.28-.16-.09.04-.18-.07-.27-.09-.1-.11-.19-.14-.28-.09-.1 0-.19.02-.28-.05-.1 0-.2-.06-.29-.04-.09-.1-.19-.1-.28 0-.09.03-.17-.07-.25.02-.09-.22-.17-.11-.25-.07-.09.03-.17-.07-.25 0-.08-.16-.16-.05-.24-.07-.09.16-.17.13-.25-.01-.08-.06-.17-.04-.25-.08-.07-.03-.14-.12-.2-.04-.07.13-.13.12-.2.05-.06.07-.12-.08-.18-.02-.06-.02-.13 0-.19.15-.06.11-.12.1-.18.13-.07.06-.13-.08-.2 0-.08.19-.16-.17-.24.04a.5.5 0 00-.26 0c-.08-.07-.16.06-.24-.04-.07.03-.14 0-.22-.06-.07-.06-.14-.06-.22-.1-.15-.18-.3-.05-.46-.11-.1-.14-.2.09-.3-.04-.17.14-.34.04-.5 0-.16-.06-.33.08-.49.06-.16.08-.33-.01-.5.01-.16-.04-.32-.23-.47-.14-.16-.19-.3-.04-.46-.2C5.52.5 5.37.8 5.2.57c-.1-.09-.2 0-.3-.08C4.8.3 4.68.4 4.57.42 4.47.3 4.35.33 4.24.38c-.1 0-.22.15-.33-.04C3.75.3 3.59.21 3.43.27c-.17.04-.33.09-.49-.04-.1-.06-.21-.17-.32-.02-.2-.03-.39.1-.58-.06-.2.06-.39-.2-.58.02-.2.04-.38-.1-.57.1C.7.58.52.34.34.41.23.42.12.43.02.48z" fill="#22B4AB"></path></g><path d="M35.3 3.38H0v-.12H35.3z" fill="#22B4AB"></path></svg>
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
            header3Typing: false
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
						}
						let char = imWeb.charAt(i)
						header3.innerHTML += char
						i++
					}, 70)
				}
			}
        },
        mounted () {
            setTimeout(() => {
                this.typeHeaders()
            }, 600)
		},
        updated () {
            let targets = [
                `.subtle`,
                '.blob',
            ]

            this.animateElements(targets)
        }
    }
</script>

<style scoped lang="sass">
	.typing
		&::after
			content: ''
			position: absolute
			height: 90%
			width: 10px
			right: -15px
			top: 0
			bottom: 0
			animation: blink .5s alternate infinite

	.wave-divider
		svg
			width: calc(117% + 1.3px)
</style>