<script setup lang="ts">
function resetSettings() {
  // 这里实现重置逻辑
  console.log('重置设置...')
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      重置设置
    </h3>
    <button class="btn" @click="resetSettings">
      重置所有设置
    </button>
  </div>
</template>
