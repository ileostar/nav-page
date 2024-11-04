<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

interface NavItem {
  title: string
  desc: string
  link: string
  icon?: string
}

const navItems: NavItem[] = [
  {
    title: '我的博客',
    desc: '个人技术博客',
    link: 'https://blog.example.com',
    icon: 'i-carbon-blog',
  },
  {
    title: 'GitHub',
    desc: '开源项目代码库',
    link: 'https://github.com/yourusername',
    icon: 'i-carbon-logo-github',
  },
  {
    title: '笔记',
    desc: '个人知识库',
    link: '/notes',
    icon: 'i-carbon-notebook',
  },
  {
    title: '项目展示',
    desc: '个人作品集',
    link: '/projects',
    icon: 'i-carbon-portfolio',
  },
]

const isExpanded = ref(true)
</script>

<template>
  <div
    :class="`relative py-15  w-full flex flex-col items-center justify-center h-screen overflow-hidden ${isExpanded ? '' : 'pb-90'}`">
    <Timer v-model="isExpanded" />

    <Transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-8 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-8 opacity-0">
      <div v-show="isExpanded" class="flex-1 w-full">
        <div class="grid grid-cols-1 mx-auto max-w-6xl gap-6 lg:grid-cols-4 md:grid-cols-2">
          <a v-for="item in navItems" :key="item.title" :href="item.link"
            class="block rounded-lg bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-md">
            <div class="flex items-center gap-4">
              <div v-if="item.icon" :class="item.icon" class="text-2xl text-gray-600" />
              <div>
                <h3 class="mb-2 text-lg font-medium">{{ item.title }}</h3>
                <p class="text-sm text-gray-500">{{ item.desc }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Transition>

    <DailyQuote />
    <ToolBars />
    <SettingsDrawer />
    <SupportDialog />
  </div>
</template>

<style>
html,
body {
  overflow: hidden;
}
</style>
