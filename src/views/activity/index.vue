<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <TradeComing class="mgb20"></TradeComing>
      <Title name="要闻" subName="news"></Title>
      <ArticleList :list="list"></ArticleList>
    </template>
    <template #side>
      <InnerSide></InnerSide>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import Title from '@/components/Title.vue'
import InnerSide from '@/components/InnerSide.vue'
import ArticleList from '@/components/ArticleList.vue'
import TradeComing from '@/components/TradeComing.vue'
import SiteMap from '@/components/SiteMap.vue'
export default defineComponent({
  name: 'Activity',
  components: { PageContent, ImgLazy, Title, InnerSide, ArticleList, TradeComing, SiteMap },
  data() {
    return {
      list: [
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        },
        {
          title: '【航情观察】韩国进出口银行“加码”资助造船业',
          desc: '由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向 全球市场发布',
          from: '信德海事 ',
          time: '2020-05-27 15:33'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped></style>
