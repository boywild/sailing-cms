<template>
  <PageContent class="mgb15">
    <template #banner>
      <UpAdv class="mgb15" height="118"></UpAdv>
      <!-- <ImgLazy class="mgb15" height="118"></ImgLazy> -->
    </template>
    <template #content>
      <div class="article-detail-box gap">
        <Title></Title>
        <div class="article-detail-paragraph">
          <div class="article-detail-title">
            {{ state.articleDetail.title }}
          </div>
          <div class="article-detail-time">{{ state.articleDetail.createDate }}</div>
          <div class="article-detail-content" v-html="state.articleDetail.content"></div>
          <div class="article-editor">文章编辑：信德海事</div>
        </div>
        <div class="comment-box">
          <a-form ref="ruleForm" layout="vertical" :hideRequiredMark="true">
            <a-form-item name="content" v-bind="validateInfos.content">
              <a-textarea v-model:value="modelRef.content" :autoSize="{ minRows: 5, maxRows: 5 }" showCount :maxlength="400" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="onSubmit"> 发表评论 </a-button>
              <a-button style="margin-left: 10px" @click="resetFields"> 取消 </a-button>
            </a-form-item>
          </a-form>
          <div>
            <a-comment
              v-for="(item, index) in state.articleComments"
              :key="index"
              :author="item.nickname"
              avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              :datetime="item.createDate"
              :content="item.content"
            />
          </div>
        </div>
        <!-- <div class="article-share">分享到：微信 微博</div>
        <div class="article-between">
          <div class="prev-article related">上一篇：中国最大服务器厂商浪潮遭英特尔“断供”；拼多多黄峥转捐股权并卸任CEO</div>
          <div class="next-article related">下一篇：中国最大服务器厂商浪潮遭英特尔“断供”；拼多多黄峥转捐股权并卸任CEO</div>
        </div> -->
      </div>
      <!-- <Recommend></Recommend> -->
    </template>
    <template #side>
      <div>
        <Search class="mgb15"></Search>
        <SideAdv height="92"></SideAdv>
        <!-- <Technology
          :showTitle="false"
          :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
        ></Technology> -->
        <!-- <TradeShow class="mgb15" before="点击" after="排行" :content="tradeList"></TradeShow> -->
        <ReadingTop class="mgb15" before="阅读" after="排行" :content="readTop" :page-type="pageType"></ReadingTop>
        <ReadingTop class="mgb15" before="评论" after="排行" :content="commentList" :page-type="pageType"></ReadingTop>
        <HotBox
          class="mgb20"
          before="实时"
          after="热点"
          :main="hotList.slice(0, 2)"
          :list="hotList.slice(2)"
          :page-type="pageType"
        ></HotBox>
        <ArticleToday class="mgb20" :content="internationalNews" :page-type="pageType"></ArticleToday>
        <FeatureBox before="专栏" after="分享" :content="professionNews" :page-type="pageType"></FeatureBox>
      </div>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { useForm } from '@ant-design-vue/use'
import Cookies from 'js-cookie'
import PageContent from '@/layout/components/PageContent.vue'
// import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import HotBox from '@/components/HotBox.vue'
import FeatureBox from '@/components/FeatureBox.vue'
// import Technology from '@/components/Technology.vue'
// import TradeShow from '@/components/TradeShow.vue'
import ArticleToday from '@/components/ArticleToday.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import SiteMap from '@/components/SiteMap.vue'
import SideAdv from '@/components/SideAdv.vue'
import UpAdv from '@/components/UpAdv.vue'
// import Recommend from './components/Recommend.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Home',
  components: {
    PageContent,
    Title,
    Search,
    HotBox,
    FeatureBox,
    // TradeShow,
    ArticleToday,
    ReadingTop,
    // Recommend,
    SiteMap,
    SideAdv,
    UpAdv
  },
  setup() {
    const state = reactive({
      articleDetail: {},
      articleComments: []
    })
    const pageType = ref('')
    const readTop = ref([])
    const commentList = ref([])
    const hotList = ref([])
    const internationalNews = ref([])
    const professionNews = ref([])

    const modelRef = reactive({
      content: '',
      articleId: '',
      uid: Cookies.get('uid') as string
    })
    const rulesRef = reactive({
      content: [
        {
          required: true,
          trigger: 'blur',
          message: '评论内容不能为空'
        }
      ]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    const getCommentList = async (articleId: string, pageNo = 1, pageSize = 10) => {
      const { data = {} } = await article.articleComment({ articleId, pageNo, pageSize })
      state.articleComments = data.dataList
    }
    const onSubmit = () => {
      validate()
        .then(async () => {
          const { uid = '', content = '', articleId = '' } = toRaw(modelRef)
          if (!uid) {
            message.warning('请先登录', 2)
            return
          }
          await article.pulishComment({ uid, content, articleId })
          message.info('评论成功', 2)
          resetFields()
          getCommentList(articleId)
          console.log(toRaw(modelRef))
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    onMounted(async () => {
      const route = useRoute()
      const fromPage = (route.params.fromPage as string) || '1'
      pageType.value = fromPage
      const articleId = route.params.articleId as string
      modelRef.articleId = articleId
      const allData = [
        { name: '阅读排行', type: fromPage, hot: '1', pageSize: 7 },
        { name: '评论排行', type: fromPage, hot: '1', pageSize: 7 },
        { name: '实时热点', type: fromPage, hot: '1', pageSize: 7 },
        { name: '国际风云', type: '25', hot: '1', pageSize: 7 },
        { name: '专栏分享', type: '5', sortType: '1', pageSize: 5 }
      ]
      const fetchList = allData.map(ele => article.getArticleList({ pageNo: 1, ...ele }))
      const { data = {} } = await article.articleDetail({ articleId })
      state.articleDetail = data
      Promise.all(fetchList).then(res => {
        const allDataList = res.map(ele => ele.data.dataList || [])
        console.log(allDataList)
        readTop.value = allDataList[0]
        commentList.value = allDataList[1]
        hotList.value = allDataList[2]
        internationalNews.value = allDataList[3]
        professionNews.value = allDataList[4]
      })
      getCommentList(articleId)
    })

    return {
      state,
      readTop,
      commentList,
      hotList,
      internationalNews,
      professionNews,
      pageType,
      resetFields,
      validate,
      modelRef,
      validateInfos,
      onSubmit
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.article-detail-box {
  .article-detail-paragraph {
    padding-top: 20px;
    .article-detail-title {
      font-size: 28px;
      line-height: 40px;
    }
    .article-detail-time {
      color: #707070;
      padding: 15px 0;
    }
    .article-detail-content {
      line-height: 25px;
      padding: 10px 0;
      overflow: hidden;
      img {
        max-width: 100%;
      }
    }
    .article-editor {
      text-align: right;
      font-weight: bold;
      padding: 10px 0;
    }
  }
  .article-share {
    padding: 20px 0;
  }
  .article-between {
    line-height: normal;
    .prev-article {
      border-bottom: 1px solid #707070;
    }
    .related {
      padding: 10px 0;
    }
  }
}
.gap {
  padding-bottom: 30px;
}
</style>
