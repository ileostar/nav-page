<script setup lang="ts">
const iconSettings = useLocalStorage('icon-settings', {
  showIcons: true,
})

function toggleIcons() {
  iconSettings.value.showIcons = !iconSettings.value.showIcons
}
const navSettings = useLocalStorage('nav-settings', {
  display: 'card',
  columns: 4,
})
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-lg font-medium">导航设置</h3>
    
    <!-- 显示方式 -->
    <div class="space-y-2">
      <label class="text-sm font-medium">显示方式</label>
      <div class="flex gap-4">
        <button
          class="flex-1 rounded-lg p-2 transition-colors"
          :class="navSettings.display === 'card' ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'"
          @click="navSettings.display = 'card'"
        >
          卡片
        </button>
        <button
          class="flex-1 rounded-lg p-2 transition-colors"
          :class="navSettings.display === 'icon' ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'"
          @click="navSettings.display = 'icon'"
        >
          图标
        </button>
      </div>
    </div>

    <!-- 列数设置 -->
    <div v-if="navSettings.display === 'card'" class="space-y-2">
      <label class="text-sm font-medium">列数</label>
      <select
        v-model="navSettings.columns"
        class="w-full rounded-lg border p-2"
      >
        <option :value="2">2 列</option>
        <option :value="3">3 列</option>
        <option :value="4">4 列</option>
        <option :value="6">6 列</option>
      </select>
    </div>
  </div>
</template>
