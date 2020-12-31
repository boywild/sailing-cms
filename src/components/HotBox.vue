<template>
  <div class="article-hot">
    <Title2 class="mgb10" :before="before" :after="after"></Title2>
    <div class="article-hot-content">
      <div class="hot-main">
        <PreviewArticle v-for="(item, index) in main" :key="index" :content="item"></PreviewArticle>
      </div>
      <div class="hot-list">
        <div class="hot-title" v-for="(item, index) in list" :key="index">
          <router-link :to="{ name: 'post', params: { articleId: item.articleId, fromPage: pageType } }">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
import PreviewArticle from './PreviewArticle.vue'

export default defineComponent({
  name: 'HotBox',
  components: {
    Title2,
    PreviewArticle
  },
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' },
    main: { type: Array, default: () => [] },
    list: { type: Array, default: () => [] },
    pageType: { type: String, default: () => '1' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-hot {
  .article-hot-content {
    .hot-main {
      @include flex(space-between);
      padding: 0 0 10px 0;
    }
    .hot-list {
      font-size: $text-size-normal;
      .hot-title {
        position: relative;
        line-height: normal;
        padding: 5px 0 5px 15px;
        @include text-overflow();
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #9a9a9a;
        }
      }
    }
  }
}
</style>
