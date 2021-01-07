<template>
  <div class="home-cat-adv" v-if="img.show">
    <SingleAdv height="118" :content="img.content"></SingleAdv>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import SingleAdv from './SingleAdv.vue'

export default defineComponent({
  name: 'HomeFooterAdv',
  props: {
    count: { type: Number, default: () => 0 },
    imgList: { type: Array, default: () => [] }
  },
  components: { SingleAdv },
  setup(props) {
    const img = reactive({
      show: false,
      content: {}
    })
    console.info(props.imgList)
    if ((props.count + 1) % 5 === 0) {
      const index = (props.count + 1) / 5
      img.content = (props.imgList[index - 1] as any) || {}
      img.show = true
    }
    return {
      img
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
