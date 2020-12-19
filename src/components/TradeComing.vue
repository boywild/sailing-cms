<template>
  <div class="trade-coming">
    <ImgLazy :width="302" :height="201"></ImgLazy>
    <div class="trade-box">
      <div class="trade-recent">
        <router-link to="/" class="title">2020（第五届）青岛国际海...</router-link>
        <div class="desc">
          尊敬的海洋业者：青岛海洋科学与技术试点国家实验室与青岛蓝谷管理局共同邀请您参观2020（第五届）青岛国际海洋科技展览会（以下简称“展会”），展会信息如下：一、展会时间、地点时间：2020年9月22日至24日地点：青岛国际博览中...
        </div>
      </div>
      <div class="trade-other">
        <router-link to="/" class="trade-o-t">大连海事展官方小程序正式上线</router-link>
        <router-link to="/" class="trade-o-t">2020（第五届）青岛国际海洋科技展览会邀您参会！</router-link>
        <router-link to="/" class="trade-o-t">2020（第五届）青岛国际海洋科技展览会</router-link>
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
    name: { type: String, default: () => '' },
    subName: { type: String, default: () => '' }
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
      }
    }
    .trade-other {
      .trade-o-t {
        line-height: 26px;
        color: $theme-blue;
        position: relative;
        padding-left: 10px;
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
