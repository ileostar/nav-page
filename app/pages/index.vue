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
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 py-8">
    <div class="mb-12 text-center">
      <div class="mb-4 text-gray-500">
        {{ $dayjs().format('HH:mm:ss') }}
      </div>
      <h1 class="mb-4 text-4xl font-bold">
        个人导航
      </h1>
      <p class="text-gray-500">
        欢迎访问我的个人空间
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
      <a
        v-for="item in navItems"
        :key="item.title"
        :href="item.link"
        class="block rounded-lg bg-white p-6 shadow-sm transition-colors duration-200 hover:bg-gray-50"
      >
        <div class="flex items-center gap-4">
          <div v-if="item.icon" :class="item.icon" class="text-2xl text-gray-600" />
          <div>
            <h3 class="mb-2 text-lg font-medium">{{ item.title }}</h3>
            <p class="text-sm text-gray-500">{{ item.desc }}</p>
          </div>
        </div>
      </a>
    </div>

    <ToolBar />
  </main>
</template>
