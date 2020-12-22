<template>
  <div class="page-nav">
    <router-link class="page-nav-item" v-for="(item, index) in catList" :key="index" :to="{ name: item.link, params: { id: item.id } }">
      {{ item.title }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import article from '@/api/article'
import { Category } from '@/types/article'
export default defineComponent({
  name: 'PageNav',
  props: {
    msg: String
  },
  setup() {
    const catList = ref([{ title: '首页', link: 'home' }])
    onBeforeMount(async () => {
      const { data = {} } = await article.getCategoryList()
      console.log(data.dataList)
      catList.value = catList.value.concat(data.dataList.map((ele: Category) => ({ ...ele, link: 'category' })))
    })
    console.log(catList)
    return {
      catList
    }
  },
  data() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.page-nav {
  background: $theme-blue;
  height: 43px;
  @include flex(flex-start);
  .page-nav-item {
    color: #fff;
    width: 66px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    @include flex(center);
    // &.router-link-active {
    //   background: #517ace;
    // }
  }
}
</style>
