<template>
  <div class="article-hot">
    <Title2 class="mgb10" :before="before" :after="after"></Title2>
    <div class="article-hot-content">
      <div class="hot-main">
        <router-link class="preview-article" to="/" v-for="(item, index) in main" :key="index">
          <ImgLazy height="95"></ImgLazy>
          <div class="article-short-content">{{ item.title }}</div>
        </router-link>
      </div>
      <div class="hot-list">
        <div class="hot-title" v-for="(item, index) in list" :key="index">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
import ImgLazy from './ImgLazy.vue'

export default defineComponent({
  name: 'HotBox',
  components: {
    Title2,
    ImgLazy
  },
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' },
    main: { type: Array, default: () => [] },
    list: { type: Array, default: () => [] }
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
