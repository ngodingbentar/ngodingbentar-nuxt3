<template>
  <nuxt-link to="/agama/surah" class="box" :style="{ boxShadow: boxShadow }">
    <div class="content items-center">
      <img class="m-auto" :src="src" alt="https://www.freepik.com" />
      <p>Daftar Surah</p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  boxShadow: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
})
</script>