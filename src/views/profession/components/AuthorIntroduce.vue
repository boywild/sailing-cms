<template>
  <div class="author-introduce">
    <div class="author-thumbnail">
      <ImgLazy width="80" height="105"></ImgLazy>
      <div class="name">王勇</div>
    </div>
    <div class="introduce-conent">
      <div class="title">作者简介</div>
      <div class="desc">
        经济学博士，研究员。长江证券首席经济学家，曾长期供职央行货币政策部门，并任国际货币基金组织经济学家。中国经济学最高奖——孙冶方经济科学奖得主，曾获浦山政策研究奖、刘诗白经济学奖以及“远见杯”宏观经济预测季军。中国金融四十人论坛（CF40）成员、中国首席经济学家论坛理事，清华、复旦、人大等校兼职导师。
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Authors',
  components: { ImgLazy },
  props: {}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.author-introduce {
  background: #f8f8f8;
  padding: 20px 20px 5px 20px;
  @include flex(flex-start);
  .author-thumbnail {
    margin-right: 10px;
    .name {
      font-size: $text-size-small;
      font-weight: bold;
      text-align: center;
      padding: 5px 0;
    }
  }
  .introduce-conent {
    align-self: flex-start;
    .title {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 5px;
    }
    .desc {
      font-size: $text-size-small;
      color: $text-light-color2;
    }
  }
}
</style>
