<template>
  <div class="page-nav">
    <router-link target="_blank"  class="page-nav-item" v-for="(item, index) in catList" :key="index" :to="{ name: item.link, query: { type: item.type } }">
      {{ item.title }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import article from '@/api/article'
// import { Category } from '@/types/article'
export default defineComponent({
  name: 'PageNav',
  props: {
    msg: String
  },
  // setup() {
  //   const catList = ref([{ title: '首页', link: 'home' }])
  //   onBeforeMount(async () => {
  //     const { data = {} } = await article.getCategoryList()
  //     console.log(data.dataList)
  //     catList.value = catList.value.concat(data.dataList.map((ele: Category) => ({ ...ele, link: 'category' })))
  //   })
  //   console.log(catList)
  //   return {
  //     catList
  //   }
  // },
  data() {
    return {
      catList: [
        { title: '首页', link: 'home', type: '1' },
        { title: '航情', link: 'sailing', type: '2' },
        { title: '招聘', link: 'partner', type: '3' },
        { title: '活动', link: 'activity', type: '4' },
        { title: '专栏', link: 'profession', type: '5' },
        { title: '图片', link: 'imagelib', type: '6' },
        { title: '视频', link: 'videolib', type: '7' },
        { title: '造船', link: 'About', type: '8' },
        { title: '交易', link: 'About', type: '9' },
        { title: '港口', link: 'About', type: '10' },
        { title: '海员', link: 'About', type: '11' },
        { title: '企业', link: 'About', type: '12' },
        { title: '人物', link: 'About', type: '13' },
        { title: '技术', link: 'About', type: '14' },
        { title: '安全', link: 'About', type: '15' }
      ]
    }
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
