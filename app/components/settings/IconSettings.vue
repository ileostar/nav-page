<script setup lang="ts">
const iconSettings = useLocalStorage('icon-settings', {
  showIcons: true,
})

function toggleIcons() {
  iconSettings.value.showIcons = !iconSettings.value.showIcons
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      图标设置
    </h3>
    <div class="flex items-center gap-2">
      <input
        v-model="iconSettings.showIcons"
        type="checkbox"
        @change="toggleIcons"
      >
      <label>显示图标</label>
    </div>
  </div>
</template>
