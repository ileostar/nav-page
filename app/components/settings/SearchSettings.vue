<script setup lang="ts">
const searchSettings = useLocalStorage('search-settings', {
  defaultEngine: 'baidu',
  showSearchSuggestions: true,
  openInNewTab: true,
})

// 确保在组件加载时，数据是正确的
onMounted(() => {
  console.log('当前搜索设置:', searchSettings.value)
})
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      搜索设置
    </h3>

    <div class="space-y-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">默认搜索引擎</label>
        <select v-model="searchSettings.defaultEngine" class="w-full border rounded-lg p-2">
          <option v-for="engine in searchEngines" :key="engine.value" :value="engine.value">
            {{ engine.label }}
          </option>
        </select>
      </div>

      <div class="flex items-center gap-2">
        <input
          v-model="searchSettings.showSearchSuggestions"
          type="checkbox"
          class="border-gray-300 rounded"
        >
        <label class="text-sm">显示搜索建议</label>
      </div>

      <div class="flex items-center gap-2">
        <input
          v-model="searchSettings.openInNewTab"
          type="checkbox"
          class="border-gray-300 rounded"
        >
        <label class="text-sm">在新标签页中打开搜索结果</label>
      </div>
    </div>
  </div>
</template>
