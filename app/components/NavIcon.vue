<script setup lang="ts">
import type { NavItem } from '~/types/nav'

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <div v-for="item in items" :key="item.title" :item="item">
      <a :href="item.link"
        class="flex flex-col items-center gap-2 rounded-lg p-4 transition-all duration-200 hover:bg-white/10 hover:shadow-lg">
        <div class="text-3xl text-gray-600 dark:text-gray-300" :class="[item.icon]" />
        <span class="text-sm text-gray-700 dark:text-gray-200">{{ item.title }}</span>
      </a>
    </div>
</template>
