<template>
  <div class="article-today">
    <Title2 class="mgb10" before="国际" after="风云"></Title2>
    <div class="article-today-content">
      <div class="today-list">
        <div class="feature-msg" v-for="(item, index) in content" :key="index">
          <div class="num">{{ index + 1 }}</div>
          <router-link class="title" :to="{ name: 'post', params: { articleId: item.articleId, fromePage: pageType } }">{{
            item.title
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'

export default defineComponent({
  name: 'ArticleToday',
  components: {
    Title2
  },
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' },
    content: { type: Array, default: () => [] },
    pageType: { type: String, default: () => '1' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-today {
  .article-today-content {
    .today-list {
      .feature-msg {
        line-height: normal;
        padding: 12px 0;
        // font-weight: bold;
        @include flex(flex-start);
        border-top: 1px dashed #d5d5d5;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          .num {
            color: $theme-red;
          }
        }
        &:first-child {
          border: none;
        }
        .num {
          font-size: 18px;
          color: $text-light-color;
          font-weight: bold;
          margin-right: 10px;
        }
        .title {
          @include text-overflow();
        }
      }
    }
  }
}
</style>
