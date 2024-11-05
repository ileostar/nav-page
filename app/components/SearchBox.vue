<script setup lang="ts">
interface SearchEngine {
  name: string
  url: string
  icon: string
}

const searchEngines: SearchEngine[] = [
  { name: '百度', url: 'https://www.baidu.com/s?wd=', icon: 'i-bxl:baidu' },
  { name: '谷歌', url: 'https://www.google.com/search?q=', icon: 'i-carbon-logo-google' },
  { name: 'Bing', url: 'https://www.bing.com/search?q=', icon: 'i-bxl:bing' },
  { name: 'GitHub', url: 'https://github.com/search?q=', icon: 'i-carbon-logo-github' },
]

const currentEngine = ref<SearchEngine>(searchEngines[0]!)
const showEngineList = ref(false)
const keyword = ref('')

function handleSearch() {
  if (!keyword.value.trim())
    return

  const searchUrl = currentEngine.value.url + encodeURIComponent(keyword.value)
  window.open(searchUrl, '_blank')
}

function selectEngine(engine: SearchEngine) {
  currentEngine.value = engine
  showEngineList.value = false
}

// 按下回车时搜索
function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter')
    handleSearch()
}
</script>

<template>
  <!---添加磨砂玻璃效果 -->
  <div class="bg-blur-sm relative z-[999] mx-auto mb-12 mt-8 max-w-4xl w-3xl px-4">
    <div class="relative">
      <div class="relative flex rounded-full bg-white/80 shadow-md backdrop-blur-md backdrop-saturate-150">
        <!-- 搜索引擎选择器 -->
        <div class="relative rd-10 bg-white/90 backdrop-blur-sm">
          <button
            class="h-12 flex items-center gap-2 rounded-l-full px-4 transition-colors hover:bg-gray-100/80"
            @click="showEngineList = !showEngineList"
          >
            <div :class="currentEngine.icon" class="text-xl" />
            <span class="text-sm">{{ currentEngine.name }}</span>
            <div class="i-carbon-chevron-down text-sm" />
          </button>

          <!-- 搜索引擎下拉列表 -->
          <div
            v-show="showEngineList"
            class="absolute left-0 top-full z-50 mt-2 w-32 rounded-lg bg-white/90 py-2 shadow-lg backdrop-blur-md"
          >
            <button
              v-for="engine in searchEngines"
              :key="engine.name"
              class="w-full flex items-center gap-2 px-4 py-2 text-left transition-colors hover:bg-gray-100/80"
              @click="selectEngine(engine)"
            >
              <div :class="engine.icon" class="text-xl" />
              <span class="text-sm">{{ engine.name }}</span>
            </button>
          </div>
        </div>

        <!-- 搜索输入框 -->
        <input
          v-model="keyword"
          type="text"
          class="h-12 flex-1 bg-transparent px-4 outline-none placeholder:text-gray-500"
          placeholder="输入关键词搜索..."
          @keydown="handleKeydown"
        >

        <!-- 搜索按钮 -->
        <button
          class="h-12 flex items-center gap-2 rounded-r-full px-6 transition-colors hover:bg-gray-100/80"
          @click="handleSearch"
        >
          <span class="text-sm">搜索</span>
          <div class="i-carbon-search text-xl" />
        </button>
      </div>
    </div>
  </div>
</template>
