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
    <div class="page-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContent',
  props: {}
})
</script>

<style lang="scss">
.page-section {
  .page-content {
    @include flex(space-between);
    .page-main {
      width: 656px;
      align-self: flex-start;
    }
    .page-side {
      width: 315px;
      align-self: flex-start;
    }
  }
}
</style>
