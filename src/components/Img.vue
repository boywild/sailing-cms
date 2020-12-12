<template>
  <div class="img-box" :style="{ height: height + 'px' }">
    <img class="img" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Img',
  props: {
    width: {
      type: String,
      default: () => '0'
    },
    height: {
      type: String,
      default: () => '0'
    },
    src: {
      type: String,
      default: () => ''
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
