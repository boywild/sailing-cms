<template>
  <div class="author-introduce">
    <div class="author-thumbnail">
      <ImgLazy width="80" height="105" :src="content.photo"></ImgLazy>
      <div class="name">{{ content.username }}</div>
    </div>
    <div class="introduce-conent">
      <div class="title">作者简介</div>
      <div class="desc">
        {{ content.content }}
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
    content: { type: String, default: () => '' }
  }
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
