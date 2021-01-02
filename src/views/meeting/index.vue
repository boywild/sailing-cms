<template>
  <PageContent class="mgb15">
    <template #content>
      <div class="meeting-banner mgb20"></div>
      <div class="recent-meeting mgb20">
        <Title class="mgb10" name="近期会议" sub-name="meeting" direction="bottom"></Title>
        <div class="recent-meet-list">
          <div class="recent-item">
            <div class="time">2020.6.21</div>
            <div class="way">线上会议</div>
            <div class="title">2020财新夏季峰会——重启全球信心</div>
          </div>
          <div class="recent-item">
            <div class="time">2020.6.21</div>
            <div class="way">线上会议</div>
            <div class="title">2020财新夏季峰会——重启全球信心</div>
          </div>
        </div>
      </div>
      <div class="past-meeting mgb20">
        <Title class="mgb10" name="往期会议" sub-name="meeting" direction="bottom"></Title>
        <div class="past-meet-list">
          <div class="past-box">
            <div class="past-head">
              <div class="title">信德会议</div>
              <div class="more">更多</div>
            </div>
            <div class="past-body">
              <div class="past-item">大连海事展官方小程序正式上线</div>
              <div class="past-item">2020（第五届）青岛国际海洋科技展览会...</div>
            </div>
          </div>
          <div class="past-box">
            <div class="past-head">
              <div class="title">信德会议</div>
              <div class="more">更多</div>
            </div>
            <div class="past-body">
              <div class="past-item">大连海事展官方小程序正式上线</div>
              <div class="past-item">2020（第五届）青岛国际海洋科技展览会...</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <div class="meeting">
        <Title2 before="信德" after="会议"></Title2>
      </div>
      <ReadingTop class="mgb15" before="阅读" after="排行" :content="[]"></ReadingTop>
      <HotBox class="mgb15" before="国内" after="热点" :main="[]" :list="[]"></HotBox>
    </template>
    <template #footer>
      <div>
        <Title class="mgb20" name="演讲嘉宾" sub-name="guest" direction="bottom"></Title>
      </div>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageContent from '@/layout/components/PageContent.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'
import Search from '@/components/Search.vue'
import SiteMap from '@/components/SiteMap.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import HotBox from '@/components/HotBox.vue'

import article from '@/api/article'

export default defineComponent({
  name: 'Meeting',
  components: { PageContent, Title, Title2, Search, SiteMap, ReadingTop, HotBox },
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
.meeting-banner {
  width: 100%;
  height: 319px;
  background: #eee;
}
.recent-meet-list {
  .recent-item {
    color: $theme-blue;
    @include flex(flex-start);
    padding: 5px 0;
    .time {
      width: 20%;
      @include text-overflow();
    }
    .way {
      width: 20%;
      @include text-overflow();
    }
    .title {
      width: 60%;
      @include text-overflow();
    }
  }
}
.past-meet-list {
  @include flex(space-between);
  .past-box {
    width: 302px;
    .past-head {
      @include flex(space-between);
      border-bottom: 2px dashed #707070;
      padding: 3px 0;
      margin-bottom: 5px;
      .title {
        font-weight: bold;
      }
      .more {
        color: $theme-blue;
      }
    }
    .past-body {
      .past-item {
        color: $theme-blue;
        padding: 3px 0;
      }
    }
  }
}
</style>
