<template>
  <div class="article-preview-list">
    <ArticleItem v-for="(item, index) in list" :key="index" :content="item" :page-type="pageType"></ArticleItem>
    <a-empty v-if="!list.length" description="暂无数据" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleItem from './ArticleItem.vue'
export default defineComponent({
  name: 'ArticleList',
  components: { ArticleItem },
  props: {
    list: { type: Array, default: () => [] },
    pageType: { type: String, default: () => '' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-preview-list {
  .article-preview-item {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
