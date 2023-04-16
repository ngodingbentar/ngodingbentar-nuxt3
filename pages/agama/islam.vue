<template>
  <div>
    <Navbar to="/agama" />
    <div class="agama">
      <div v-if="!loadingTheme" class="main" :style="{ background: storeTheme.background, color: storeTheme.color, boxShadow: storeTheme.boxShadow }">
        <div class="container" :class="bgId">
          <AgamaCard to="/agama/surah" title="Daftar Surah" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/quran2.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/asmaul-husna" title="Asmaul Husna" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/allah.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/doa-harian" title="Doa Harian" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/praying.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/tahlil" title="Doa Tahlil" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/pray.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/wirid" title="Wirid" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/beads.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/jadwal-shalat" title="Jadwal Shalat" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/shalat/pray.png" alt="https://www.freepik.com" />
          </AgamaCard>
          <AgamaCard to="/agama/kisah" title="Kisah Nabi & Rasul" :boxShadow="storeTheme.boxShadow">
            <img class="m-auto" src="@/assets/images/muhammad.png" alt="https://www.freepik.com" />
          </AgamaCard>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

const { state } = storeToRefs(mainStore)

const loadingTheme = computed(() => state.value.loadingTheme)
const storeTheme = computed(() => state.value.theme)
const bgId = computed(() => {
  if (storeTheme.value?.darktheme) {
    return 'darkTheme'
  } else {
    return 'lightTheme'
  }
})

</script>
<style lang="postcss">
.agama {
  .darkTheme{
    /* color: rgb(61, 81, 94); */
    .box:hover{
      background: rgb(61, 81, 94);
    }
  }
  .lightTheme{
    .box:hover {
      background: #f1f1f1;
    }
  }
  
  .main {
    @apply pt-20 min-h-screen pb-8 flex mt-8 px-40;
    justify-content: center;
    align-self: center;
    /* background-color: #f7f7f7; */
  }
  .container {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    grid-template-rows: repeat(minmax(100px, auto));
    margin: 40px;
    grid-auto-flow: dense;
    grid-gap: 20px;
  }
  
  .container .box {
    @apply rounded-2xl;
    padding: 20px;
    display: grid;
    font-size: 20px;
    place-items: center;
    text-align: center;
  }
  .container .box img {
    position: relative;
    max-width: 50px;
    margin-bottom: 10px;
  }
  
  .container {
    margin: 20px;
  }
  .container .box:nth-child(1){
    grid-column: span 2;
    grid-row: span 1;
  }
  .container .box:nth-child(2){
    grid-column: span 1;
    grid-row: span 1;
  }
  .container .box:nth-child(3){
    grid-column: span 1;
    grid-row: span 2;
  }
  .container .box:nth-child(4){
    grid-column: span 1;
    grid-row: span 3;
  }
  .container .box:nth-child(5){
  }
  .container .box:nth-child(6){
    grid-column: span 1;
    grid-row: span 1;
  }
  .container .box:nth-child(7){
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .footer {
    height: 70px;
  }
  @screen mobile {
    .main {
      @apply pt-16 px-2;
    }
  }
}
</style>
