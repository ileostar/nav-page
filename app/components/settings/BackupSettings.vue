<script setup lang="ts">
import { useMessage } from '@/composables/message'
import { useBackupStore } from '@/stores/backup'
import { ref } from 'vue'

const backupStore = useBackupStore()
const message = useMessage()

async function handleRestore(file: File) {
  if (!file)
    return

  const success = await backupStore.restoreBackup(file)
  if (success) {
    message.success('备份恢复成功！需要刷新页面以应用更改。')
    window.location.reload()
  }
  else {
    message.error('备份恢复失败，请检查文件格式是否正确。')
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleString()
}
</script>

<template>
  <div class="backup-settings">
    <h3>备份设置</h3>

    <div class="backup-controls">
      <v-switch
        v-model="backupStore.autoBackup"
        label="自动备份"
      />

      <v-select
        v-if="backupStore.autoBackup"
        v-model="backupStore.backupInterval"
        :items="[1, 7, 14, 30]"
        label="备份间隔(天)"
      />

      <div class="button-group">
        <v-btn
          color="primary"
          @click="backupStore.createBackup()"
        >
          创建备份
        </v-btn>

        <v-file-input
          accept=".json"
          label="恢复备份"
          @change="handleRestore"
        />
      </div>
    </div>

    <div v-if="backupStore.lastBackupDate" class="backup-info">
      上次备份时间: {{ formatDate(backupStore.lastBackupDate) }}
    </div>
  </div>
</template>

<style scoped>
.backup-settings {
  padding: 1rem;
}

.backup-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.button-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.backup-info {
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
