<template>
  <div class="back">
    <nuxt-link :to="route">
      <div class="btn-back" :style="{ boxShadow: theme.boxShadow }">
        <IconArrowLeft />
      </div>
    </nuxt-link>
  </div>
</template>
<script lang="ts" setup>
import IconArrowLeft from '@carbon/icons-vue/es/arrow--left/24'

const props = defineProps({
  theme: {
    type: Object,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})
</script>
<style lang="postcss" scoped>
.back {
  @apply ml-32;
  font-size:22px;
}
.btn-back {
  @apply flex items-center text-center justify-center rounded-full;
  width: 40px;
  height: 40px;
}

@screen mobile {
  .back {
    @apply ml-4;
  }
}
</style>
