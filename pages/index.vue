<template>
  <div><button @click="cek">cek</button></div>
  <h1 class="text-3xl font-bold underline text-blue-400">
    Hello world!
  </h1>
</template>

<script setup>
// const { data: count } = await useFetch('/api/count')
async function cek () {
  const axios = useNuxtApp().$axios
  // const data = await useFetch('/api/province')
  const data = await axios.get('/api/province')
  console.log('dataku', data)
}
</script>