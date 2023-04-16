<template>
  <nuxt-link to="/agama/surah" class="box" :style="{ boxShadow: boxShadow }">
    <div class="content items-center">
      <!-- <img class="m-auto" :src="src" alt="https://www.freepik.com" /> -->
      <slot />
      <p>{{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  boxShadow: {
    type: String,
    required: true,
  },
})
</script>