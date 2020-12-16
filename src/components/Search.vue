<template>
  <div class="search-article">
    <input class="search-input" type="text" placeholder="请输入关键词查询" />
    <div class="search-btn">搜索</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface CardProps {
  width?: string
  height?: string
  src?: string
}
export default defineComponent({
  name: 'Search',
  props: {}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-article {
  border: 1px solid #707070;
  @include flex(space-between);
  height: 40px;
  padding-left: 10px;
  .search-input {
    border: none;
    outline: none;

    font-size: 14px;
    flex: 1;
  }
  .search-btn {
    width: 76px;
    height: 40px;
    background: $theme-blue;
    color: #fff;
    @include flex();
    cursor: pointer;
  }
}
</style>
