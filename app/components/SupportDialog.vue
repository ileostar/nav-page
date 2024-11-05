<script setup lang="ts">
import Dialog from 'primevue/dialog'

const toolbarStore = useToolbarStore()
const { supportVisible: visible } = storeToRefs(toolbarStore)
</script>

<template>
  <Dialog
    v-model:visible="visible" modal header="支持一下" bg-black :style="{
      width: '25rem',
    }"
  >
    <Image src="https://blog.leostar.top/upload/wechatpay.png"></Image>
  </Dialog>
</template>
