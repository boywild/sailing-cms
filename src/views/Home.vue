<template>
  <PageContent>
    <template #banner>
      <Img class="mgb15" height="118" />
    </template>
    <template #content>
      <div class="home-banner mgb15"></div>
      <Img class="mgb15" height="118" />
      <div class="article-box">
        <Title name="新闻速递" sub-name="news"></Title>
        <div class="article-content">
          <div class="news-list">
            <div
              class="news-item"
              v-for="(article, index) in articles"
              :key="index"
            >
              <Img width="151" height="101" />
              <div class="new-info">
                <div class="title">
                  <div class="t-txt">世界最大船用双燃料发动机全球发布</div>
                  <div class="t-comment">2</div>
                </div>
                <div class="desc">
                  由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向
                  全球市场发布
                </div>
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
        <div class="new-technology">
          <div class="new-info mgb15">
            <Img height="96" />
            <div class="new-desc">ALFA LAVAL——压载水处理的信心之选</div>
          </div>
          <div class="new-info mgb15">
            <Img height="96" />
            <div class="new-desc">ALFA LAVAL——压载水处理的信心之选</div>
          </div>
        </div>
        <div class="trade-show">
          <Title2 before="活动" after="会展"></Title2>
          <div class="trade-list">
            <div
              class="trade-topic"
              v-for="(item, index) in tradeList"
              :key="index"
            >
              <div class="title">{{ item.title }}</div>
              <div class="trade-info" v-if="item.time">
                会议时间：{{ item.time }} 会议地点：{{ item.location }}
              </div>
            </div>
          </div>
        </div>
        <div class="reading-top">
          <Title2 before="阅读" after="排行"></Title2>
          <div class="reading-list">
            <div
              class="reading-title"
              v-for="(item, index) in readingTop"
              :key="index"
            >
              <router-link to="/">
                <span class="num">{{ index + 1 }}</span>
                <span class="content">{{ item.title }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageContent>
  <PageContent>
    <template #banner>
      <Img class="mgb15" height="118" />
    </template>
    <template #content>
      <div
        class="category-box mgb15"
        v-for="(area, index) in categoryList"
        :key="index"
      >
        <Img class="mgb15" height="118" v-if="area.banner" />
        <div class="category-content">
          <div class="category-list">
            <div
              class="category-item"
              v-for="(item, index) in area.category"
              :key="index"
            >
              <Img width="151" height="101" />
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
      <div>side</div>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import Img from '@/components/Img.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'
import Search from '@/components/Search.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PageContent,
    Img,
    Title,
    Title2,
    Search
  },
  data() {
    return {
      articles: [1, 2, 3, 4, 5],
      categoryList: [
        {
          banner: '',
          category: [
            {
              catName: '航情',
              title: '会展业按下重启键 SHIPTEC助力企业线上新商机',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '招聘',
              title: '会展业会展业按下重启键 SHIPTEC助力企业线上',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '活动',
              title: '宁波市政府携手英富曼会展创办宁波海博会',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '专栏',
              title: '奖征集 | 纪念陈嘉庚先生创办集美航海教育',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '图片',
              title: '第三期“海仲云讲坛”线上讲座成功举办',
              from: '信德海事',
              time: '2020-05-27 15:33'
            }
          ]
        },
        {
          banner: '1',
          category: [
            {
              catName: '视频',
              title: '2020集装箱多式联运亚洲展将于2021年3月16',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '造船',
              title: '会展业按下重启键 SHIPTEC助力企业线上新',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '交易',
              title: '第二期“海仲云讲坛”线上讲座成功举办',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '港口',
              title: '欢迎参加！YPSN 都市之夜Metro Night',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '海员',
              title: '大连海事大学港澳校友会成功举办“2020春天',
              from: '信德海事',
              time: '2020-05-27 15:33'
            }
          ]
        },
        {
          banner: '2',
          category: [
            {
              catName: '企业',
              title: '拖航到半路被拖船断裂沉没引起的纠缠',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '人物',
              title: '嘉年华邮轮公司与沙特主权财富基金之间的交',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '技术',
              title: '水上交通事故认定书等海事调查结论是否可诉',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '安全',
              title: '水上交通事故认定书等海事调查结论是否可诉',
              from: '信德海事',
              time: '2020-05-27 15:33'
            },
            {
              catName: '政策',
              title: '一家船代公司集体跑路了..........警惕航运欺诈',
              from: '信德海事',
              time: '2020-05-27 15:33'
            }
          ]
        },
        {
          banner: '3',
          category: [
            {
              catName: '金融',
              title: '国际邮轮公司最新复工时间表',
              from: '信德海事',
              time: '2020-05-27 15:33'
            }
          ]
        }
      ],
      tradeList: [
        {
          title: '2020（第十四届）干散货海运峰会',
          time: '2020年7月2-3日',
          location: '上海（详询会'
        },
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
      ]
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;
    .new-info {
      height: 101px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 0 0 15px;
      flex: 1;
      overflow: hidden;
      line-height: normal;
      .title {
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .t-txt {
          font-size: 18px;
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
        font-size: 12px;
        height: 36px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .time {
        font-size: 12px;
        color: #acacac;
      }
    }
  }
}
.category-list {
  .category-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;
    .category-info {
      height: 101px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 0 0 15px;
      flex: 1;
      overflow: hidden;
      line-height: normal;
      .category-top {
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .c-name {
          font-size: 18px;
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex: 1;
          color: #4669b1;
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
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        cursor: pointer;
      }
      .category-time {
        font-size: 12px;
        color: #acacac;
      }
    }
  }
}
.new-technology {
  .new-info {
    .new-desc {
      height: 25px;
      font-size: 12px;
      padding: 0 10px;
      background: #f7f8f9;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
.trade-list {
  .trade-topic {
    line-height: normal;
    padding: 5px 0;
    &:first-child {
      .title {
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 5px;
      }
    }
    .title {
      padding-left: 15px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #9a9a9a;
      }
    }
    .trade-info {
      color: #999999;
      font-size: 12px;
      padding-left: 15px;
    }
  }
}
.reading-list {
  .reading-title {
    line-height: 30px;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      .num {
        color: #ff0002;
      }
    }
    .num {
      font-size: 18px;
      font-weight: bold;
      color: #a5a5a5;
      margin-right: 10px;
    }
    .content {
    }
  }
}
</style>
