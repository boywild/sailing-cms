<template>
  <div class="auth-article">
    <ImgLazy v-if="thumbnail" width="80" height="105"></ImgLazy>
    <div class="auth-a-content">
      <div class="auth-a-title">
        <div class="text">
          <router-link to="/">{{ content.title }}</router-link>
        </div>
        <div class="comment">1</div>
      </div>
      <div class="publish-time">{{ content.from }}{{ content.time }}</div>
      <div class="publish-desc">{{ content.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Authors',
  components: { ImgLazy },
  props: {
    content: { type: Object, default: () => ({}) },
    thumbnail: { type: Boolean, default: () => true }
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
