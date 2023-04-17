

export interface DocumentConfig {
  email_verify: boolean,
}

export async function getSurahById (surahId: number) {
  const axios = useNuxtApp().$axios
  const data = await axios.get(`/api/surah/${surahId}`)
  // console.log('dataku', data)
  return data
  // return await useApi().get(`/config/${surahId}`)
}