<template>
  <div class="imglib-column">
    <router-link
      target="_blank"
      :to="{ name: 'imagePreview', params: { articleId: item.articleId } }"
      class="img-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <ImgLazy width="181" height="124" :src="item.image"></ImgLazy>
      <div class="img-desc">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from '@/components/ImgLazy.vue'

export default defineComponent({
  name: 'ImglibColumn',
  components: { ImgLazy },
  props: {
    list: { type: Array, default: () => [] }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.imglib-column {
  @include flex(space-between);
  flex-wrap: wrap;
  padding: 0 30px;
  .img-item {
    width: 181px;
    height: 124px;
    position: relative;
    margin-bottom: 15px;
    .img-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 23px;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.5);
      @include text-overflow();
      @include flex();
    }
  }
}
</style>
