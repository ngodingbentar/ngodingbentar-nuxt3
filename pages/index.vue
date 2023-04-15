<template>
  <Navbar :enable="false" />
</template>

<script setup>
// import IconChevronDown from '@carbon/icons-vue/es/chevron--down/16'
import { useMainStore } from '@/stores/main'

const main       = useMainStore()

async function cek () {
  main.setToken('12345')
  // const axios = useNuxtApp().$axios
  // const data = await axios.get('/api/province')
  // console.log('dataku', data)
}
</script>