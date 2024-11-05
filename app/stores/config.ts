import { acceptHMRUpdate, defineStore } from "pinia"

export const useConfigStore = defineStore("config", () => {
  const themeColor = ref<string>('#3498db')
  const iconStyle = ref({
    display: 'icon',
    columns: 4,
  })

  const setThemeColor = (color: string) => themeColor.value = color
  const setIconStyle = (style: Partial<typeof iconStyle.value>) => iconStyle.value = { ...iconStyle.value, ...style }

  return {
    iconStyle,
    setIconStyle,
    themeColor,
    setThemeColor
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot))
}
