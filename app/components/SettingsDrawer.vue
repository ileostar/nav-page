<script setup lang="ts">
const toolbarStore = useToolbarStore()
const { settingVisible } = storeToRefs(toolbarStore)
</script>

<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="settingVisible" :modal="false" class="relative z-[999] !w-full md:!w-80 lg:!w-[35rem]" header="Right Drawer" position="right">
      <template #container="{ closeCallback }">
        <div class="h-full w-[600px] flex flex-col">
          <div class="flex shrink-0 items-center justify-between px-6 pt-4">
            <span class="inline-flex items-center gap-2">
              <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
                <path d="..." fill="var(--p-text-color)" />
              </svg>
              <span class="text-primary text-2xl font-semibold">Your Logo</span>
            </span>
            <span>
              <Button type="button" icon="pi pi-times" outlined rounded @click="closeCallback" />
            </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="m-0 list-none p-4">
              <li>
                <div
                  v-ripple v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-slideup',
                  }"
                  class="text-surface-500 dark:text-surface-400 p-ripple flex cursor-pointer items-center justify-between p-4"
                >
                  <span class="font-medium">FAVORITES</span>
                  <i class="pi pi-chevron-down" />
                </div>
                <ul class="m-0 list-none overflow-hidden p-0">
                  <li>
                    <a
                      v-ripple
                      class="p-ripple text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-home mr-2" />
                      <span class="font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-bookmark mr-2" />
                      <span class="font-medium">Bookmarks</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple v-styleclass="{
                        selector: '@next',
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-slidedown',
                        leaveToClass: 'hidden',
                        leaveActiveClass: 'animate-slideup',
                      }"
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-chart-line mr-2" />
                      <span class="font-medium">Reports</span>
                      <i class="pi pi-chevron-down ml-auto" />
                    </a>
                    <ul
                      class="m-0 list-none overflow-hidden overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out"
                    >
                      <li>
                        <a
                          v-ripple v-styleclass="{
                            selector: '@next',
                            enterFromClass: 'hidden',
                            enterActiveClass: 'animate-slidedown',
                            leaveToClass: 'hidden',
                            leaveActiveClass: 'animate-slideup',
                          }"
                          class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                        >
                          <i class="pi pi-chart-line mr-2" />
                          <span class="font-medium">Revenue</span>
                          <i class="pi pi-chevron-down ml-auto" />
                        </a>
                        <ul
                          class="m-0 list-none overflow-hidden overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out"
                        >
                          <li>
                            <a
                              v-ripple
                              class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                            >
                              <i class="pi pi-table mr-2" />
                              <span class="font-medium">View</span>
                            </a>
                          </li>
                          <li>
                            <a
                              v-ripple
                              class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                            >
                              <i class="pi pi-search mr-2" />
                              <span class="font-medium">Search</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          v-ripple
                          class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                        >
                          <i class="pi pi-chart-line mr-2" />
                          <span class="font-medium">Expenses</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-users mr-2" />
                      <span class="font-medium">Team</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-comments mr-2" />
                      <span class="font-medium">Messages</span>
                      <span
                        class="bg-primary text-primary-contrast ml-auto inline-flex items-center justify-center rounded-full"
                        style="min-width: 1.5rem; height: 1.5rem"
                      >3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-calendar mr-2" />
                      <span class="font-medium">Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-cog mr-2" />
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="m-0 list-none p-4">
              <li>
                <div
                  v-ripple v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-slideup',
                  }"
                  class="text-surface-500 dark:text-surface-400 p-ripple flex cursor-pointer items-center justify-between p-4"
                >
                  <span class="font-medium">APPLICATION</span>
                  <i class="pi pi-chevron-down" />
                </div>
                <ul class="m-0 list-none overflow-hidden p-0">
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-folder mr-2" />
                      <span class="font-medium">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-chart-bar mr-2" />
                      <span class="font-medium">Performance</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                    >
                      <i class="pi pi-cog mr-2" />
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="border-surface-200 dark:border-surface-700 mx-4 mb-4 border-0 border-t">
            <a
              v-ripple
              class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple m-4 flex cursor-pointer items-center gap-2 rounded p-4 transition-colors duration-150"
            >
              <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
              <span class="font-bold">Amy Elsner</span>
            </a>
          </div>
        </div>
      </template>
    </Drawer>
  </div>
</template>
