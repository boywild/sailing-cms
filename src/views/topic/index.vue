<template>
  <PageContentThrough>
    <template #content>
      <div class="topic-box mgb20">
        <div class="topic-cat" v-for="(item, index) in state.topicList" :key="index">
          <Title :name="item.title" direction="top">
            <template #right>
              <router-link
                target="_blank"
                :to="{ name: 'topicItem', query: { type: '20', cat: item.topicId, name: item.title } }"
                class="show-more"
                >更多>></router-link
              >
            </template>
          </Title>
          <div class="topic-row">
            <router-link
              target="_blank"
              :to="{ name: 'post', params: { articleId: article.articleId, fromPage: '20' } }"
              class="topic-col"
              v-for="(article, index) in item.articleList.slice(0, 3)"
              :key="index"
            >
              <ImgLazy width="135" height="92" :src="article.image"></ImgLazy>
              <div class="title">{{ article.title }}</div>
            </router-link>
            <a-empty v-if="!item.articleList.length" description="暂无数据" />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContentThrough>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageContentThrough from '@/layout/components/PageContentThrough.vue'
import SiteMap from '@/components/SiteMap.vue'
import Title from '@/components/Title.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Topic',
  components: { PageContentThrough, SiteMap, Title, ImgLazy },
  setup() {
    const state = reactive({
      topicList: [],
      fromPage: ''
    })

    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const fromPage = route.query.type as string
      state.fromPage = fromPage
      article.topic().then(({ data = {} }) => {
        console.log(data)
        state.topicList = data.dataList
      })
      // getList()
    })
    return {
      state
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.show-more {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: $theme-blue;
  font-weight: bold;
  z-index: 5;
}
.topic-box {
  @include flex(space-between);
  flex-wrap: wrap;
  .topic-cat {
    width: 489px;
    box-shadow: 0 0 1px rgba($color: #707070, $alpha: 0.4);
    margin-bottom: 20px;
    .article-title {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
    }
    .topic-row {
      padding: 20px 24px;
      min-height: 170px;
      @include flex(space-between);
      .topic-col {
        width: 135px;
        overflow: hidden;
        .title {
          font-size: $text-size-small;
          padding-top: 10px;
          @include text-overflow();
        }
      }
      .ant-empty {
        margin: 0 auto;
      }
    }
  }
}
</style>
