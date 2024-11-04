<script setup lang="ts">
interface NavItem {
  title: string
  desc: string
  link: string
  icon?: string
}

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 mx-auto max-w-6xl gap-6 lg:grid-cols-4 md:grid-cols-2">
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.link"
      class="block rounded-lg bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-md"
    >
      <div class="flex items-center gap-4">
        <div
          v-if="item.icon"
          :class="item.icon"
          class="text-2xl text-gray-600"
        />
        <div>
          <h3 class="mb-2 text-lg font-medium">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.desc }}</p>
        </div>
      </div>
    </a>
  </div>
</template>
