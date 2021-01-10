<template>
  <PageContent class="mgb15">
    <template #content>
      <div class="meeting-banner mgb20">
        <swiper :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }">
          <swiper-slide v-for="(item, index) in state.hotList" :key="index">
            <div class="hot-preview">
              <img :src="item.image" />
              <div class="hot-txt">{{ item.title }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="recent-meeting mgb20">
        <Title class="mgb10" name="近期会议" sub-name="meeting" direction="bottom"></Title>
        <div class="recent-meet-list">
          <router-link
            target="_blank"
            :to="{ name: 'post', params: { articleId: item.articleId, fromPage: state.fromPage } }"
            class="recent-item"
            v-for="(item, index) in state.recentList"
            :key="index"
          >
            <div class="time">{{ item.title }}</div>
            <div class="way">线上会议</div>
            <div class="title">{{ item.introduction }}</div>
          </router-link>
          <a-empty v-if="!state.recentList.length" description="暂无数据" />
        </div>
      </div>
      <div class="past-meeting mgb20">
        <Title class="mgb10" name="往期会议" sub-name="meeting" direction="bottom"></Title>
        <div class="past-meet-list">
          <div class="past-box" v-for="(item, index) in state.pastList" :key="index">
            <div class="past-head">
              <div class="title">信德会议</div>
              <div class="more">更多</div>
            </div>
            <div class="past-body">
              <div class="past-item">2020（第五届）青岛国际海洋科技展览会</div>
              <div class="past-item">2020（第五届）青岛国际海洋科技展览会...</div>
            </div>
          </div>
        </div>
        <a-empty v-if="!state.pastList.length" description="暂无数据" />
      </div>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <div class="meeting mgb15">
        <Title2 before="信德" after="会议"></Title2>
        <div>
          {{ state.hotList[0] && state.hotList[0].introduction }}
        </div>
        <a-empty v-if="!state.hotList[0]" description="暂无数据" />
      </div>
      <ReadingTop class="mgb15" before="阅读" after="排行" :content="state.readTopList" :page-type="state.fromPage"></ReadingTop>
      <HotBox
        class="mgb15"
        before="国内"
        after="热点"
        :main="state.zhList.slice(0, 2)"
        :list="state.zhList.slice(2)"
        :page-type="state.fromPage"
      ></HotBox>
    </template>
    <template #footer>
      <div>
        <Title class="mgb20" name="演讲嘉宾" sub-name="guest" direction="bottom"></Title>
        <div class="meeting-kol mgb15">
          <swiper :pagination="{ clickable: true }" :slidesPerView="7" :spaceBetween="15" navigation>
            <swiper-slide v-for="(item, index) in state.kolList" :key="index">
              <div class="kol-thumba">
                <img :src="item.photo" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PageContent from '@/layout/components/PageContent.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'
import Search from '@/components/Search.vue'
import SiteMap from '@/components/SiteMap.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import HotBox from '@/components/HotBox.vue'
import article from '@/api/article'
SwiperCore.use([Pagination, Autoplay])
export default defineComponent({
  name: 'Meeting',
  components: { PageContent, Swiper, SwiperSlide, Title, Title2, Search, SiteMap, ReadingTop, HotBox },
  setup() {
    const state = reactive({
      recentList: [],
      pastList: [],
      hotList: [],
      readTopList: [],
      zhList: [],
      kolList: [],
      fromPage: ''
    })
    const getKolList = async () => {
      const { data = {} } = await article.leader({ pageNo: 1, pageSize: 30 })
      state.kolList = data.dataList
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const fromPage = route.query.type as string
      state.fromPage = fromPage
      const allData = [
        { name: '近期会议', type: fromPage, dateType: '1', pageSize: 5 },
        { name: '往期会议', type: fromPage, dateType: '2', pageSize: 16 },
        { name: '信德会议', type: fromPage, hot: '1', pageSize: 7 },
        { name: '阅读排行', type: fromPage, sortType: '2', pageSize: 7 },
        { name: '国内热点', type: '24', hot: '1', pageSize: 7 }
      ]
      const fetchList = allData.map(ele => article.getArticleList({ pageNo: 1, ...ele }))
      Promise.all(fetchList).then(res => {
        const allDataList = res.map(ele => ele.data.dataList || [])
        state.recentList = allDataList[0]
        state.pastList = allDataList[1]
        state.hotList = allDataList[2]
        state.readTopList = allDataList[3]
        state.zhList = allDataList[3]
      })
      getKolList()
    })
    return {
      state
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.recent-meet-list {
  .recent-item {
    color: $theme-blue;
    @include flex(flex-start);
    padding: 5px 0;
    .time {
      width: 30%;
      @include text-overflow();
    }
    .way {
      width: 20%;
      @include text-overflow();
    }
    .title {
      width: 50%;
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
<style lang="scss">
.meeting-banner {
  width: 100%;
  height: 319px;
  background: #eee;
  .hot-preview {
    width: 100%;
    height: 100%;
    position: relative;
    .hot-txt {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 20px;
      font-size: $text-size-normal;
      background: rgba($color: #000000, $alpha: 0.5);
      color: #fff;
      text-align: left;
      height: 40px;
      line-height: 40px;
      @include text-overflow();
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-pagination {
      text-align: right;
      .swiper-pagination-bullet {
        background: #a5a5a5;
        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }
}
.meeting-kol {
  height: 102px;

  .kol-thumba {
    width: 102px;
    height: 102px;
    img {
      max-width: 100%;
    }
  }
  .swiper-container {
    padding: 0 61px;
  }
}
</style>
