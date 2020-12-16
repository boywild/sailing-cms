<template>
  <div class="article-title">
    <div class="zh-name">{{name}}</div>
    <div class="en-name">{{subName}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Img',
  props: {
    name: {
      type: String,
      default: () => ''
    },
    subName: {
      type: String,
      default: () => ''
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-title {
  @include flex(flex-start);
  border-top: 2px solid #666666;
  position: relative;
  padding: 7px 0 0 0;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2px;
    width: 114px;
    height: 5px;
    background: $theme-red;
    z-index: 3;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -2px;
    left: 109px;
    border-width: 5px 5px 0 0;
    border-style: solid;
    border-color: $theme-red #fff transparent transparent;
    z-index: 4;
  }
  .zh-name {
    font-size: $text-size-big;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 25px;
    color: $theme-blue;
  }
  .en-name {
    font-size: $text-size-small;
    color: #acacac;
    text-transform: uppercase;
    margin-left: 15px;
  }
}
</style>
