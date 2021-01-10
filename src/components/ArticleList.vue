<template>
  <div class="article-preview-list">
    <template v-for="(item, index) in list" :key="index">
      <ArticleItem :content="item" :page-type="pageType"></ArticleItem>
      <ImgLazy v-if="isShowDdv(index)" height="118"></ImgLazy>
    </template>
    <a-empty v-if="!list.length" description="暂无数据" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ArticleItem from './ArticleItem.vue'
import ImgLazy from './ImgLazy.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'ArticleList',
  components: { ArticleItem, ImgLazy },
  props: {
    list: { type: Array, default: () => [] },
    pageType: { type: String, default: () => '' },
    showAdv: { type: Boolean, default: () => false }
  },
  setup(props) {
    const route = useRoute()
    const fromPageQuery = route.query.type as string
    // 位置 1顶部 2中部 3底部 4右侧
    const advList = ref([])
    const getArticleAdv = async () => {
      const { data = {} } = await article.advList(fromPageQuery, '3')
      advList.value = data.dataList
    }
    onMounted(() => {
      props.showAdv && getArticleAdv()
    })
    return { advList }
  },
  methods: {
    isShowDdv(index: number) {
      return this.showAdv && (index + 1) % 5 === 0 && this.advList[index]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-preview-list {
  .article-preview-item {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
