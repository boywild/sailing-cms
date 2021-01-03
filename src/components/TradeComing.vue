<template>
  <div class="trade-coming">
    <ImgLazy width="302" height="201" :src="(content[0] && content[0].image) || ''"></ImgLazy>
    <div class="trade-box">
      <div class="trade-recent">
        <router-link
          target="_blank"
          :to="{ name: 'post', params: { articleId: content[0] && content[0].articleId, fromPage: '2' } }"
          class="title"
          >{{ content[0] && content[0].title }}</router-link
        >
        <div class="desc">
          {{ content[0] && content[0].introduction }}
        </div>
      </div>
      <div class="trade-other">
        <router-link
          target="_blank"
          :to="{ name: 'post', params: { articleId: item.articleId, fromPage: '2' } }"
          class="trade-o-t"
          v-for="(item, index) in content.slice(1, 4)"
          :key="index"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from './ImgLazy.vue'
export default defineComponent({
  name: 'TradeComing',
  components: { ImgLazy },
  props: {
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.trade-coming {
  @include flex(space-between);
  .trade-box {
    width: 334px;
    height: 201px;
    .trade-recent {
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .desc {
        font-size: $text-size-small;
        padding: 5px 0 12px 0;
        @include multi-overflow(5);
      }
    }
    .trade-other {
      .trade-o-t {
        line-height: 26px;
        color: $theme-blue;
        position: relative;
        padding-left: 10px;
        display: block;
        @include text-overflow();
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: $theme-blue;
        }
      }
    }
  }
}
</style>
