<template>
  <div class="article-title2">
    <div class="title-bar">
      <div class="mark"></div>
      <div class="name-before">{{ before }}</div>
      <div class="name-after">{{ after }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title2',
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-title2 {
  @include flex(space-between);
  position: relative;
  font-size: $text-size-big;
  .title-bar {
    @include flex(space-between);
    font-weight: bold;
    line-height: normal;
  }
  .mark {
    position: relative;
    width: 4px;
    height: 20px;
    margin-right: 10px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background: #6bbfcf;
      height: 10px;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10px;
      background: #de6560;
    }
  }
  .name-after {
    color: $theme-red;
  }
}
</style>
