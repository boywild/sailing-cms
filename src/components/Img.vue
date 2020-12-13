<template>
  <div class="img-box" :style="relaStyle">
    <img class="img" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
interface CardProps {
  width?: string
  height?: string
  src?: string
}
export default defineComponent({
  name: 'Img',
  props: {
    width: { type: String, default: () => '' },
    height: { type: String, default: () => '' },
    src: { type: String, default: () => '' }
  },
  setup(props: Readonly<CardProps>) {
    const relaStyle = computed(() => {
      if (!props.width) {
        return {
          height: props.height + 'px'
        }
      } else {
        return {
          width: props.width + 'px',
          height: props.height + 'px'
        }
      }
    })
    return {
      relaStyle
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-box {
  background: #eee;
}
</style>
