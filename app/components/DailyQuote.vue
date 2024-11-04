<script setup lang="ts">
interface Quote {
  hitokoto: string
  from: string
  from_who: string | null
}

const quote = ref<Quote | null>(null)
const loading = ref(true)
const error = ref(false)

async function fetchQuote() {
  try {
    loading.value = true
    error.value = false
    const response = await fetch('https://v1.hitokoto.cn')
    quote.value = await response.json()
  }
  catch (e) {
    error.value = true
    console.error('获取每日一言失败:', e)
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchQuote()
})
</script>

<template>
  <div class="fixed bottom-1 left-0 right-0 text-center">
    <div
      class="mx-auto max-w-2xl rounded-lg bg-white/50 p-6 backdrop-blur transition-all dark:bg-dark-800/50 hover:bg-white/60 dark:hover:bg-dark-800/60"
    >
      <div v-if="loading" class="animate-pulse">
        <div class="mb-4 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
        <div class="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      <div v-else-if="error" class="text-red-500">
        获取每日一言失败，请稍后重试
        <button
          class="ml-2 text-sm text-blue-500 hover:text-blue-600"
          @click="fetchQuote"
        >
          重试
        </button>
      </div>

      <template v-else>
        <p class="mb-4 text-lg font-medium italic">
          {{ quote?.hitokoto }}
        </p>
        <p class="text-sm text-gray-500">
          ——
          {{ quote?.from_who ? `${quote.from_who}「${quote.from}」` : quote?.from }}
        </p>
      </template>
    </div>
  </div>
</template>
