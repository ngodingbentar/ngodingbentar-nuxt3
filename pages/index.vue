<script setup>
// const { data: count } = await useFetch('/api/count')
async function cek () {
  const data = await useFetch('/api/province')
  console.log('data', data)
}
</script>
<template>
  <div><button @click="cek">cek</button></div>
</template>