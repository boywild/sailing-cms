<template>
  <div class="authors-box">
    <Title2 class="mgb20" before="推荐" after="作者"></Title2>
    <div class="authors-list">
      <div class="author" v-for="(item, index) in content" :key="index">
        <ImgLazy width="80" height="105"></ImgLazy>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from '@/components/Title2.vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Authors',
  components: { ImgLazy, Title2 },
  props: {
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.authors-list {
  @include flex(space-between);
  flex-wrap: wrap;
  .author {
    width: 80px;
    margin-bottom: 25px;
    position: relative;
    .img-box {
      position: relative;
    }
    .name {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 26px;
      @include flex();
      width: 100%;
      font-size: $text-size-small;
      background: rgba($color: #000000, $alpha: 0.5);
      color: #fff;
    }
  }
}
</style>
