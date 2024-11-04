<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const navItems = [
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
    :class="`relative py-15 w-full flex flex-col items-center justify-center h-screen overflow-hidden ${
      isExpanded ? '' : 'pb-90'
    }`"
  >
    <Timer v-model="isExpanded" />

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-8 opacity-0"
    >
      <div v-show="isExpanded" class="w-full flex-1">
        <NavCards :items="navItems" />
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
