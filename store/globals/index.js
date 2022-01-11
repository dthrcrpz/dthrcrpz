export const state = () => ({
    theme: 'light',
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
    }
}

export const mutations = {
    setWebsiteTheme (state, value) {
        state.theme = value
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