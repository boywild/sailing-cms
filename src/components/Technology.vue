<template>
  <div class="new-technology">
    <div class="new-info mgb15" v-for="(item, index) in content" :key="index">
      <router-link target="_blank"  to="/">
        <ImgLazy height="96" :src="item.image"></ImgLazy>
        <div class="new-desc" v-if="showTitle">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from './ImgLazy.vue'
export default defineComponent({
  name: 'Technology',
  components: { ImgLazy },
  props: { content: { type: Array, default: () => [] }, showTitle: { type: Boolean, default: () => true } }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.new-technology {
  .new-info {
    .new-desc {
      height: 25px;
      font-size: $text-size-small;
      padding: 0 10px;
      background: #f7f8f9;
      @include flex(flex-start);
    }
  }
}
</style>
