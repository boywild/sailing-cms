<template>
  <PageContent>
    <template #content>
      <AuthorIntroduce></AuthorIntroduce>
      <div class="authors-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="auth-hot">
          <AuthArticle v-for="(item, index) in authArticle" :key="index" :content="item" :thumbnail="false"></AuthArticle>
        </div>
      </div>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
      <Authors class="mgb20" before="全部" :content="authors"></Authors>
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
import Authors from './components/Authors.vue'
import SiteMap from '@/components/SiteMap.vue'
import AuthArticle from './components/AuthArticle.vue'
import AuthorIntroduce from './components/AuthorIntroduce.vue'
export default defineComponent({
  name: 'Home',
  components: { PageContent, Title, Search, Technology, Authors, AuthArticle, SiteMap, AuthorIntroduce },
  data() {
    return {
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
