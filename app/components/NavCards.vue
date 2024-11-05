<script setup lang="ts">
import type { NavItem } from '~/types/nav'

withDefaults(defineProps<{
  items: NavItem[]
  display?: 'card' | 'icon'
  columns?: number
}>(), {
  display: 'card',
  columns: 4,
})
</script>

<template>
  <a v-for="item in items" :key="item.title" :href="item.link"
    class="block rounded-lg bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-md dark:bg-dark-800/80 dark:hover:bg-dark-800">
    <div class="flex items-center gap-4">
      <div v-if="item.icon" :class="item.icon" class="text-2xl text-gray-600 dark:text-gray-300" />
      <div>
        <h3 class="mb-2 text-lg font-medium">{{ item.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </a>
</template>
