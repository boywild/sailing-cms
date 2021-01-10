<template>
  <div class="reading-top">
    <Title2 :before="before" :after="after"></Title2>
    <div class="reading-list">
      <div class="reading-title" v-for="(item, index) in content" :key="index">
        <router-link class="title-box" target="_blank" :to="{ name: 'post', params: { articleId: item.articleId, fromPage: pageType } }">
          <span class="num">{{ index + 1 }}</span>
          <span class="content">{{ item.title }}</span>
        </router-link>
      </div>
      <a-empty v-if="!content.length" description="暂无数据" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
export default defineComponent({
  name: 'ReadingTop',
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
.reading-list {
  .reading-title {
    line-height: 30px;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      .num {
        color: #ff0002;
      }
    }
    .num {
      font-size: $text-size-big;
      font-weight: bold;
      color: #a5a5a5;
      margin-right: 10px;
    }
    .content {
      @include text-overflow();
      flex: 1;
    }
    .title-box {
      display: block;
      @include flex(flex-start);
    }
  }
}
</style>
