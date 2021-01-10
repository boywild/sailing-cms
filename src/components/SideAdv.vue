<template>
  <div class="multiple-adv">
    <SingleAdv
      v-for="(item, index) in list.slice(0, count)"
      :key="index"
      class="mgb15"
      :width="width"
      :height="height"
      :content="item"
    ></SingleAdv>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import SingleAdv from './SingleAdv.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'SideAdv',
  props: {
    width: { type: String, default: () => '' },
    height: { type: String, default: () => '' },
    count: { type: Number, default: () => 2 }
  },
  components: { SingleAdv },
  setup() {
    const route = useRoute()
    const fromPageParams = route.params.fromPage as string
    const fromPageQuery = route.query.type as string
    // 位置 1顶部 2中部 3底部 4右侧
    const list = ref([])
    const getAdv = async () => {
      const { data = {} } = await article.advList(fromPageQuery || fromPageParams, '4')
      list.value = data.dataList
    }
    onMounted(() => {
      getAdv()
    })
    return { list }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
