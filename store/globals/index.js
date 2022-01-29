export const state = () => ({
    theme: 'dark',
    showModal: false,
    showSideNav: false,
    showLoading: false
})

export const getters = {
    showModal: (state) => {
        return state.showModal
    },
    showSideNav: (state) => {
        return state.showSideNav
    },
    showLoading: (state) => {
        return state.showLoading
    },
    theme: (state) => {
        return state.theme
    }
}

export const mutations = {
    setTheme (state, value) {
        state.theme = value
        localStorage.theme = value
        if (value == 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },
    setShowModal (state, value = null) {
        if (value == null) {
            state.showModal ^= true
        } else {
            state.showModal = value
        }
    },
    setShowSideNav (state, payload) {
        state.showSideNav = payload
    },
    setShowLoading (state, payload) {
        state.showLoading = payload
    },
}

export const actions = {
    setShowModal ({ commit }, payload = null) {
        commit('setShowModal', payload)
    }
}