<template>
  <div class="multiple-adv">
    <SingleAdv v-for="(item, index) in list.slice(0, count)" :key="index" class="mgb15" :width="width" :height="height" :content="item"></SingleAdv>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleAdv from './SingleAdv.vue'

export default defineComponent({
  name: 'MultipleAdv',
  props: {
    width: { type: String, default: () => '' },
    height: { type: String, default: () => '' },
    list: { type: Array, default: () => [] },
    count: { type: Number, default: () => 2 }
  },
  components: { SingleAdv }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
