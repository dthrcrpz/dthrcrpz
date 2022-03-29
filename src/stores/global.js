import { writable } from "svelte/store"

function createModalStore() {
  const { subscribe, update } = writable(false)

  return {
    subscribe,
    toggleModal: (payload = null) => {
      if (payload == null) {
        update(n => !n)
      } else {
        update(n => payload)
      }
    }
  }
}

function createThemeStore() {
  const { subscribe, update } = writable('light')

  return {
    subscribe,
    setTheme: (payload) => {
      update(n => payload)
      localStorage.dcTheme = payload

      if (payload == 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}

export const modal = createModalStore()
export const theme = createThemeStore()