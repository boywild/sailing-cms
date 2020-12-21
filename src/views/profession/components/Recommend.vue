<template>
  <div class="author-recommend-list">
    <div class="author-recommend-box" v-for="(item, index) in content" :key="index">
      <div class="author-recommend-thumbnail">
        <ImgLazy width="81" height="91"></ImgLazy>
        <div class="name">{{ item.name }}</div>
      </div>
      <div class="author-article-preview">
        <div class="title">{{ item.title }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="desc">
          {{ item.desc }}
        </div>
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
  props: {
    content: { type: Array, default: () => [] }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.author-recommend-list {
  @include flex(space-between);
  flex-wrap: wrap;
  .author-recommend-box {
    width: 50%;
    padding: 12px 12px 25px 12px;
    @include flex(flex-start);
    &:nth-child(4n-3) {
      background: #f8f8f8;
    }
    &:nth-child(4n-2) {
      background: #f8f8f8;
    }
  }
  .author-recommend-thumbnail {
    margin-right: 10px;
    border: 1px solid #cbcbcb;
    .name {
      font-size: $text-size-small;
      font-weight: bold;
      text-align: center;
      padding: 5px 0;
    }
  }
  .author-article-preview {
    align-self: flex-start;
    flex: 1;
    overflow: hidden;
    .title {
      font-size: 18px;
      font-weight: bold;
      @include text-overflow();
    }
    .time {
      font-weight: bold;
      font-size: $text-size-small;
    }
    .desc {
      font-size: $text-size-small;
      color: $text-light-color2;
    }
  }
}
</style>
