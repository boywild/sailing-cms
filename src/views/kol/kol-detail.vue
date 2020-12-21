<template>
  <PageContent>
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="kol-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="kol-article-new">
          <AuthArticle v-for="(item, index) in authList" :key="index" :content="item"></AuthArticle>
        </div>
      </div>
    </template>
    <template #side>
      <div class="kol-detail">
        <Title2 class="mgb20" before="信德" after="会议"></Title2>
        <div class="kol-detail-info">
          <div class="name"><span>许立荣</span><span>简历</span></div>
          <ImgLazy width="221" height="282"></ImgLazy>
          <div class="short-intro">许立荣 中国远洋海运集团有限公司党组书记、董事长许立荣 中国远洋海运集团有限公司党组书记、董事长</div>
          <div class="short-desc">
            毕业于大连海事大学远洋船舶驾驶专业、上海海运学院与荷兰马斯特里赫特管理学院工商管理硕士，高级工程师。
            现任中国远洋海运集团有限公司党组书记、董事长。 2018年12月18日，党中央、国务院授予许立荣同志改革先锋称号，颁授改革先锋奖章。
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import SiteMap from '@/components/SiteMap.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import AuthArticle from '@/views/profession/components/AuthArticle.vue'
export default defineComponent({
  name: 'Kol',
  components: { PageContent, SiteMap, ImgLazy, Title, Title2, AuthArticle },
  data() {
    return {
      kolList: [
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' }
      ],
      authList: [
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
.kol-article-new {
  .auth-article {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
