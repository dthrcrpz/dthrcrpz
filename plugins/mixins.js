import Vue from 'vue'

Vue.mixin({
    methods: {
		animateElements (targets) {
            /**
             * Observer (IntersectionObserver)
             * @param {[array]} items [target elements] */
            let observer = new IntersectionObserver((items) => {
                items.forEach((item, key) => {
                    if (item.isIntersecting) {
						let delay = (!item.target.hasAttribute('delay')) ? 0 : parseInt(item.target.getAttribute('delay'))
						console.log(delay)
						setTimeout (() => {
							item.target.classList.add('ov')
						}, delay)
                        observer.unobserve(item.target)
                    }
                })
            })

            /**
             * Listing all the elements in order to observe */
            targets.forEach((target, key) => {
                let elements = document.querySelectorAll(target)
                elements.forEach((element, k) => {
                    observer.observe(element)
                })
            })
        },
		properFormat (value) {
			let newValue = value.split('The ')[1].split(' field')[0].split('.')
			if (newValue.length > 1) {
				newValue = newValue[1].split('[]')
				if (newValue.length > 1) {
					let nextValue = newValue[0].split('_')
					if (nextValue.length > 1) {
						newValue = nextValue[0].charAt(0).toUpperCase() + nextValue[0].slice(1) + ' ' + nextValue[1].charAt(0).toUpperCase() + nextValue[1].slice(1)
					} else {
						newValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
					}
				} else {
					let nextValue = newValue[0].split('_')
					if (nextValue.length > 1) {
						newValue = nextValue[0].charAt(0).toUpperCase() + nextValue[0].slice(1) + ' ' + nextValue[1].charAt(0).toUpperCase() + nextValue[1].slice(1)
					} else {
						newValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
					}
				}
			} else {
				newValue = value.split('The ')[1].split(' field')[0].split('[]')
				if (newValue.length > 1) {
					let nextValue = newValue[0].split('_')
					if (nextValue.length > 1) {
						newValue = nextValue[0].charAt(0).toUpperCase() + nextValue[0].slice(1) + ' ' + nextValue[1].charAt(0).toUpperCase() + nextValue[1].slice(1)
					} else {
						newValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
					}
				} else {
					newValue = value.split('The ')[1].split(' field')[0].split('_')
					if (newValue.length > 1) {
						let firstValue = ''
						let lastValue = ''
						firstValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
						for (let i = 1; i < newValue.length; i++) {
							if (newValue[i] != 'id') {
								lastValue += ' ' + newValue[i].charAt(0).toUpperCase() + newValue[i].slice(1)
							}
						}
						newValue = firstValue + ' ' + lastValue
					} else {
						newValue = value.split('The ')[1].split(' field')[0].charAt(0).toUpperCase() + value.split('The ')[1].split(' field')[0].slice(1)
					}
				}
			}
			let message = value.split('The ')[1].split(' field')
			if (message.length > 1) {
				message = message[1]
				return `The ${newValue} field${message}`
			} else {
				if (message[0].split('file').length > 1) {
					message = message[0].split('file')[1]
					if (message.split('[]').length > 1) {
						message = message.split('[]')[1]
						return `The ${newValue} field${message}`
					} else {
						return `The ${newValue} field${message}`
					}
				} else {
					return `The ${newValue}`
				}
			}
		},
	}
})