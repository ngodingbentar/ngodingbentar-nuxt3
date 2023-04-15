import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const theme = ref('')
  const state = ref({
    audio: 'On',
    sub: 'On',
    theme: {
      darktheme: false,
      // background: '#f7f7f7',
      background: 'white',
      color: 'black',
      boxShadow: '5px 5px 12px #dedede,-5px -5px 12px #ffffff'
    },
    weather: [],
    initTheme: {
      darktheme: false,
      // background: '#f7f7f7',
      background: 'white',
      color: 'black',
      boxShadow: '5px 5px 12px #dedede,-5px -5px 12px #ffffff'
    },
    loadingTheme: false,
    loadingAudio: false,
    loadingweather: true,
    searchvalue: ''
  })

  function setToken (token: string) {
    console.log('setToken', token)
  }

  return { state, theme, setToken }
})
