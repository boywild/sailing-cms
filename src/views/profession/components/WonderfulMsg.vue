<template>
  <div class="wonderful-msg">
    <div class="wonderful-big">
      <ImgLazy width="346" height="274"></ImgLazy>
      <div class="wonderful-b-content">
        <div class="title">信德航运精彩回顾（6.22-6.28）</div>
        <div class="desc">
          中海石油气电集团有限责任公司近日与壳牌东方贸易公司签署采购两船碳中和液化天然气（LNG）资源购销协议，首次为中国大陆引进碳中和LNG资源。为使国内更多的天然气用户有机会使用碳中和LNG，中国海油将于近期在上海石油天然气交易中心进行公开线上竞拍。
        </div>
      </div>
    </div>
    <div class="wonderful-middle">
      <div class="wonderful-m-item">
        <ImgLazy width="290" height="101"></ImgLazy>
        <div class="wonderful-m-content">
          <div class="title">通用报警系统的配备要求</div>
          <div class="desc">港口会回归繁忙 航线会重返有序 货舱里的各色集装箱和道路上飞驰的集卡车 都会一如往常 假如你是...</div>
        </div>
      </div>
      <div class="wonderful-m-item">
        <ImgLazy width="290" height="101"></ImgLazy>
        <div class="wonderful-m-content">
          <div class="title">通用报警系统的配备要求</div>
          <div class="desc">港口会回归繁忙 航线会重返有序 货舱里的各色集装箱和道路上飞驰的集卡车 都会一如往常 假如你是...</div>
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
    after: { type: String, default: () => '' }
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
      }
      .desc {
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
        }
      }
    }
  }
}
</style>
