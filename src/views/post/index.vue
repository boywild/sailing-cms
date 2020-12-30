<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="article-detail-box gap">
        <Title></Title>
        <div class="article-detail-paragraph">
          <div class="article-detail-title">
            {{ state.articleDetail.title }}
          </div>
          <div class="article-detail-time">{{ state.articleDetail.createDate }}</div>
          <div class="article-detail-content">
            {{ state.articleDetail.content }}
          </div>
          <div class="article-editor">文章编辑：信德海事</div>
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
        <Technology
          :showTitle="false"
          :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
        ></Technology>
        <TradeShow class="mgb15" before="点击" after="排行" :content="tradeList"></TradeShow>
        <ReadingTop class="mgb15" before="阅读" after="排行" :content="readingTop"></ReadingTop>
        <HotBox class="mgb20" before="实时" after="热点" :main="hotMain" :list="hotList"></HotBox>
        <ArticleToday class="mgb20"></ArticleToday>
        <FeatureBox before="专栏" after="分享" :content="featureList"></FeatureBox>
      </div>
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
import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import HotBox from '@/components/HotBox.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import Technology from '@/components/Technology.vue'
import TradeShow from '@/components/TradeShow.vue'
import ArticleToday from '@/components/ArticleToday.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import SiteMap from '@/components/SiteMap.vue'
// import Recommend from './components/Recommend.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Home',
  components: {
    PageContent,
    ImgLazy,
    Title,
    Search,
    HotBox,
    FeatureBox,
    Technology,
    TradeShow,
    ArticleToday,
    ReadingTop,
    // Recommend,
    SiteMap
  },
  setup() {
    const state = reactive({
      articleDetail: {}
    })
    onMounted(async () => {
      const route = useRoute()
      const { data = {} } = await article.articleDetail({ articleId: route.params.articleId as string })
      state.articleDetail = data
    })
    return {
      state
    }
  },
  data() {
    return {
      articles: [1, 2, 3, 4, 5],
      categoryList: [
        {
          banner: '',
          category: [
            { catName: '航情', title: '会展业按下重启键 SHIPTEC助力企业线上新商机', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '招聘', title: '会展业会展业按下重启键 SHIPTEC助力企业线上', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '活动', title: '宁波市政府携手英富曼会展创办宁波海博会', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '专栏', title: '奖征集 | 纪念陈嘉庚先生创办集美航海教育', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '图片', title: '第三期“海仲云讲坛”线上讲座成功举办', from: '信德海事', time: '2020-05-27 15:33' }
          ]
        },
        {
          banner: '1',
          category: [
            { catName: '视频', title: '2020集装箱多式联运亚洲展将于2021年3月16', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '造船', title: '会展业按下重启键 SHIPTEC助力企业线上新', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '交易', title: '第二期“海仲云讲坛”线上讲座成功举办', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '港口', title: '欢迎参加！YPSN 都市之夜Metro Night', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '海员', title: '大连海事大学港澳校友会成功举办“2020春天', from: '信德海事', time: '2020-05-27 15:33' }
          ]
        },
        {
          banner: '2',
          category: [
            { catName: '企业', title: '拖航到半路被拖船断裂沉没引起的纠缠', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '人物', title: '嘉年华邮轮公司与沙特主权财富基金之间的交', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '技术', title: '水上交通事故认定书等海事调查结论是否可诉', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '安全', title: '水上交通事故认定书等海事调查结论是否可诉', from: '信德海事', time: '2020-05-27 15:33' },
            { catName: '政策', title: '一家船代公司集体跑路了..........警惕航运欺诈', from: '信德海事', time: '2020-05-27 15:33' }
          ]
        },
        {
          banner: '3',
          category: [{ catName: '金融', title: '国际邮轮公司最新复工时间表', from: '信德海事', time: '2020-05-27 15:33' }]
        }
      ],
      tradeList: [
        { title: '2020（第十四届）干散货海运峰会', time: '2020年7月2-3日', location: '上海（详询会' },
        { title: '会展业按下重启键 SHIPTEC助力企业线上新' },
        { title: '宁波市政府携手英富曼会展创办宁波海博' },
        { title: '有奖征集 | 纪念陈嘉庚先生创办集美航海' },
        { title: '第三期“海仲云讲坛”线上讲座成功举办' },
        { title: '2020集装箱多式联运亚洲展将于2021年3月' }
      ],
      readingTop: [
        { title: '拆船厂或即将复工！史上被拆解的最大集' },
        { title: '3条船“刮船底”后，猜猜能够节省多少' },
        { title: '【头条】淡马锡挺身救太平船务' },
        { title: '进口限制愈演愈烈 澳煤企寻求中国以外亚' },
        { title: 'APL箱船大风浪中40箱子落水，本航次从中' },
        { title: '希腊船东航运公司Central Group进入超大型油' },
        { title: '需求受阻！沙特阿美暂停12艘LNG新造船建' }
      ],
      hotMain: [
        { title: '大连海事大学原党委书记王昭翮调任中国农业', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' }
      ],
      hotList: [
        { title: '大连海事大学原党委书记王昭翮调任中国农业', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司！', img: '' },
        { title: '董家口海事局成立', img: '' },
        { title: '王永新先生担任招商轮船总经理', img: '' },
        { title: '海员请注意：关于海事综合服务平台密码', img: '' }
      ],
      featureList: [
        { title: '拉番轮大豆热损案定损数学模 式“科学性”论证', from: '信德海事网', img: '' },
        { title: '海洋光谱号为何被称为超量子 级邮轮？', from: '信德海事网', img: '' },
        { title: '使用低硫油的相关规定', from: '信德海事网', img: '' },
        { title: '1999-2017海运进口大豆热损 损失认定案例综述', from: '信德海事网', img: '' },
        { title: 'IMO第101届海安会概况', from: '信德海事网', img: '' }
      ]
    }
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
      color: #707070;
      line-height: 25px;
      padding: 10px 0;
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
