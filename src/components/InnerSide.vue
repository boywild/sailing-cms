<template>
  <div class="inner-side">
    <Search class="mgb15"></Search>
    <Technology
      :showTitle="false"
      :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
    ></Technology>
    <ReadingTop class="mgb15" before="阅读" after="排行" :content="readingTop"></ReadingTop>
    <HotBox class="mgb20" before="热点" after="资讯" :main="hotMain" :list="hotList"></HotBox>
    <TopRank class="mgb20" :content="topRankList"></TopRank>
    <FeatureBox before="热点" after="专题" :content="featureList"></FeatureBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import HotBox from '@/components/HotBox.vue'
import TopRank from '@/components/TopRank.vue'
import FeatureBox from '@/components/FeatureBox.vue'

export default defineComponent({
  name: 'InnerSide',
  components: { Search, Technology, ReadingTop, HotBox, FeatureBox, TopRank },
  props: {},
  data() {
    return {
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
      ],
      topRankList: [
        { title: '拆船厂或即将复工！史上被拆解的最大集' },
        { title: '33条船“刮船底”后，猜猜能够节省多少' },
        { title: '【头条】淡马锡挺身救太平船务' },
        { title: '进口限制愈演愈烈 澳煤企寻求中国以外亚' },
        { title: '【航情观察】Wilson联手Arkon，欧洲近...' },
        { title: '【船舶管理】全球最大的集装箱船HMM ...' },
        { title: '【航情观察】大宇造船交付全球最大智能集...' },
        { title: '【航情观察】孟加拉国强制要求船公司减免...' }
      ]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-title {
  @include flex(flex-start);
  border-top: 2px solid #666666;
  position: relative;
  padding: 7px 0 0 0;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2px;
    width: 114px;
    height: 5px;
    background: $theme-red;
    z-index: 3;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -2px;
    left: 109px;
    border-width: 5px 5px 0 0;
    border-style: solid;
    border-color: $theme-red #fff transparent transparent;
    z-index: 4;
  }
  .zh-name {
    font-size: $text-size-big;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 25px;
    color: $theme-blue;
  }
  .en-name {
    font-size: $text-size-small;
    color: #acacac;
    text-transform: uppercase;
    margin-left: 15px;
  }
}
</style>
