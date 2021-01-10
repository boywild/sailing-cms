<template>
  <PageContent class="mgb15">
    <template #banner>
      <UpAdv class="mgb15" height="118"></UpAdv>
      <!-- <ImgLazy class="mgb15" height="118" src="/upload/inner-adv1.png"></ImgLazy> -->
    </template>
    <template #content>
      <div class="imglib-banner mgb20"></div>
      <Title class="mgb20" name="实时热点" direction="top"></Title>
      <ImglibColumn :list="state.imgList"></ImglibColumn>
      <a-button class="mgb20" block :loading="state.loadingMore" @click="getList" :disabled="state.pageNo > state.totalPage">
        {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
      </a-button>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <SideAdv height="92"></SideAdv>
      <div class="imglib-hot">
        <Title2 class="mgb20" before="实时" after="热点"></Title2>
        <div class="imglig-hot-list">
          <PreviewArticle v-for="(item, index) in state.imgHotList" :key="index" :content="item"></PreviewArticle>
        </div>
      </div>
      <!-- <div class="imglib-hot">
        <Title2 class="mgb20" before="实时" after="热点"></Title2>
        <div class="imglig-hot-important">
          <div class="hot-important-preview mgb20">
            <ImgLazy width="315" height="201"></ImgLazy>
            <div class="title">一个“横漂”的自我修养</div>
          </div>
          <div class="hot-important-preview">
            <ImgLazy width="315" height="201"></ImgLazy>
            <div class="title">一个“横漂”的自我修养</div>
          </div>
        </div>
      </div> -->
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
import Title2 from '@/components/Title2.vue'
import Search from '@/components/Search.vue'
// import Technology from '@/components/Technology.vue'
import ImglibColumn from './components/ImglibColumn.vue'
import SiteMap from '@/components/SiteMap.vue'
import PreviewArticle from '@/components/PreviewArticle.vue'
import SideAdv from '@/components/SideAdv.vue'
import UpAdv from '@/components/UpAdv.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'ImageLib',
  components: { PageContent, Title, Title2, Search, ImglibColumn, SiteMap, PreviewArticle, SideAdv, UpAdv },
  setup() {
    const state = reactive({
      imgList: [],
      imgHotList: [],
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
        state.imgList = state.imgList.concat(data.dataList)
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
        state.imgHotList = data.dataList
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
<style lang="scss" scoped>
.imglib-banner {
  width: 100%;
  height: 418px;
  background: #eee;
}
.imglig-hot-list {
  @include flex(space-between);
  flex-wrap: wrap;
  .preview-article {
    margin: 0 0 15px 0;
  }
}
.imglig-hot-important {
  .hot-important-preview {
    .title {
      font-size: $text-size-middle;
      font-weight: bold;
      line-height: 50px;
      @include text-overflow();
    }
  }
}
</style>
