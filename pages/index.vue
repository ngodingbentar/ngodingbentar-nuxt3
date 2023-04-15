<template>
  <div>
    <Navbar :enable="false" />
    <div v-if="!loadingTheme" class="main text-center" :style="{ background: storeTheme.background, color: storeTheme.color }">
      <div class="">
        <div v-if="loading">
          <Loading :theme="storeTheme" />
        </div>
        <div v-else>
          <nuxt-link v-for="item in dataDoa" :key="item.id" :to="item.route">
            <GlobalsCardComp class="content" :theme="storeTheme" :item="item" />
          </nuxt-link>
          <a v-for="item in extIndex" :key="item.id" :href="item.route" target="_blank">
            <GlobalsCardComp class="content" :theme="storeTheme" :item="item" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import IconChevronDown from '@carbon/icons-vue/es/chevron--down/16'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import dataJson from '~/assets/data/myindex.json'
import dataExt from '~/assets/data/extIndex.json'

const mainStore = useMainStore()
const { state } = storeToRefs(mainStore)

const loadingTheme = computed(() => state.value.loadingTheme)
const storeTheme = computed(() => state.value.theme)
const loading = ref(true)
const dataDoa = dataJson.data
const extIndex = dataExt.data

onBeforeMount(() => {
  setLoading()
})

function setLoading () {
  setTimeout(function () {
    loading.value = false
  }, 200)
}

async function cek () {
  mainStore.setToken('12345')
  // const axios = useNuxtApp().$axios
  // const data = await axios.get('/api/province')
  // console.log('dataku', data)
}
</script>

<style lang="postcss" scoped>
.darkTheme{
  /* color: rgb(61, 81, 94); */
  .card:hover{
    background: rgb(61, 81, 94);
  }
}
.lightTheme{
  .card:hover {
    background: #f1f1f1;
  }
}
.main {
  @apply pt-24 min-h-screen pb-8 px-40;
}

.content {
  @apply my-8;
}
.item {
  @apply px-8 mx-36 my-4;
}
.card {
  @apply text-2xl p-4 rounded-lg;
}
@screen tablet {
  .main {
    @apply pt-28;
  }
}
@screen mobile {
  .main {
    @apply pt-20 px-8;
  }
  .item {
    @apply mx-2 px-2;
  }
}
</style>