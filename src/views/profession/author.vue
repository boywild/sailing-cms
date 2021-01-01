<template>
  <PageContent>
    <template #content>
      <AuthorIntroduce :content="state.authorDetail"></AuthorIntroduce>
      <div class="authors-article mgb20">
        <Title name="最新" subName="new"></Title>
        <div class="auth-hot">
          <AuthArticle v-for="(item, index) in state.articleLIst" :key="index" :content="item" :thumbnail="false" page-type="5"></AuthArticle>
        </div>
      </div>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
      <Authors class="mgb20" before="全部" :content="authorList"></Authors>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageContent from '@/layout/components/PageContent.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import Authors from './components/Authors.vue'
import SiteMap from '@/components/SiteMap.vue'
import AuthArticle from './components/AuthArticle.vue'
import AuthorIntroduce from './components/AuthorIntroduce.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Author',
  components: { PageContent, Title, Search, Technology, Authors, AuthArticle, SiteMap, AuthorIntroduce },
  setup() {
    const state = reactive({
      authorDetail: {},
      articleLIst: []
    })
    const authorList = ref([])
    const pageType = ref('')

    onMounted(() => {
      const route = useRoute()
      const fromPage = (route.query.type as string) || '1'
      const authorId = route.params.authorId as string
      pageType.value = fromPage
      // 作者详情
      article.authorDetail(authorId).then(({ data = {} }) => {
        state.authorDetail = data
      })
      // 作者列表
      article.author({ pageNo: 1, pageSize: 30, hot: '1' }).then(({ data = {} }) => {
        authorList.value = data.dataList
      })
      // 作者的文章
      article.getArticleList({ pageNo: 1, pageSize: 30, authorId }).then(({ data = {} }) => {
        state.articleLIst = data.dataList
      })
    })
    return {
      state,
      authorList,
      pageType
    }
  },
  data() {
    return {
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
