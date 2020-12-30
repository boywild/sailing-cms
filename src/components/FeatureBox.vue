<template>
  <div class="article-feature">
    <Title2 class="mgb10" :before="before" :after="after"></Title2>
    <div class="article-feature-content">
      <router-link
        class="feature-list"
        :to="{ name: 'post', params: { articleId: item.articleId } }"
        v-for="(item, index) in content"
        :key="index"
      >
        <ImgLazy width="113" height="95"></ImgLazy>
        <div class="feature-msg">
          <div class="title">{{ item.title }}</div>
          <div class="from">来源：信德海事</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
import ImgLazy from './ImgLazy.vue'

export default defineComponent({
  name: 'FeatureBox',
  components: {
    Title2,
    ImgLazy
  },
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' },
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-feature {
  .article-feature-content {
    .feature-list {
      height: 95px;
      @include flex(flex-start);
      margin-bottom: 12px;
      .feature-msg {
        padding: 5px 0;
        flex: 1;
        height: 100%;
        @include flex(space-between, flex-start, column);
        .title {
          font-weight: bold;
          line-height: normal;
          @include multi-overflow();
        }
        .from {
          color: $text-light-color;
          font-size: $text-size-small;
        }
      }
      .img-box {
        margin-right: 10px;
      }
    }
  }
}
</style>
