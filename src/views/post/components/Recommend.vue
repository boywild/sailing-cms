<template>
  <div class="article-recommend">
    <Title class="mgb20" name="相关推荐"></Title>
    <div class="recommend-list">
      <div class="recommend-item">
        <ImgLazy width="151" height="101"></ImgLazy>
        <div class="recommend-body">
          <div class="r-title">
            <div class="r-txt">世界最大船用双燃料发动机全球发布</div>
            <div class="r-comment">2</div>
          </div>
          <div class="r-desc">由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布...</div>
          <div class="r-time">信德海事 2020-05-27 15:33</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '@/components/Title.vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Recommend',
  components: { Title, ImgLazy },
  props: {
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-recommend {
}
.recommend-list {
  .recommend-item {
    @include flex(flex-start);
    height: 101px;
    .recommend-body {
      margin-left: 10px;
      height: 100%;
      flex: 1;
      overflow: hidden;
      @include flex(space-between, flex-start, column);
      .r-title {
        @include flex(space-between);
        width: 100%;
        .r-txt {
          font-size: $text-size-big;
          font-weight: bold;
          line-height: normal;
          flex: 1;
          @include text-overflow();
        }
        .r-comment {
          color: $text-light-color2;
        }
      }
      .r-desc {
        line-height: normal;
        font-size: $text-size-small;
        @include multi-overflow();
      }
      .r-time {
        color: $text-light-color2;
        font-size: $text-size-small;
      }
    }
  }
}
</style>
