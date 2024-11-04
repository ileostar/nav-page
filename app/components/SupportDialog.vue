<script setup lang="ts">
import Dialog from 'primevue/dialog'

const toolbarStore = useToolbarStore()
const { supportVisible: visible } = storeToRefs(toolbarStore)
</script>

<template>
  <Dialog
    v-model:visible="visible" modal header="Edit Profile" bg-black :style="{
      width: '25rem',
    }"
  >
    <span class="text-surface-500 dark:text-surface-400 mb-8 block">Update your information.</span>
    <div class="mb-4 flex items-center gap-4">
      <label for="username" class="w-24 font-semibold">Username</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="mb-8 flex items-center gap-4">
      <label for="email" class="w-24 font-semibold">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false" />
      <Button type="button" label="Save" @click="visible = false" />
    </div>
  </Dialog>
</template>
