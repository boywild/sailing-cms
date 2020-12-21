<template>
  <PageContent class="mgb15">
    <template #banner>
      <!-- <div v-html="decode(topArticles[0] && topArticles[0].article.content)"></div> -->
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="home-banner mgb15"></div>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
      <div class="article-box">
        <Title name="新闻速递" sub-name="news"></Title>
        <div class="article-content">
          <div class="news-list">
            <div class="news-item" v-for="(article, index) in articles" :key="index">
              <ImgLazy width="151" height="101"></ImgLazy>
              <div class="new-info">
                <router-link :to="{ name: 'post', params: { id: 1 } }" class="title">
                  <div class="t-txt">世界最大船用双燃料发动机全球发布</div>
                  <div class="t-comment">2</div>
                </router-link>
                <div class="desc">由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布</div>
                <div class="time">信德海事 2020-05-27 15:33</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #side>
      <div>
        <Search class="mgb15"></Search>
        <Technology
          :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
        ></Technology>
        <TradeShow class="mgb15" before="活动" after="会展" :content="tradeList"></TradeShow>
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
        <ReadingTop class="mgb15" before="阅读" after="排行" :content="readingTop"></ReadingTop>
        <ImgLazy class="mgb15" height="92"></ImgLazy>
        <ImgLazy height="92"></ImgLazy>
      </div>
    </template>
  </PageContent>
  <PageContent>
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
        <HotBox class="mgb20" before="国内" after="热点" :main="hotMain" :list="hotList"></HotBox>
        <ArticleToday class="mgb20"></ArticleToday>
        <HotBox class="mgb20" before="活动" after="热点" :main="hotMain" :list="hotList"></HotBox>
        <HotBox class="mgb20" before="航情" after="热点" :main="hotMain" :list="hotList"></HotBox>
        <FeatureBox before="专栏" after="分享" :content="featureList"></FeatureBox>
      </div>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
import Test from '@/api/test'
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
    ReadingTop
  },
  setup() {
    const topArticles = ref([])
    onMounted(async () => {
      // const { data = [] } = await Test.queryTaskStatus()
      const { data = [] } = await article.getCategoryList()
      console.log(data)
      topArticles.value = data
    })
    console.log(topArticles)
    return {
      topArticles
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
.home-banner {
  width: 656px;
  height: 319px;
  background: #eee;
}
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
