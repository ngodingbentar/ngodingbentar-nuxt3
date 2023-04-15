<template>
  <div v-if="!loadingTheme" class="app-header font-arabic font-bold" :style="{ background: storeTheme.background, color: storeTheme.color }">
    <div class="inner container">
      <div class="start">
        <div class="box" :style="{ boxShadow: storeTheme.boxShadow }">
          <nuxt-link class="btn-nav" to="/">
            <img class="img-nav" src="~/assets/images/iconNew.png">
          </nuxt-link>
        </div>

        <div v-if="enable" class="box ml-4" :style="{ boxShadow: storeTheme.boxShadow }">
          <nuxt-link class="btn-nav" :to="route">
            <IconHome />
          </nuxt-link>
        </div>
      </div>
      <div class="end box" :style="{ boxShadow: storeTheme.boxShadow }">
        <button class="btn-nav focus:outline-none" @click="doSetting()">
          <IconSettings />
        </button>
      </div>
      <Transition name="drawer">
        <Setting v-if="isSetting" :theme="storeTheme" @close="closeModal" />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import IconSettings from '@carbon/icons-vue/es/settings/24'
import IconHome from '@carbon/icons-vue/es/home/24'

const props  = defineProps({ route: { type: String, required: false, default: '/' }, enable: { type: Boolean, required: false, default: true } })

const mainStore = useMainStore()

const { state } = storeToRefs(mainStore)
console.log('state', state.value.loadingTheme)

const isSetting = ref(false)
const loadingTheme = computed(() => state.value.loadingTheme)
const storeTheme = computed(() => state.value.theme)

function cek () {
  console.log(props)
}
function closeModal () {
  isSetting.value = false
  console.log('isSetting', isSetting.value)
}
function doSetting () {
  isSetting.value = true
}
</script>

<style lang="postcss">
.box {
  @apply rounded-full flex justify-center;
  padding: 10px;
  font-size: 20px;
  place-items: center;
  text-align: center;
}

.btn-nav {
  width: 25px;
  height: 25px;
}
/* img.img-nav{
  width: 22px;
} */

@font-face {
  font-family: "lpmq";
  src: url('@/assets/fonts/lpmq.otf') format("opentype");
  font-display: swap;
}
.font-arabic{
  font-family: "lpmq", Arial, sans-serif;
  line-height: 2;
}
.app-header {
  @apply fixed flex justify-center w-full top-0 py-4;
  @apply z-30 select-none;
  height: var(--header-height);
  min-width: 320px;

  .inner {
    @apply flex flex-wrap justify-between h-full text-xl px-8;
  }

  .start {
    @apply flex items-center;
  }

  .end {
    /* @apply grid grid-flow-col gap-4; */
  }

  .line {
    @apply block w-px opacity-50 mr-3;
    height: 32px;
  }
}

@screen sm {
}
@screen md {
  .app-header {
    @apply flex-shrink-0;
    /* @apply relative; */
  }
}
</style>
