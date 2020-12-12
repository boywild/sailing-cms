<template>
  <div class="article-title2">
    <div class="title-bar">
      <div class="mark"></div>
      <div class="name-before">国际</div>
      <div class="name-after">风云</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Img',
  props: {
    before: {
      type: String,
      default: () => ''
    },
    after: {
      type: String,
      default: () => ''
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-title2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 18px;
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .mark {
  }
  .name-after {
    color: #ff0000;
  }
}
</style>
