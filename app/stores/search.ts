import { acceptHMRUpdate, defineStore } from "pinia"

export interface ISearchEngine {
  name: string
  url: string
  icon: string
}

export const useSearchStore = defineStore("search", () => {
  const searchEngines = ref<ISearchEngine[]>([
    { name: '百度', url: 'https://www.baidu.com/s?wd=', icon: 'i-bxl:baidu' },
    { name: '谷歌', url: 'https://www.google.com/search?q=', icon: 'i-carbon-logo-google' },
    { name: 'Bing', url: 'https://www.bing.com/search?q=', icon: 'i-bxl:bing' },
    { name: 'GitHub', url: 'https://github.com/search?q=', icon: 'i-carbon-logo-github' },
  ])
  const currentEngine = ref<ISearchEngine>(searchEngines.value[0]!)

  const addSearchEngine = (engine: ISearchEngine) => {
    searchEngines.value.push(engine)
  }

  const setCurrentEngine = (engine: ISearchEngine) => currentEngine.value = engine

  return {
    searchEngines,
    currentEngine,
    addSearchEngine,
    setCurrentEngine
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
}
