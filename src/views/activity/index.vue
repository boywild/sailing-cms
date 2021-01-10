<template>
  <PageContent class="mgb15">
    <template #banner>
      <UpAdv class="mgb15" height="118"></UpAdv>
      <!-- <ImgLazy class="mgb15" height="118" src="/upload/inner-adv1.png"></ImgLazy> -->
    </template>
    <template #content>
      <TradeComing class="mgb20" :content="hotList"></TradeComing>
      <Title name="要闻" subName="news"></Title>
      <ArticleList :list="newsList" :page-type="fromPage" :show-adv="true"></ArticleList>
    </template>
    <template #side>
      <InnerSide></InnerSide>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageContent from '@/layout/components/PageContent.vue'
// import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import InnerSide from '@/components/InnerSide.vue'
import ArticleList from '@/components/ArticleList.vue'
import TradeComing from '@/components/TradeComing.vue'
import SiteMap from '@/components/SiteMap.vue'
import UpAdv from '@/components/UpAdv.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'Activity',
  components: { PageContent, Title, InnerSide, ArticleList, TradeComing, SiteMap, UpAdv },
  setup() {
    const hotList = ref([]) // 热点资讯
    const newsList = ref([]) // 要闻
    const fromPage = ref('')

    onMounted(() => {
      const route = useRoute()
      const pageType = (route.query.type as string) || '1'
      fromPage.value = pageType
      const allData = [
        { name: '热点资讯', type: pageType as string, hot: '1', pageSize: 4 },
        { name: '要闻', type: pageType as string, sortType: '1', pageSize: 30 }
      ]
      const fetchList = allData.map(ele => article.getArticleList({ pageNo: 1, ...ele }))
      Promise.all(fetchList).then(res => {
        const allDataList = res.map(ele => ele.data.dataList || [])
        hotList.value = allDataList[0]
        newsList.value = allDataList[1]
      })
    })
    return {
      hotList,
      newsList,
      fromPage
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped></style>
