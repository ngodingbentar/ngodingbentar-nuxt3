<template>
  <span>
    <GlobalsNavbar to="/agama" />
    <div v-if="!loadingTheme" class="main font-arabic" :style="{ background: storeTheme.background, color: storeTheme.color }">
      <div v-if="loading">
        <!-- <Loading :theme="storeTheme" /> -->
      </div>
      <div v-else class="content">
        <button @click="cek">cek</button>
        <GlobalsBackComp :theme="storeTheme" route="/agama/surah" class="mb-4" />
        <!-- <Headerquran :surah="surah" :theme="storeTheme" /> -->
        <!-- <div v-for="(surat, index) in pageOfItems" :key="index" class="item"> -->
        <div v-for="(surat, index) in newSurah" :key="index" class="item">
          <AgamaQuranCardcomp
            :theme="storeTheme"
            :index="index"
            :surat="surat"
            :surah="surah"
            :arti="surah.translations.id.text[surat[0]]"
            :audio="setAudio(surat[0])"
          />
        </div>
      </div>
    </div>
  </span>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { getSurahById } from '@/api/agama'

onBeforeMount(() => {
  getSurah()
})

const mainStore = useMainStore()
const { state } = storeToRefs(mainStore)
const route     = useRoute()
const idParams = route.params.id
const surah = ref({})
const loading = ref(true)
const loadingTheme = computed(() => state.value.loadingTheme)
const storeTheme = computed(() => state.value.theme)
const newSurah = ref([])
const pageOfItems = ref([])

// if (process.browser) {
//   window.smoothscroll = () => {
//     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
//     if (currentScroll > 0) {
//       window.requestAnimationFrame(window.smoothscroll)
//       window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
//     }
//   }
// }

function setAudio (id) {
  console.log('id', id)
  let data = ref('')
  let idSuray = ref('')
  if (id.length === 1) {
    data.value = `00${id}`
  } else if (id.length === 2) {
    data.value = `0${id}`
  } else {
    data.value = id
  }

  if (idParams.length === 1) {
    idSuray.value = `00${idParams}`
  } else if (idParams.length === 2) {
    idSuray.value = `0${idParams}`
  } else {
    idSuray.value = idParams.toString()
  }
  const result = ref(`https://quran.kemenag.go.id/cmsq/source/s01/${idSuray.value}${data.value}.mp3`)
  console.log('result', result.value)
  return result
}

function cek () {
  console.log('surah', surah.value)
  console.log('pageOfItems', pageOfItems.value)
  // console.log('surah.translations.id.text', surah.value.translations.id.text)
}

function onChangePage (data) {
  pageOfItems.value = data
  // window.smoothscroll()
}
function getNewSurah () {
  const data = JSON.parse(JSON.stringify(surah.value))
  const obj2 = data.text
  const result2 = Object.entries(obj2)
  newSurah.value = result2 as []
  console.log('newSurah.value', newSurah.value)
  setTimeout(() => {
    loading.value = false
  }, 500)
}

async function getSurah () {
  getSurahById(Number(idParams))
    .then((res) => {
      surah.value = res.data[idParams.toString()]
      getNewSurah()
    })
}

</script>
<style lang="postcss" scoped>
.main {
  @apply min-h-screen pb-20 pt-20;
}
@font-face {
  font-family: "lpmq";
  src: url(/fonts/lpmq.otf) format("opentype");
  font-display: swap;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.font-arabic{
  font-family: "lpmq", Arial, sans-serif;
  line-height: 2;
}

.item {
  @apply px-8 mx-36;
}
@screen tablet {
  .content {
    @apply pt-4;
  }
}
@screen mobile {
  .main {
    @apply pt-8;
  }
  .item {
    @apply mx-2 px-2;
  }
  .content {
    @apply pt-12;
  }
}
</style>
