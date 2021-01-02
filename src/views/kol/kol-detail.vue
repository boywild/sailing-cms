<template>
  <PageContent>
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="kol-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="kol-article-new">
          <AuthArticle
            class="mgb20"
            v-for="(item, index) in state.leaderArticleList"
            :key="index"
            :content="item"
            :page-type="state.fromPage"
          ></AuthArticle>
          <a-empty v-if="!state.leaderArticleList.length" description="暂无数据" />
          <a-button v-else class="mgb20" block :loading="state.loadingMore" @click="getList" :disabled="state.pageNo > state.totalPage">
            {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
          </a-button>
        </div>
      </div>
    </template>
    <template #side>
      <div class="kol-detail">
        <Title2 class="mgb20" before="信德" after="会议"></Title2>
        <div class="kol-detail-info">
          <div class="name">
            <span>{{ state.leaderInfo.username }}</span
            ><span>简历</span>
          </div>
          <ImgLazy width="221" height="282" :src="state.leaderInfo.photo"></ImgLazy>
          <div class="short-intro">{{ state.leaderInfo.job }}</div>
          <div class="short-desc">
            {{ state.leaderInfo.content }}
          </div>
        </div>
      </div>
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
import SiteMap from '@/components/SiteMap.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import AuthArticle from '@/views/profession/components/AuthArticle.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'Kol',
  components: { PageContent, SiteMap, ImgLazy, Title, Title2, AuthArticle },
  setup() {
    const state = reactive({
      leaderArticleList: [],
      leaderInfo: {},
      leaderId: '',
      fromPage: '',
      pageNo: 1,
      totalPage: 1,
      showMoreBtn: false,
      loadingMore: false
    })
    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article.getArticleList({ pageNo: state.pageNo, pageSize: 16, leaderId: state.leaderId }).then(({ data = {} }) => {
        state.leaderArticleList = state.leaderArticleList.concat(data.dataList)
        state.totalPage = data.totalPage
        state.loadingMore = false
        state.pageNo += 1
      })
    }
    const getAuthorDetail = async () => {
      const { data = {} } = await article.leaderDetail(state.leaderId)
      state.leaderInfo = data
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const fromPage = route.params.fromPage as string
      const leaderId = route.params.authorId as string
      state.fromPage = fromPage
      state.leaderId = leaderId
      getAuthorDetail()
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
<style lang="scss" scoped>
.kol-article-new {
  .auth-article {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
.kol-detail {
  .kol-detail-info {
    .name {
      font-size: 18px;
      span:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .img-box {
      margin: 10px 0;
    }
  }
}
.short-intro {
  width: 221px;
  font-weight: bold;
}
.short-desc {
  width: 221px;
}
</style>
