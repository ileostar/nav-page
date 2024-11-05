import { acceptHMRUpdate, defineStore } from 'pinia'

export const useToolbarStore = defineStore('toolbar', () => {
  const settingVisible = ref(false)
  const supportVisible = ref(false)
  const userInfosVisible = ref(false)

  const toggleSettingVisible = () => settingVisible.value = !settingVisible.value
  const toggleSupportVisible = () => supportVisible.value = !supportVisible.value
  const toggleUserInfosVisible = () => userInfosVisible.value = !userInfosVisible.value

  return {
    settingVisible,
    toggleSettingVisible,
    supportVisible,
    toggleSupportVisible,
    userInfosVisible,
    toggleUserInfosVisible,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToolbarStore, import.meta.hot))
}
