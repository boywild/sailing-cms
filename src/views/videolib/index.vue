<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <TradeComing class="mgb20" :content="state.videoHotList"></TradeComing>
      <Title name="要闻" subName="news"></Title>
      <a-tabs class="mgb20" @change="callback" :defaultActiveKey="state.tabDefaultActive">
        <a-tab-pane key="0" tab="全部">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="1" tab="航海生活" force-render>
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="2" tab="事故险情">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="3" tab="港口风采">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="4" tab="船舶技术">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="5" tab="教育培训">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="6" tab="航运报道">
          <ArticleList class="mgb15" :list="state.videoList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
      </a-tabs>
      <a-button
        class="mgb20"
        v-if="state.videoList.length"
        block
        :loading="state.loadingMore"
        @click="getList"
        :disabled="state.pageNo > state.totalPage"
      >
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
import SiteMap from '@/components/SiteMap.vue'

import article from '@/api/article'

export default defineComponent({
  name: 'VideoLib',
  components: { PageContent, ImgLazy, Title, InnerSide, ArticleList, TradeComing, SiteMap },
  setup() {
    const state = reactive({
      videoList: [],
      videoHotList: [],
      tabDefaultActive: '',
      fromPage: '',
      pageNo: 1,
      totalPage: 1,
      showMoreBtn: false,
      loadingMore: false
    })
    const route = useRoute()
    const fromPage = route.query.type as string
    const category = (route.query.cat as string) || '0'
    state.fromPage = fromPage
    state.tabDefaultActive = category

    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article
        .getArticleList({
          pageNo: state.pageNo,
          pageSize: 15,
          type: state.fromPage,
          categoryId: state.tabDefaultActive === '0' ? '' : state.tabDefaultActive
        })
        .then(({ data = {} }) => {
          state.videoList = state.videoList.concat(data.dataList)
          state.totalPage = data.totalPage
          state.loadingMore = false
          state.pageNo += 1
        })
    }
    const reset = () => {
      state.videoList = []
      state.pageNo = 1
      state.totalPage = 1
      state.loadingMore = false
    }
    const callback = (key: string) => {
      state.tabDefaultActive = key
      reset()
      getList()
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()

      article.getArticleList({ pageNo: 1, pageSize: 9, type: fromPage }).then(({ data = {} }) => {
        state.videoHotList = data.dataList
      })
      getList()
    })
    return {
      callback,
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
