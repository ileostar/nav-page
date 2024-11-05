<script setup lang="ts">
const layoutSettings = useLocalStorage('layout-settings', {
  layoutType: 'grid',
})

function toggleLayout() {
  layoutSettings.value.layoutType = layoutSettings.value.layoutType === 'grid' ? 'list' : 'grid'
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      布局设置
    </h3>
    <div class="flex items-center gap-2">
      <input
        v-model="layoutSettings.layoutType"
        type="checkbox"
        @change="toggleLayout"
      >
      <label>切换布局</label>
    </div>
  </div>
</template>
