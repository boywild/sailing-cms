<template>
  <div class="page-section">
    <div class="page-banner">
      <slot name="banner"></slot>
    </div>
    <div class="page-content">
      <div class="page-main">
        <slot name="content"></slot>
      </div>
      <div class="page-side">
        <slot name="side"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContent',
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
.page-section {
  .page-content {
    display: flex;
    justify-content: space-between;
    .page-main {
      width: 656px;
    }
    .page-side {
      width: 315px;
    }
  }
}
</style>
