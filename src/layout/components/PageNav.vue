<template>
  <div class="page-nav">
    <router-link
      target="_blank"
      class="page-nav-item"
      v-for="(item, index) in catList"
      :key="index"
      :to="{ name: item.link, query: { ...item.query } }"
    >
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
        { title: '首页', link: 'home', query: { type: '1' } },
        { title: '航情', link: 'sailing', query: { type: '2' } },
        { title: '招聘', link: 'partner', query: { type: '3' } },
        { title: '活动', link: 'activity', query: { type: '4' } },
        { title: '专栏', link: 'profession', query: { type: '5' } },
        { title: '图片', link: 'imagelib', query: { type: '6' } },
        { title: '视频', link: 'videolib', query: { type: '7' } },
        { title: '造船', link: 'article', query: { type: '8', name: '造船' } },
        { title: '交易', link: 'article', query: { type: '9', name: '交易' } },
        { title: '港口', link: 'article', query: { type: '10', name: '港口' } },
        { title: '海员', link: 'article', query: { type: '11', name: '海员' } },
        { title: '企业', link: 'article', query: { type: '12', name: '企业' } },
        { title: '人物', link: 'article', query: { type: '13', name: '人物' } },
        { title: '技术', link: 'article', query: { type: '14', name: '技术' } },
        { title: '安全', link: 'article', query: { type: '15', name: '安全' } }
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
