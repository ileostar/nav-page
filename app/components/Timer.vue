<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const time = ref(new Date())
const isExpanded = ref(true)

onMounted(() => {
  setInterval(() => {
    time.value = new Date()
  }, 1000)
})

const formattedTime = computed(() => {
  return new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(time.value)
})

function toggleExpand() {
  isExpanded.value = !isExpanded.value
  emit('update:modelValue', isExpanded.value)
}
</script>

<template>
  <div class="relative flex flex-col items-center z-10">
    <time
      class="block cursor-pointer select-none text-9xl font-bold tracking-tighter transition-transform duration-300 hover:opacity-80"
      :datetime="time.toISOString()"
      @click="toggleExpand"
    >
      {{ formattedTime }}
    </time>
    <SearchBox />
  </div>
</template>
