<script setup lang="ts">
function backupData() {
  // 这里实现备份逻辑
  console.log('备份数据...')
}

function restoreData() {
  // 这里实现恢复逻辑
  console.log('恢复数据...')
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      备份和恢复
    </h3>
    <button class="btn" @click="backupData">
      备份数据
    </button>
    <button class="btn" @click="restoreData">
      恢复数据
    </button>
  </div>
</template>
