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
    desc: '搜索栏样式',
    icon: 'i-carbon-search',
    component: SearchSettings,
  },
  {
    label: '图标',
    desc: '图标样式、间距、宽度',
    icon: 'i-carbon-apps',
    component: IconSettings,
  },
  {
    label: '时间/日期',
    desc: '时间显示内容、字体样式',
    icon: 'i-carbon-time',
    component: TimeSettings,
  },
  {
    label: '主题/壁纸',
    desc: '深色模式、主题色、壁纸样式',
    icon: 'i-carbon-paint-brush',
    component: ThemeSettings,
  },
  {
    label: '布局',
    desc: '极简模式、一言',
    icon: 'i-carbon-template',
    component: LayoutSettings,
  },
  {
    label: '侧边栏',
    desc: '侧边栏位置、是否隐藏、宽度',
    icon: 'i-carbon-side-panel-close',
    component: SidebarSettings,
  },
  {
    label: '关于',
    desc: '项目介绍、开源地址',
    icon: 'i-carbon-information',
    component: AboutSettings,
  },
  {
    label: '备份和恢复',
    desc: '数据备份和恢复',
    icon: 'i-carbon:data-backup',
    component: BackupSettings,
  },
  {
    label: '重置',
    desc: '恢复成默认设置',
    icon: 'i-carbon-reset',
    component: ResetSettings,
  },
]

const configStore = useConfigStore()
const { themeColor } = storeToRefs(configStore)
</script>

<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="settingVisible" :modal="false" class="relative z-[999] !w-full lg:!w-[38rem] md:!w-80"
      position="right"
    >
      <template #container="{ closeCallback }">
        <div class="h-full w-full flex flex-col">
          <!-- Header -->
          <div class="h-30 flex shrink-0 items-center justify-between px-6 pt-4">
            <div
              class="absolute top-0 z-50 h-12 w-12 flex cursor-pointer items-center justify-center bg-white/20 -left-12 hover:bg-black/30"
              @click="closeCallback"
            >
              <div class="i-carbon:close-large z-50 h-7 w-7 text-white transition hover:rotate-90" />
            </div>
            <div w-40 class="-mt-5">
              <Logos />
            </div>
            <div flex="~ col 1 gap1" px5>
              <div class="flex items-center gap-2 text-2xl font-medium">
                {{ sidebarItems.find(item => item.label === currentTab)?.label }}
              </div>
              <p text-sm text-gray>
                {{ sidebarItems.find(item => item.label === currentTab)?.desc }}
              </p>
            </div>
          </div>

          <!-- Content -->
          <div class="mb-2 h-full w-full flex gap-4 overflow-y-auto pl-3">
            <!-- Sidebar -->
            <ul class="w-40 flex flex-col gap-3">
              <li
                v-for="item in sidebarItems" :key="item.label"
                class="e relative h-12 flex cursor-pointer items-center gap-3 rounded-lg hover:bg-gray-400/10"
                :class="currentTab === item.label ? 'bg-gray-400/10' : ''"
                :style="{ color: currentTab === item.label ? themeColor : '' }" @click="currentTab = item.label"
              >
                <div h6 w1 rd-2 :style="{ backgroundColor: currentTab === item.label ? themeColor : '' }" />
                <div :class="item.icon" class="text-lg" />
                <span text-lg>{{ item.label }}</span>
              </li>
            </ul>

            <!-- Settings Panel -->
            <div class="flex-1 rounded-l-lg bg-gray/10 p-3">
              <component :is="sidebarItems.find(item => item.label === currentTab)?.component" />
            </div>
          </div>
        </div>
      </template>
    </Drawer>
  </div>
</template>
