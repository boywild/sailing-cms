<template>
  <div class="single-adv" @click="handleClick">
    <ImgLazy :width="width" :height="height" :src="content.image"></ImgLazy>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLazy from './ImgLazy.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'SingleAdv',
  props: {
    width: { type: String, default: () => '' },
    height: { type: String, default: () => '' },
    content: { type: Object, default: () => ({}) }
  },
  components: { ImgLazy },
  setup(props) {
    const handleClick = async () => {
      await article.advCount(props.content.id)
      props.content && props.content.url && window.open('http://' + props.content.url, '_blank')
    }
    return {
      handleClick
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.single-adv {
  cursor: pointer;
}
</style>
