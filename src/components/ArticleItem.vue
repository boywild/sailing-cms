<template>
  <div class="article-preview-item">
    <ImgLazy width="151" height="101"></ImgLazy>
    <div class="article-preview-content">
      <div class="pre-title">
        <div class="txt">{{ content.title }}</div>
        <div class="comment">2</div>
      </div>
      <div class="pre-time">{{ content.from }}{{ content.time }}</div>
      <div class="pre-desc">{{ content.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from './ImgLazy.vue'
export default defineComponent({
  name: 'ArticleItem',
  components: { ImgLazy },
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
