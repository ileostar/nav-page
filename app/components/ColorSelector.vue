<template>
  <div>
    <p>颜色</p>
    <ColorPicker v-model="color"/>
  </div>
</template>

<script lang="ts" setup>
const color = defineModel()
</script>

<style>

</style>
