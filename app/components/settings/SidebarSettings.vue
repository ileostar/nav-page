<script setup lang="ts">
const sidebarSettings = useLocalStorage('sidebar-settings', {
  show: true,
})

function toggleSidebar() {
  sidebarSettings.value.show = !sidebarSettings.value.show
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      侧边栏设置
    </h3>
    <div class="flex items-center gap-2">
      <input
        v-model="sidebarSettings.show"
        type="checkbox"
        @change="toggleSidebar"
      >
      <label>显示侧边栏</label>
    </div>
  </div>
</template>
