import { acceptHMRUpdate, defineStore } from "pinia"

export const useConfigStore = defineStore("config", () => {
  const iconStyle = ref({
    display: 'icon',
    columns: 4,
  })

  const setIconStyle = (style: Partial<typeof iconStyle.value>) => iconStyle.value = { ...iconStyle.value, ...style }

  return {
    iconStyle,
    setIconStyle,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot))
}
