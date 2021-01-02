<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <TradeComing class="mgb20" :content="state.hotList"></TradeComing>
      <Title name="要闻" subName="news"></Title>
      <a-tabs class="mgb20" @change="callback" :defaultActiveKey="state.tabDefaultActive">
        <a-tab-pane key="0" tab="全部">
          <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="1" tab="海员薪资" force-render>
          <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="2" tab="招聘求职">
          <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="3" tab="招生培训">
          <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
        <a-tab-pane key="4" tab="航海院校">
          <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
        </a-tab-pane>
      </a-tabs>
      <a-button
        class="mgb20"
        v-if="state.newsList.length"
        block
        :loading="state.loadingMore"
        @click="getList"
        :disabled="state.pageNo > state.totalPage"
      >
        {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
      </a-button>
      <!-- <ArticleList :list="newsList" :page-type="fromPage"></ArticleList> -->
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
  name: 'Partner',
  components: { PageContent, ImgLazy, Title, InnerSide, ArticleList, TradeComing, SiteMap },
  setup() {
    const state = reactive({
      fromPage: '',
      tabDefaultActive: '',
      hotList: [],
      newsList: [],
      pageNo: 1,
      totalPage: 1,
      loadingMore: false
    })
    const route = useRoute()
    const pageType = (route.query.type as string) || '1'
    const category = (route.query.cat as string) || '0'
    state.fromPage = pageType
    state.tabDefaultActive = category

    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article
        .getArticleList({
          pageNo: state.pageNo,
          pageSize: 20,
          type: pageType,
          categoryId: state.tabDefaultActive === '0' ? '' : state.tabDefaultActive
        })
        .then(({ data = {} }) => {
          state.newsList = state.newsList.concat(data.dataList)
          state.totalPage = data.totalPage
          state.loadingMore = false
          state.pageNo += 1
        })
    }
    const getHot = () => {
      article.getArticleList({ pageNo: 1, pageSize: 7, type: pageType, hot: '1' }).then(({ data = {} }) => {
        state.hotList = state.hotList.concat(data.dataList)
      })
    }

    const reset = () => {
      state.newsList = []
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
      getList()
      getHot()
    })
    return {
      callback,
      getList,
      state
    }
  },
  data() {
    return {
      list: [
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped></style>
