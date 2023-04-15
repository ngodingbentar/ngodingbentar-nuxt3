<template>
  <div><button @click="cek">cek</button></div>
  <h1 class="text-3xl font-bold underline text-blue-400">
    Hello world! <IconChevronDown />
  </h1>
</template>

<script setup>
import IconChevronDown from '@carbon/icons-vue/es/chevron--down/16'
import { mainStore } from '@/stores/main'

const main       = mainStore()

async function cek () {
  main.setToken('12345')
  // const axios = useNuxtApp().$axios
  // const data = await axios.get('/api/province')
  // console.log('dataku', data)
}
</script>