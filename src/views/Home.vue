<template>
  <PageContent class="mgb15">
    <template #banner>
      <!-- <div v-html="decode(topArticles[0] && topArticles[0].article.content)"></div> -->
      <ImgLazy class="mgb15" height="118" src="/upload/home-adv1.png"></ImgLazy>
    </template>
    <template #content>
      <div class="home-banner mgb15">
        <swiper :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }">
          <swiper-slide v-for="(item, index) in homeBanner" :key="index">
            <div class="home-hot-preview">
              <img :src="item.image" />
              <div class="home-hot-txt">{{ item.title }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <ImgLazy class="mgb15" height="118" src="/upload/home-adv2.png"></ImgLazy>
      <div class="article-box">
        <Title name="新闻速递" sub-name="news"></Title>
        <div class="article-content">
          <div class="news-list">
            <div class="news-item mgb20" v-for="(article, index) in state.homeNews" :key="index">
              <ImgLazy width="151" height="101" :src="article.image"></ImgLazy>
              <div class="new-info">
                <router-link target="_blank" :to="{ name: 'post', params: { articleId: article.articleId, fromPage: '1' } }" class="title">
                  <div class="t-txt">{{ article.title }}</div>
                  <div class="t-comment"><MessageOutlined class="icon-coment" />{{ article.comments }}</div>
                </router-link>
                <div class="desc">{{ article.introduction }}</div>
                <div class="time">信德海事{{ article.createDate }}</div>
              </div>
            </div>
            <a-empty v-if="!state.homeNews.length" description="暂无数据" />
            <a-button v-else class="mgb20" block :loading="state.loadingMore" @click="getList" :disabled="state.pageNo > state.totalPage">
              {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
            </a-button>
          </div>
        </div>
      </div>
    </template>
    <template #side>
      <div>
        <Search class="mgb15"></Search>
        <Technology
          :content="[
            { title: 'ALFA LAVAL——压载水处理的信心之选', image: '/upload/home-adv3.png' },
            { title: '集美大学电子电气员定向委培班联合招生', image: '/upload/home-adv4.png' }
          ]"
        ></Technology>
        <TradeShow class="mgb15" before="活动" after="会展" :content="meetingNews"></TradeShow>
        <div class="usually-tools mgb20">
          <div class="tools-title">
            <div class="txt">实用查询</div>
            <div class="more">更多</div>
          </div>
          <div class="tools-content">
            <div class="tools">近海天气</div>
            <div class="tools">全球海况</div>
            <div class="tools">台风路径</div>
            <div class="tools">实时船位</div>
            <div class="tools">潮汐查询</div>
            <div class="tools">PSC查询</div>
          </div>
        </div>
        <ReadingTop class="mgb15" before="阅读" after="排行" :content="homeReadTop"></ReadingTop>
        <ImgLazy class="mgb15" height="92" src="/upload/home-adv5.png"></ImgLazy>
        <ImgLazy class="mgb15" height="92" src="/upload/home-adv3.png"></ImgLazy>
        <HotBox class="mgb15" before="国内" after="热点" :main="inlandNews.slice(0, 2)" :list="inlandNews.slice(2)"></HotBox>
        <ArticleToday class="mgb15" :content="internationalNews"></ArticleToday>
        <HotBox class="mgb15" before="活动" after="热点" :main="activeHot.slice(0, 2)" :list="activeHot.slice(2)"></HotBox>
        <HotBox class="mgb15" before="航情" after="热点" :main="sailingHot.slice(0, 2)" :list="sailingHot.slice(2)"></HotBox>
        <FeatureBox before="专栏" after="分享" :content="professionNews"></FeatureBox>
      </div>
    </template>
  </PageContent>
  <!-- <PageContent>
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="category-box mgb15" v-for="(area, index) in categoryList" :key="index">
        <ImgLazy class="mgb15" height="118" v-if="area.banner"></ImgLazy>
        <div class="category-content">
          <div class="category-list">
            <div class="category-item" v-for="(item, index) in area.category" :key="index">
              <ImgLazy width="151" height="101"></ImgLazy>
              <div class="category-info">
                <div class="category-top">
                  <div class="c-name">{{ item.catName }}</div>
                  <div class="c-comment">2</div>
                </div>
                <div class="category-title">
                  {{ item.title }}
                </div>
                <div class="category-time">{{ item.from }} {{ item.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #side>
      <div>
        <HotBox class="mgb20" before="国内" after="热点" :main="inlandNews.slice(0, 2)" :list="inlandNews.slice(2)"></HotBox>
        <ArticleToday class="mgb20" :content="internationalNews"></ArticleToday>
        <HotBox class="mgb20" before="活动" after="热点" :main="activeHot.slice(0, 2)" :list="activeHot.slice(2)"></HotBox>
        <HotBox class="mgb20" before="航情" after="热点" :main="sailingHot.slice(0, 2)" :list="sailingHot.slice(2)"></HotBox>
        <FeatureBox before="专栏" after="分享" :content="professionNews"></FeatureBox>
      </div>
    </template>
  </PageContent> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { MessageOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PageContent from '@/layout/components/PageContent.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import HotBox from '@/components/HotBox.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import Technology from '@/components/Technology.vue'
import TradeShow from '@/components/TradeShow.vue'
import ArticleToday from '@/components/ArticleToday.vue'
import ReadingTop from '@/components/ReadingTop.vue'
// import Test from '@/api/test'
import article from '@/api/article'
SwiperCore.use([Pagination, Autoplay])
export default defineComponent({
  name: 'Home',
  components: {
    MessageOutlined,
    Swiper,
    SwiperSlide,
    PageContent,
    ImgLazy,
    Title,
    Search,
    HotBox,
    FeatureBox,
    Technology,
    TradeShow,
    ArticleToday,
    ReadingTop
  },
  setup() {
    const topArticles = ref([])
    const homeBanner = ref([]) // 首页banner
    const homeNews = ref([]) // 首页新闻
    const homeReadTop = ref([]) // 首页阅读排行
    const sailingHot = ref([]) // 航情热点
    const meetingNews = ref([]) // 活动会展
    const activeHot = ref([]) // 活动热点
    const professionNews = ref([]) // 专栏分享
    const inlandNews = ref([]) // 国内热点
    const internationalNews = ref([]) // 国际风云
    const state = reactive({
      homeNews: [],
      pageNo: 1,
      totalPage: 1,
      loadingMore: false
    })
    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article.getArticleList({ pageNo: state.pageNo, pageSize: 20, type: '1' }).then(({ data = {} }) => {
        state.homeNews = state.homeNews.concat(data.dataList)
        state.totalPage = data.totalPage
        state.loadingMore = false
        state.pageNo += 1
      })
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const allData = [
        { name: '首页banner', type: (route.query.type || '1') as string, hot: '1', pageSize: 5 },
        // { name: '首页新闻', type: (route.query.type || '1') as string, sortType: '1' },
        { name: '首页阅读排行', type: '1', sortType: '2', pageSize: 30 },
        { name: '航情热点', type: '2', hot: '1', pageSize: 7 },
        { name: '活动会展', type: '16', sortType: '1', pageSize: 10 },
        { name: '活动热点', type: '4', hot: '1', pageSize: 7 },
        { name: '专栏分享', type: '5', sortType: '1', pageSize: 5 },
        { name: '国内热点', type: '24', hot: '1', pageSize: 7 },
        { name: '国际风云', type: '25', hot: '1', pageSize: 7 }
      ]
      getList()
      // const { type = '1' } = route.query
      // const { data = [] } = await article.getArticleList({ pageNo: 1, pageSize: 30, type: type as string })
      const fetchList = allData.map((ele) => article.getArticleList({ pageNo: 1, ...ele }))
      Promise.all(fetchList).then((res) => {
        const allDataList = res.map((ele) => ele.data.dataList || [])
        homeBanner.value = allDataList[0]
        // homeNews.value = allDataList[1]
        homeReadTop.value = allDataList[1]
        sailingHot.value = allDataList[2]
        meetingNews.value = allDataList[3]
        activeHot.value = allDataList[4]
        professionNews.value = allDataList[5]
        inlandNews.value = allDataList[6]
        internationalNews.value = allDataList[7]
      })
      // console.log(data)
      // topArticles.value = data
    })
    console.log(topArticles)
    return {
      state,
      getList,
      topArticles,
      homeBanner,
      homeNews,
      homeReadTop,
      sailingHot,
      meetingNews,
      activeHot,
      professionNews,
      inlandNews,
      internationalNews
    }
  },
  data() {
    return {}
  },
  mounted() {
    // setTimeout(() => {
    //   const swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true
    //     }
    //   })
    // }, 500)
  },
  methods: {
    decode(html: string) {
      console.log(html)
      if (html) {
        return html
          .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.news-list {
  .news-item {
    @include flex(flex-start);
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;
    .new-info {
      height: 101px;
      @include flex(space-between, flex-start);
      flex-direction: column;
      padding: 0 0 0 15px;
      flex: 1;
      overflow: hidden;
      line-height: normal;
      .title {
        overflow: hidden;
        width: 100%;
        @include flex(space-between);
        .t-txt {
          font-size: $text-size-big;
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex: 1;
        }
        .t-comment {
          color: #a5a5a5;
          font-size: 14px;
          width: 40px;
          text-align: right;
          margin-left: 20px;
        }
      }
      .desc {
        font-size: $text-size-small;
        height: 36px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .time {
        font-size: $text-size-small;
        color: #acacac;
      }
    }
  }
}
.category-list {
  .category-item {
    @include flex(flex-start);
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;
    .category-info {
      height: 101px;
      @include flex(space-between, flex-start, column);
      padding: 0 0 0 15px;
      flex: 1;
      overflow: hidden;
      line-height: normal;
      .category-top {
        overflow: hidden;
        width: 100%;
        @include flex(space-between);
        .c-name {
          font-size: $text-size-big;
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex: 1;
          color: $theme-blue;
        }
        .c-comment {
          color: #a5a5a5;
          font-size: 14px;
          width: 40px;
          text-align: right;
          margin-left: 20px;
        }
      }
      .category-title {
        font-size: $text-size-big;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        cursor: pointer;
      }
      .category-time {
        font-size: $text-size-small;
        color: #acacac;
      }
    }
  }
}

.usually-tools {
  .tools-title {
    @include flex(space-between);
    line-height: normal;
    padding: 6px 0;
    border-bottom: 1px solid #dddddd;
    .txt {
      font-size: $text-size-big;
      color: $theme-blue;
      font-weight: bold;
    }
    .more {
      color: $theme-red;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .tools-content {
    @include flex(space-between);
    flex-wrap: wrap;
    .tools {
      @include flex();
      width: 85px;
      height: 35px;
      border: 1px solid #707070;
      color: $theme-blue;
      margin-top: 9px;
    }
  }
}
</style>
<style lang="scss">
.home-banner {
  width: 656px;
  height: 319px;
  background: #eee;
  .home-hot-preview {
    width: 100%;
    height: 100%;
    position: relative;
    .home-hot-txt {
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
</style>
