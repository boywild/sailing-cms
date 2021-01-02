<template>
  <PageContent>
    <template #content>
      <WonderfulMsg :content="hotList"></WonderfulMsg>
      <div class="authors-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="auth-hot">
          <AuthArticle v-for="(item, index) in newsList" :key="index" :content="item" :page-type="pageType"></AuthArticle>
        </div>
      </div>
      <!-- <Focusing></Focusing> -->
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
      <Authors class="mgb20" :content="authorList"></Authors>
      <TopRank class="mgb20" :content="commentList" :page-type="pageType"></TopRank>
      <FeatureBox before="热点" after="专题" :content="hotList" :page-type="pageType"></FeatureBox>
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
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import TopRank from '@/components/TopRank.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import WonderfulMsg from './components/WonderfulMsg.vue'
import Authors from './components/Authors.vue'
import AuthArticle from './components/AuthArticle.vue'
// import Focusing from './components/Focusing.vue'
import SiteMap from '@/components/SiteMap.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'Home',
  components: { PageContent, Title, Search, Technology, TopRank, FeatureBox, WonderfulMsg, Authors, AuthArticle, SiteMap },
  setup() {
    const hotList = ref([]) // 热点资讯
    const newsList = ref([]) // 要闻
    const commentList = ref([]) // 评论排行
    const authorList = ref([]) // 要闻
    const pageType = ref('')

    onMounted(() => {
      const route = useRoute()
      const fromPage = (route.query.type as string) || '1'
      pageType.value = fromPage
      const allData = [
        { name: '热点资讯', type: fromPage, hot: '1', pageSize: 5 },
        { name: '最新', type: fromPage, sortType: '1', pageSize: 30 },
        { name: '评论排行', type: fromPage, sortType: '3', pageSize: 30 }
      ]
      const fetchList = allData.map(ele => article.getArticleList({ pageNo: 1, ...ele }))

      Promise.all(fetchList).then(res => {
        const allDataList = res.map(ele => ele.data.dataList || [])
        hotList.value = allDataList[0]
        newsList.value = allDataList[1]
        commentList.value = allDataList[2]
      })
      article.author({ pageNo: 1, pageSize: 9, hot: '1' }).then(({ data = {} }) => {
        authorList.value = data.dataList
      })
    })
    return {
      hotList,
      newsList,
      commentList,
      authorList,
      pageType
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.authors-article {
  padding-top: 30px;
}
.auth-hot {
  .auth-article {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
