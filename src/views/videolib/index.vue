<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <TradeComing class="mgb20" :content="state.videoHotList"></TradeComing>
      <Title name="要闻" subName="news"></Title>
      <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
      <a-button class="mgb20" block :loading="state.loadingMore" @click="getList" :disabled="state.pageNo > state.totalPage">
        {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
      </a-button>
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
import { defineComponent, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageContent from '@/layout/components/PageContent.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import InnerSide from '@/components/InnerSide.vue'
import ArticleList from '@/components/ArticleList.vue'
import TradeComing from '@/components/TradeComing.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'VideoLib',
  components: { PageContent, ImgLazy, Title, InnerSide, ArticleList, TradeComing },
  setup() {
    const state = reactive({
      videoList: [],
      videoHotList: [],
      fromPage: '',
      pageNo: 1,
      totalPage: 1,
      showMoreBtn: false,
      loadingMore: false
    })
    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article.getArticleList({ pageNo: state.pageNo, pageSize: 15, type: state.fromPage }).then(({ data = {} }) => {
        state.videoList = state.videoList.concat(data.dataList)
        state.totalPage = data.totalPage
        state.loadingMore = false
        state.pageNo += 1
      })
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const fromPage = route.query.type as string
      state.fromPage = fromPage
      article.getArticleList({ pageNo: 1, pageSize: 9, type: fromPage }).then(({ data = {} }) => {
        state.videoHotList = data.dataList
      })
      getList()
    })
    return {
      state,
      getList
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped></style>
