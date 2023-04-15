<template>
  <div><button @click="cek">cek</button></div>
  <h1 class="text-3xl font-bold underline text-blue-400">
    Hello world!
  </h1>
</template>

<script setup>
// const { data: count } = await useFetch('/api/count')
async function cek () {
  const data = await useFetch('/api/province')
  console.log('data', data)
}
</script>