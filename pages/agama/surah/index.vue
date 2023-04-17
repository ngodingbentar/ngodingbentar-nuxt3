<template>
  <span>
    <GlobalsNavbar to="/agama/islam" />
    <div v-if="!loadingTheme" class="main" :style="{ background: storeTheme.background, color: storeTheme.color }">
      <GlobalsBackComp :theme="storeTheme" route="/agama/islam" />
      <!-- <SearchComp :fields="dataFields" :data="data.surah_info" @search="searchFilter" /> -->
      <div class="item text-center flex justify-between">
        <p class="sum" :style="{ boxShadow: storeTheme.boxShadow }">{{ allSurah.length }} data</p>
        <!-- <button class="question focus:outline-none" :style="{ boxShadow: storeTheme.boxShadow  }" @click="doSetting()">
          <font-awesome-icon class="icon-question" :icon="['fas', 'question']" />
        </button> -->
      </div>
      <div class=" min-h-screen font-arabic">
        <div v-if="loading">
          <!-- <Loading :theme="storeTheme" /> -->
          <GlobalsLoading :theme="storeTheme" />
        </div>
        <div v-else>
          <div v-for="(surah, index) in pageOfItems" :key="index" class="item" :class="bgId">
            <nuxt-link :to="'/agama/surah/'+surah.index">
              <div class="card" :style="{ boxShadow: storeTheme.boxShadow }">
                <div class="">
                  <div class="idSurah" :style="{ boxShadow: storeTheme.boxShadow }">{{ surah.index }}</div>
                  <div class="nameSurah">
                    <p>{{ surah.arabic }}</p>
                    <p class="mt-4">{{ surah.latin }}</p>
                    <p class="italic text-base">( {{ surah.translation }} : {{ surah.ayah_count }} ayat )</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>

          <div v-if="pageOfItems.length === 0" class="text-center text-2xl font-bold mt-16">
            --- Data tidak ditemukan ---
            <!-- <button @click="cek">cek</button> -->
          </div>

          <div v-if="!loadingNav" class="text-center py-3">
            <ClientOnly>
              <!-- <JwPagination :items="allSurah" :pageSize="10" @changePage="onChangePage" /> -->
              <!-- <jw-pagination @changePage="changePage" :items="allSurah" :pageSize="10" /> -->
              <!-- <vue-awesome-paginate
                :total-items="50"
                :items-per-page="5"
                :max-pages-shown="5"
                v-model="currentPage"
                :on-click="onClickHandler"
              /> -->
            </ClientOnly>
          </div>
        </div>

        <!-- <Transition name="drawer">
          <About v-if="isSetting" :source="source" :theme="storeTheme" @close="closeModal" />
        </Transition> -->

      </div>
    </div>
  </span>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import json from '~/assets/data/surah-info.json'
// const { $JwPagination } = useNuxtApp()

// const onClickHandler = (page) => {
//   console.log(page);
// };

// const currentPage = ref(1);

const mainStore = useMainStore()

const { state } = storeToRefs(mainStore)
const data = json
const search = ref('')
// const dataFields = { value: 'latin' }
const allSurah = ref([])
const pageOfItems = ref([])
const loading = ref(true)
const loadingTheme = computed(() => state.value.loadingTheme)
const storeTheme = computed(() => state.value.theme)
const isSetting = ref(false)
// const source = 'https://quran.kemenag.go.id'
const bgId = computed(() => {
  if (storeTheme.value?.darktheme) {
    return 'darkTheme'
  } else {
    return 'lightTheme'
  }
})
const loadingNav = ref(true)

onMounted(() => {
  pageOfItems.value = data.surah_info as []
  setTimeout(function () {
    loadingNav.value = false
  }, 5000)
})

onBeforeMount(() => {
  // console.log('data json', data.surah_info)
  // console.log('typeof data', typeof data.surah_info, typeof pageOfItems.value)
  // pageOfItems.value = data.surah_info
  // console.log('pageOfItems', pageOfItems.value)
  // onChangePage(allSurah.value)
})

// function cek () {
//   console.log('cek', $JwPagination)
// }

if (process.browser) {
  window.smoothscroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    if (currentScroll > 0) {
      window.requestAnimationFrame(window.smoothscroll)
      window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
    }
  }
}

setTimeout(function () {
  loading.value = false
}, 500)

searchFilter(search.value)


// function closeModal () {
//   isSetting.value = false
// }
// function doSetting () {
//   isSetting.value = true
// }

// function changePage (data) {
//   console.log('data', data)
//   pageOfItems.value = data
//   console.log('pageOfItems', pageOfItems.value)
//   window.smoothscroll()
// }

function searchFilter (dataSearch) {
  if (dataSearch === null) {
    dataSearch = ''
  }
  setTimeout(function () {
    const result = data.surah_info.filter(surat =>
      surat.latin.toLowerCase().includes(dataSearch.toLowerCase())
    )
    allSurah.value = result as []
    loading.value = false
  }, 100)
}
</script>
<style lang="postcss" scoped>
.sum {
  @apply py-2 px-4 rounded-lg;
  width: 100px;
}
.question {
  @apply p-2 rounded-full place-items-center justify-center flex;
  .icon-question {
    @apply p-1;
    width: 25px;
    height: 25px;
  }
}
.main {
  @apply pt-24 min-h-screen;
}
@font-face {
  font-family: "lpmq";
  src: url('@/assets/fonts/lpmq.otf') format("opentype");
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
  @apply px-8 mx-36 my-8;
}
.card {
  @apply text-3xl p-4 rounded-lg;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.15); */
  .idSurah {
    @apply text-center text-lg items-center justify-center flex font-bold rounded-full;
    width: 40px;
    height: 40px;
  }
  .nameSurah {
    @apply px-4 text-right w-full;
  }
}
@screen tablet {
  .main {
    @apply pt-28;
  }
}
@screen mobile {
  .main {
    @apply pt-20;
  }
  .item {
    @apply mx-2 px-2;
  }
  .surat {
    @apply text-2xl;
  }
  .idSurah {
    @apply text-sm;
    width: 30px;
    height: 30px;
  }
}
</style>
