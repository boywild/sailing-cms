<template>
  <router-link class="preview-article" to="/">
    <ImgLazy height="95"></ImgLazy>
    <div class="article-short-content">{{ content.title }}</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from './ImgLazy.vue'
export default defineComponent({
  name: 'PreviewArticle',
  components: { ImgLazy },
  props: {
    content: { type: Object, default: () => ({}) }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preview-article {
  width: 145px;
  .article-short-content {
    line-height: 26px;
    padding-left: 5px;
    background: #f6f7f8;
    font-size: $text-size-small;
    @include text-overflow();
  }
}
</style>
