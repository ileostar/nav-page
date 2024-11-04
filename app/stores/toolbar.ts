import { acceptHMRUpdate, defineStore } from 'pinia'

export const useToolbarStore = defineStore('toolbar', () => {
  const settingVisible = ref(false)
  const supportVisible = ref(false)

  const toggleSettingVisible = () => settingVisible.value = !settingVisible.value
  const toggleSupportVisible = () => supportVisible.value = !supportVisible.value

  return {
    settingVisible,
    toggleSettingVisible,
    supportVisible,
    toggleSupportVisible,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToolbarStore, import.meta.hot))
}
