<script setup lang="ts">
const searchSettings = useLocalStorage('search-settings', {
  defaultEngine: 'baidu',
  showSearchSuggestions: true,
  openInNewTab: true,
  isVisible: true,
  height: 50,
  borderRadius: 5,
  opacity: 1,
})

const searchSettingConfig = ref({
  searchHistory: true
})

const configStore = useConfigStore()
const { themeColor } = storeToRefs(configStore)


const amberSwitch = ref({
  root: {
    checkedBackground: themeColor,
    checkedHoverBackground: themeColor
  }
});
</script>

<template>
  <div class="space-y-6">
    <BaseCard>
      <div class="my-3 flex justify-between items-center">
        <label class="text-lg font-medium">搜索栏显示</label>
        <ToggleSwitch v-model="searchSettings.isVisible" :dt="amberSwitch" />
      </div>

      <div class="my-3 flex justify-between items-center">
        <label class="text-lg font-medium">搜索栏高度</label>
        <Slider v-model="searchSettings.height" class="w-56" />
      </div>

      <div class="my-3 flex justify-between items-center">
        <label class="text-lg font-medium">圆角</label>
        <Slider v-model="searchSettings.borderRadius" class="w-56" />
      </div>

      <div class="my-3 flex justify-between items-center">
        <label class="text-lg font-medium">透明度</label>
        <Slider v-model="searchSettings.opacity" class="w-56" />
      </div>
    </BaseCard>

    <BaseCard>
      <div class="flex justify-between">
        <label class="text-lg font-medium">搜索历史</label>
        <ToggleSwitch v-model="searchSettingConfig.searchHistory" :dt="amberSwitch" />
      </div>
    </BaseCard>
  </div>
</template>
