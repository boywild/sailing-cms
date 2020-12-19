<template>
  <div class="focusing-news">
    <div class="focusing-text">
      <Title2 class="mgb10" before="聚焦" after="热点"></Title2>
      <div class="news-body">
        <div class="news-title"><router-link to="/">船长干货大型船舶靠港时需注意的方方面面</router-link></div>
        <div class="news-publish-time">王勇 06月28日 11:28</div>
        <div class="news-desc">
          船舶经过了长途跋涉之后终于进入了“幸福的港湾”，当船舶带上第一根缆子起，在船员的概念中就算安全抵达彼岸了，船舶平稳地伏卧在码头泊位上后一切都归于了相对平静的状态。在没有外部条件重大变化下，船员松弛了航行高度警惕心理状态，消除了风浪和摇摆的海面气象变化的威胁，没有了避碰他船高度神经紧张，船员的心态之...
        </div>
      </div>
    </div>
    <ImgLazy width="122" height="167"></ImgLazy>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from '@/components/Title2.vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Focusing',
  components: { ImgLazy, Title2 },
  props: {
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.focusing-news {
  background: #f8f8f8;
  padding: 10px 0;
  @include flex(space-between);
  .focusing-text {
    flex: 1;
    overflow: hidden;
    font-size: $text-size-small;
  }
  .news-body {
    padding: 0 15px;

    .news-title {
      font-size: $text-size-big;
      font-weight: bold;
      width: 100%;
      @include text-overflow();
    }
    .news-publish-time {
      color: #858585;
      padding: 5px 0 10px 0;
    }
    .news-desc {
      line-height: 20px;
      @include multi-overflow(4);
    }
  }
}
</style>
