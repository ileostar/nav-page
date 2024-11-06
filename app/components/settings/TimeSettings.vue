<script setup lang="ts">
const timeSettings = useLocalStorage('time-settings', {
  // 显示控制
  isVisible: true,
  showDate: true,
  showWeek: true,
  showLunar: true,

  // 时间格式
  format24: true,
  dateFormat: 'YYYY-MM-DD',

  // 样式设置
  fontSize: 88,
  fontFamily: 'Inter',
  fontWeight: 700,
  color: '#000000',
  textAlign: 'center',
  letterSpacing: 0,
})

const dateFormats = [
  { value: 'YYYY-MM-DD', label: '2024-03-19' },
  { value: 'YYYY/MM/DD', label: '2024/03/19' },
  { value: 'MM-DD', label: '03-19' },
  { value: 'DD/MM/YYYY', label: '19/03/2024' },
]

const fontFamilies = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Arial', label: 'Arial' },
  { value: 'Times New Roman', label: 'Times New Roman' },
]

const configStore = useConfigStore()
const { themeColor } = storeToRefs(configStore)

const amberSwitch = ref({
  root: {
    checkedBackground: themeColor,
    checkedHoverBackground: themeColor,
  },
})
</script>

<template>
  <div class="space-y-6">
    <!-- 显示控制 -->
    <BaseCard>
      <template #header>
        <h3 class="text-lg font-medium">
          显示设置
        </h3>
      </template>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <label>显示时钟</label>
          <ToggleSwitch v-model="timeSettings.isVisible" :dt="amberSwitch" />
        </div>

        <div class="flex items-center justify-between">
          <label>显示日期</label>
          <ToggleSwitch v-model="timeSettings.showDate" :dt="amberSwitch" />
        </div>

        <div class="flex items-center justify-between">
          <label>显示星期</label>
          <ToggleSwitch v-model="timeSettings.showWeek" :dt="amberSwitch" />
        </div>

        <div class="flex items-center justify-between">
          <label>显示农历</label>
          <ToggleSwitch v-model="timeSettings.showLunar" :dt="amberSwitch" />
        </div>
      </div>
    </BaseCard>

    <!-- 时间格式 -->
    <BaseCard>
      <template #header>
        <h3 class="text-lg font-medium">
          时间格式
        </h3>
      </template>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <label>24小时制</label>
          <ToggleSwitch v-model="timeSettings.format24" :dt="amberSwitch" />
        </div>

        <div v-if="timeSettings.showDate" class="space-y-2">
          <label>日期格式</label>
          <Dropdown
            v-model="timeSettings.dateFormat"
            :options="dateFormats"
            option-label="label"
            option-value="value"
            class="w-full"
          />
        </div>
      </div>
    </BaseCard>

    <!-- 样式设置 -->
    <BaseCard>
      <template #header>
        <h3 class="text-lg font-medium">
          样式设置
        </h3>
      </template>

      <div class="space-y-4">
        <div class="space-y-2">
          <label>字体大小</label>
          <div class="flex items-center gap-4">
            <Slider v-model="timeSettings.fontSize" :min="12" :max="200" class="flex-1" />
            <InputNumber
              v-model="timeSettings.fontSize"
              :min="12"
              :max="200"
              class="w-20"
              suffix="px"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label>字体</label>
          <Dropdown
            v-model="timeSettings.fontFamily"
            :options="fontFamilies"
            option-label="label"
            option-value="value"
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <label>字重</label>
          <Slider
            v-model="timeSettings.fontWeight"
            :min="100"
            :max="900"
            :step="100"
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <label>字间距</label>
          <div class="flex items-center gap-4">
            <Slider
              v-model="timeSettings.letterSpacing"
              :min="-10"
              :max="20"
              class="flex-1"
            />
            <InputNumber
              v-model="timeSettings.letterSpacing"
              :min="-10"
              :max="20"
              class="w-20"
              suffix="px"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label>文字颜色</label>
          <ColorPicker v-model="timeSettings.color" class="w-full" />
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<style>
.p-slider {
  @apply h-2;
}

.p-slider .p-slider-handle {
  @apply h-4 w-4 border-2 border-primary bg-white;
}

.p-dropdown {
  @apply w-full;
}

.p-colorpicker {
  @apply w-full;
}

.p-button {
  @apply px-4 py-2;
}

.p-inputnumber {
  @apply w-24;
}
</style>
