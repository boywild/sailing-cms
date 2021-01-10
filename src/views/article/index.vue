<template>
  <PageContent class="mgb15">
    <template #banner>
      <UpAdv class="mgb15" height="118"></UpAdv>
      <!-- <ImgLazy class="mgb15" height="118" src="/upload/inner-adv1.png"></ImgLazy> -->
    </template>
    <template #content>
      <Title :name="state.name" subName="news"></Title>
      <div class="mgb20">
        <ArticleList :list="state.newsList" :page-type="state.fromPage"></ArticleList>
      </div>
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
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageContent from '@/layout/components/PageContent.vue'
// import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import InnerSide from '@/components/InnerSide.vue'
import ArticleList from '@/components/ArticleList.vue'
import SiteMap from '@/components/SiteMap.vue'
import UpAdv from '@/components/UpAdv.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Article',
  components: { PageContent, UpAdv, Title, InnerSide, ArticleList, SiteMap },
  setup() {
    const state = reactive({
      name: '',
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
    const name = (route.query.name as string) || ''
    state.fromPage = pageType
    state.tabDefaultActive = category
    state.name = name
    document.title = name

    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article
        .getArticleList({
          pageNo: state.pageNo,
          pageSize: 15,
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

    onMounted(() => {
      getList()
    })
    return {
      getList,
      state
    }
  },
  data() {
    return {}
  },
  methods: {}
})
</script>
<style lang="scss" scoped></style>
