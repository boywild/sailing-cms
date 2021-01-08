<template>
  <div class="home-cat-adv" v-if="img.show">
    <SingleAdv height="118" :content="img.content"></SingleAdv>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import SingleAdv from './SingleAdv.vue'

export default defineComponent({
  name: 'HomeFooterAdv',
  props: {
    count: { type: Number, default: () => 0 },
    imgList: { type: Array, default: () => [] }
  },
  components: { SingleAdv },
  setup(props) {
    return {
      img: computed(() => {
        let content = {}
        let show = false
        if ((props.count + 1) % 5 === 0) {
          const index = (props.count + 1) / 5
          content = (props.imgList[index - 1] as any) || {}
          show = true
        }
        return {
          show,
          content
        }
      })
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
