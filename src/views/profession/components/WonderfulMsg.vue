<template>
  <div class="wonderful-msg">
    <div class="wonderful-big">
      <ImgLazy width="346" height="274" :src="content[0] && content[0].image"></ImgLazy>
      <div class="wonderful-b-content">
        <router-link target="_blank"  :to="{ name: 'post', params: { articleId: content[0] && content[0].articleId, fromPage: '5' } }" class="title">{{
          content[0] && content[0].title
        }}</router-link>
        <div class="desc">
          {{ content[0] && content[0].introduction }}
        </div>
      </div>
    </div>
    <div class="wonderful-middle">
      <div class="wonderful-m-item">
        <ImgLazy width="290" height="101" :src="content[1] && content[1].image"></ImgLazy>
        <div class="wonderful-m-content">
          <router-link target="_blank"  :to="{ name: 'post', params: { articleId: content[1] && content[1].articleId, fromPage: '5' } }" class="title">{{
            content[1] && content[1].title
          }}</router-link>
          <div class="desc">{{ content[1] && content[1].introduction }}</div>
        </div>
      </div>
      <div class="wonderful-m-item" v-if="content[2]">
        <ImgLazy width="290" height="101" :src="content[2] && content[2].image"></ImgLazy>
        <div class="wonderful-m-content">
          <router-link target="_blank"  :to="{ name: 'post', params: { articleId: content[2] && content[2].articleId, fromPage: '5' } }" class="title">{{
            content[2] && content[2].title
          }}</router-link>
          <div class="desc">{{ content[2] && content[2].introduction }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'WonderfulMsg',
  components: { ImgLazy },
  props: {
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' },
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wonderful-msg {
  @include flex(space-between, flex-start);
  font-size: $text-size-small;
  .wonderful-big {
    width: 346px;
    .wonderful-b-content {
      .title {
        font-size: 24px;
        font-weight: bold;
        padding: 10px 0;
        @include text-overflow();
      }
      .desc {
        @include multi-overflow(6);
      }
    }
  }
  .wonderful-middle {
    width: 290px;
    .wonderful-m-item {
      &:nth-child(1) {
        margin-bottom: 30px;
      }
      .wonderful-m-content {
        .title {
          font-size: $text-size-big;
          font-weight: bold;
          padding: 10px 0;
        }
        .desc {
          @include multi-overflow(3);
        }
      }
    }
  }
}
</style>
