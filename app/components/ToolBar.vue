<script setup lang="ts">
const isHovered = ref(false)
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const tools = [
  {
    icon: color.value === 'dark' ? 'i-carbon-light' : 'i-carbon-moon',
    label: '主题切换',
    action: toggleDark,
  },
  {
    icon: 'i-carbon-settings',
    label: '设置',
    action: () => { /* 实现设置逻辑 */ },
  },
  {
    icon: 'i-carbon-user-avatar',
    label: '个人信息',
    action: () => { /* 实现个人信息逻辑 */ },
  },
]
</script>

<template>
  <div
    class="fixed bottom-24 right-0 z-50"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="flex rounded-l-xl bg-white/90 shadow-lg backdrop-blur transition-all duration-300"
      :class="isHovered ? 'pr-3 pl-2' : 'px-2'"
    >
      <!-- 工具列表 -->
      <div class="flex flex-col gap-4 py-2">
        <button
          v-for="tool in tools"
          :key="tool.label"
          class="group relative h-10 flex items-center gap-2 rounded-lg text-gray-600 transition-all duration-300"
          :class="isHovered ? 'w-32 hover:bg-gray-100 px-2' : 'w-10 justify-center'"
          @click="tool.action"
        >
          <div :class="tool.icon" class="shrink-0 text-xl" />
          <span
            class="truncate text-sm transition-all duration-300"
            :class="isHovered ? 'opacity-100' : 'opacity-0 w-0'"
          >
            {{ tool.label }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
