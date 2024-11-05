<script setup lang="ts">
const colorMode = useColorMode()
const bgConfig = useLocalStorage('bg-config', {
  type: 'color',
  value: '#f5f5f5',
  blur: 0,
  opacity: 1,
  darkValue: '#1a1a1a',
})

async function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file)
    return

  try {
    const reader = new FileReader()
    reader.onload = (e) => {
      bgConfig.value.type = 'image'
      bgConfig.value.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
  catch (error) {
    console.error('图片上传失败:', error)
  }
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium">
      主题设置
    </h3>
    <div class="space-y-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">主题模式</label>
        <div class="flex gap-4">
          <button
            class="flex-1 rounded-lg p-2 transition-colors"
            :class="colorMode.value === 'light' ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'"
            @click="colorMode.preference = 'light'"
          >
            浅色
          </button>
          <button
            class="flex-1 rounded-lg p-2 transition-colors"
            :class="colorMode.value === 'dark' ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'"
            @click="colorMode.preference = 'dark'"
          >
            深色
          </button>
        </div>
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium">背景类型</label>
        <select v-model="bgConfig.type" class="w-full border rounded-lg p-2">
          <option value="color">
            纯色
          </option>
          <option value="image">
            图片
          </option>
          <option value="gradient">
            渐变
          </option>
        </select>
      </div>

      <template v-if="bgConfig.type === 'color'">
        <div class="space-y-2">
          <label class="text-sm font-medium">背景颜色</label>
          <div class="flex gap-2">
            <input v-model="bgConfig.value" type="color" class="h-8 w-full">
            <input v-model="bgConfig.darkValue" type="color" class="h-8 w-full">
          </div>
        </div>
      </template>

      <template v-else-if="bgConfig.type === 'image'">
        <div class="space-y-2">
          <label class="text-sm font-medium">背景图片</label>
          <input type="file" accept="image/*" class="w-full text-sm" @change="handleImageUpload">
        </div>
      </template>

      <template v-else-if="bgConfig.type === 'gradient'">
        <div class="space-y-2">
          <label class="text-sm font-medium">渐变代码</label>
          <input v-model="bgConfig.value" type="text" class="w-full border rounded-lg p-2" placeholder="linear-gradient(...)">
        </div>
      </template>

      <div class="space-y-2">
        <label class="text-sm font-medium">模糊度</label>
        <input v-model="bgConfig.blur" type="range" min="0" max="20" class="w-full">
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium">不透明度</label>
        <input v-model="bgConfig.opacity" type="range" min="0" max="1" step="0.1" class="w-full">
      </div>
    </div>
  </div>
</template>
