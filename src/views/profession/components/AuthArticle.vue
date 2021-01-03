<template>
  <div class="auth-article">
    <ImgLazy v-if="thumbnail" width="80" height="105" :src="content.image"></ImgLazy>
    <div class="auth-a-content">
      <router-link target="_blank"  class="auth-a-title" :to="{ name: 'post', params: { articleId: content.articleId, fromPage: pageType } }">
        <div class="text">
          <div>{{ content.title }}</div>
        </div>
        <div class="comment"><MessageOutlined class="icon-coment"></MessageOutlined>{{ content.comments }}</div>
      </router-link>
      <div class="publish-time">{{ content.author }}{{ content.createDate }}</div>
      <div class="publish-desc">{{ content.introduction }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MessageOutlined } from '@ant-design/icons-vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Authors',
  components: { ImgLazy, MessageOutlined },
  props: {
    content: { type: Object, default: () => ({}) },
    thumbnail: { type: Boolean, default: () => true },
    pageType: { type: String, default: () => '1' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.auth-article {
  @include flex(flex-start);
  .img-box {
    margin-right: 10px;
  }

  .auth-a-content {
    height: 105px;
    font-size: $text-size-small;
    flex: 1;
    overflow: hidden;
    @include flex(space-between, flex-start, column);
    .auth-a-title {
      @include flex(space-between);
      width: 100%;
      .text {
        font-size: $text-size-big;
        font-weight: bold;
        flex: 1;
        @include text-overflow();
      }
      .comment {
        color: $text-light-color2;
        width: 70px;
        text-align: right;
      }
    }
    .publish-time {
      color: $text-light-color;
    }
    .publish-desc {
      width: 100%;
      @include multi-overflow();
    }
  }
}
</style>
