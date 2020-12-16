<template>
  <div class="article-hot mgb15">
    <Title2 before="国内" after="热点"></Title2>
    <div class="article-hot-content">
      <div class="hot-main">
        <div class="preview-article">
          <Img height="95" />
          <div class="article-short-content">大连海事大学原党委书</div>
        </div>
        <div class="preview-article">
          <Img height="95" />
          <div class="article-short-content">大连海事大学原党委书</div>
        </div>
      </div>
      <div class="hot-list">
        <div class="hot-title">连海事大学原党委书记王昭翮调任中国农业</div>
        <div class="hot-title">连海事大学原党委书记王昭翮调任中国农业</div>
        <div class="hot-title">连海事大学原党委书记王昭翮调任中国农业</div>
        <div class="hot-title">连海事大学原党委书记王昭翮调任中国农业</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
import Img from './Img.vue'

export default defineComponent({
  name: 'HotBox',
  components: {
    Title2,
    Img
  },
  props: {}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
