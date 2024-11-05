<script setup lang="ts">
const timeSettings = useLocalStorage('time-settings', {
  format24: true,
  showSeconds: false,
  showDate: true,
  dateFormat: 'YYYY-MM-DD',
})

const dateFormats = [
  { value: 'YYYY-MM-DD', label: '2024-03-19' },
  { value: 'YYYY/MM/DD', label: '2024/03/19' },
  { value: 'MM-DD', label: '03-19' },
  { value: 'DD/MM/YYYY', label: '19/03/2024' },
]
</script>

<template>
  <div class="space-y-6">

    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <input
          v-model="timeSettings.format24"
          type="checkbox"
          class="border-gray-300 rounded"
        >
        <label class="text-sm">24小时制</label>
      </div>

      <div class="flex items-center gap-2">
        <input
          v-model="timeSettings.showDate"
          type="checkbox"
          class="border-gray-300 rounded"
        >
        <label class="text-sm">显示日期</label>
      </div>

      <div v-if="timeSettings.showDate" class="space-y-2">
        <label class="text-sm font-medium">日期格式</label>
        <select v-model="timeSettings.dateFormat" class="w-full border rounded-lg p-2">
          <option v-for="format in dateFormats" :key="format.value" :value="format.value">
            {{ format.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
