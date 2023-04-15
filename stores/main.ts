import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  const theme = ref('')
  function setToken (token: string) {
    console.log('setToken', token)
  }

  return { setToken }
})
