<template>
  <div class="page-section">
    <div class="page-banner">
      <slot name="banner"></slot>
    </div>
    <div class="page-content">
      <slot name="content"></slot>
    </div>
    <div class="page-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContentThrough',
  props: {}
})
</script>

<style scoped lang="scss"></style>
