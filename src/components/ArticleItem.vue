<template>
  <div class="article-preview-item">
    <ImgLazy width="151" height="101" :src="content.image"></ImgLazy>
    <div class="article-preview-content">
      <router-link class="pre-title" :to="{ name: 'post', params: { articleId: content.articleId, fromPage: '2' } }">
        <div class="txt">{{ content.title }}</div>
        <div class="comment"><MessageOutlined class="icon-coment"></MessageOutlined>{{ content.comments }}</div>
      </router-link>
      <div class="pre-time">信德海事{{ content.createDate }}</div>
      <div class="pre-desc">{{ content.introduction }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MessageOutlined } from '@ant-design/icons-vue'
import ImgLazy from './ImgLazy.vue'
export default defineComponent({
  name: 'ArticleItem',
  components: { ImgLazy, MessageOutlined },
  props: {
    content: { type: Object, default: () => ({}) }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-preview-item {
  @include flex(flex-start);
  .img-box {
    margin-right: 10px;
  }
  .article-preview-content {
    height: 101px;
    flex: 1;
    overflow: hidden;
    @include flex(space-between, flex-start, column);
    .pre-title {
      width: 100%;
      @include flex(space-between);
      .txt {
        font-weight: bold;
        font-size: $text-size-big;
        @include text-overflow();
        flex: 1;
      }
      .comment {
        color: $text-light-color2;
        width: 60px;
        text-align: right;
      }
    }
    .pre-time {
      font-size: 12px;
      color: $text-light-color;
    }
    .pre-desc {
      font-size: $text-size-small;
      @include multi-overflow();
      width: 100%;
    }
  }
}
</style>
