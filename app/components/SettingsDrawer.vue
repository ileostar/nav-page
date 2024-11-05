<script setup lang="ts">
import AboutSettings from './settings/AboutSettings.vue'
import BackupSettings from './settings/BackupSettings.vue'
import IconSettings from './settings/IconSettings.vue'
import LayoutSettings from './settings/LayoutSettings.vue'
import ResetSettings from './settings/ResetSettings.vue'
import SearchSettings from './settings/SearchSettings.vue'
import SidebarSettings from './settings/SidebarSettings.vue'
import ThemeSettings from './settings/ThemeSettings.vue'
import TimeSettings from './settings/TimeSettings.vue'

const toolbarStore = useToolbarStore()
const { settingVisible } = storeToRefs(toolbarStore)
const currentTab = ref('搜索栏')

const sidebarItems = [
  {
    label: '搜索栏',
    icon: 'i-carbon-search',
    component: SearchSettings,
  },
  {
    label: '图标',
    icon: 'i-carbon-apps',
    component: IconSettings,
  },
  {
    label: '时间/日期',
    icon: 'i-carbon-time',
    component: TimeSettings,
  },
  {
    label: '主题/壁纸',
    icon: 'i-carbon-paint-brush',
    component: ThemeSettings,
  },
  {
    label: '布局',
    icon: 'i-carbon-template',
    component: LayoutSettings,
  },
  {
    label: '侧边栏',
    icon: 'i-carbon-side-panel-close',
    component: SidebarSettings,
  },
  {
    label: '关于',
    icon: 'i-carbon-information',
    component: AboutSettings,
  },
  {
    label: '备份和恢复',
    icon: 'i-carbon:data-backup',
    component: BackupSettings,
  },
  {
    label: '重置',
    icon: 'i-carbon-reset',
    component: ResetSettings,
  },
]

const themeColor = ref('#3498db')
</script>

<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="settingVisible"
      :modal="false"
      class="relative z-[999] !w-full lg:!w-[38rem] md:!w-80"
      position="right"
    >
      <template #container="{ closeCallback }">
        <div class="h-full w-full flex flex-col">
          <!-- Header -->
          <div class="h-30 flex shrink-0 items-center justify-between px-6 pt-4">
            <Logos />
            <div class="flex items-center gap-2">
              {{ sidebarItems.find(item => item.label === currentTab)?.label }}
            </div>
          </div>

          <!-- Content -->
          <div class="mb-2 h-full w-full flex gap-4 overflow-y-auto pl-3">
            <!-- Sidebar -->
            <ul class="w-40 flex flex-col gap-3">
              <li
                v-for="item in sidebarItems"
                :key="item.label"
                class="h-12 flex cursor-pointer items-center gap-3 rounded-lg px-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                :class="currentTab === item.label ? 'bg-gray-100 dark:bg-gray-800' : ''"
                @click="currentTab = item.label"
              >
                <div :class="item.icon" class="text-xl" />
                <span>{{ item.label }}</span>
              </li>
            </ul>

            <!-- Settings Panel -->
            <div class="flex-1 rounded-l-lg bg-white/50 p-4 dark:bg-gray-800/50">
              <component
                :is="sidebarItems.find(item => item.label === currentTab)?.component"
              />
            </div>
          </div>
        </div>
      </template>
    </Drawer>
  </div>
</template>
