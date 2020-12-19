<template>
  <PageContent>
    <template #content>
      <WonderfulMsg></WonderfulMsg>
      <div class="authors-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="auth-hot">
          <AuthArticle v-for="(item, index) in authArticle" :key="index" :content="item"></AuthArticle>
        </div>
      </div>
      <Focusing></Focusing>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
      <Authors class="mgb20" :content="authors"></Authors>
      <TopRank class="mgb20" :content="topRankList"></TopRank>
      <FeatureBox before="热点" after="专题" :content="featureList"></FeatureBox>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import TopRank from '@/components/TopRank.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import WonderfulMsg from './components/WonderfulMsg.vue'
import Authors from './components/Authors.vue'
import AuthArticle from './components/AuthArticle.vue'
import Focusing from './components/Focusing.vue'
import SiteMap from '@/components/SiteMap.vue'
export default defineComponent({
  name: 'Home',
  components: { PageContent, Title, Search, Technology, TopRank, FeatureBox, WonderfulMsg, Authors, AuthArticle, Focusing, SiteMap },
  data() {
    return {
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
      ],
      authors: [
        { name: '王勇', img: '' },
        { name: '刘颖钊', img: '' },
        { name: '胡月祥', img: '' },
        { name: '徐剑华', img: '' },
        { name: '谢燮', img: '' },
        { name: '王博', img: '' },
        { name: '田明辉', img: '' },
        { name: '王磊', img: '' },
        { name: '孙士森', img: '' }
      ],
      authArticle: [
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        },
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        },
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        },
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        },
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        },
        {
          title: '邮轮撤走母港看中国海上旅游的前景',
          from: '王勇',
          time: '06月28日 11:28',
          desc: '港口会回归繁忙 航线会重返有序 货舱里的各色集装箱 和道路上飞驰的集卡车 都会一如往常 假如你是...'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.authors-article {
  padding-top: 30px;
}
.auth-hot {
  .auth-article {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
