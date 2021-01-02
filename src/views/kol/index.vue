<template>
  <PageContentThrough>
    <template #content>
      <div class="kol-list">
        <router-link
          :to="{ name: 'kolDetail', params: { authorId: item.authorId, fromPage: '21' } }"
          class="kol"
          v-for="(item, index) in state.kolList"
          :key="index"
        >
          <ImgLazy width="200" height="121" :src="item.photo"></ImgLazy>
          <div class="kol-name">{{ item.username }}</div>
          <div class="kol-desc">{{ item.job }}</div>
        </router-link>
        <a-button class="mgb20" block :loading="state.loadingMore" @click="getList" :disabled="state.pageNo > state.totalPage">
          {{ state.pageNo > state.totalPage ? '没有更多了' : '加载更多' }}
        </a-button>
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
import ImgLazy from '@/components/ImgLazy.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Kol',
  components: { PageContentThrough, SiteMap, ImgLazy },
  setup() {
    const state = reactive({
      kolList: [],
      videoHotList: [],
      fromPage: '',
      pageNo: 1,
      totalPage: 1,
      showMoreBtn: false,
      loadingMore: false
    })
    const getList = () => {
      if (state.pageNo > state.totalPage) return
      state.loadingMore = true
      article.leader({ pageNo: state.pageNo, pageSize: 16 }).then(({ data = {} }) => {
        state.kolList = state.kolList.concat(data.dataList)
        state.totalPage = data.totalPage
        state.loadingMore = false
        state.pageNo += 1
      })
    }
    onMounted(() => {
      // const { data = [] } = await Test.queryTaskStatus()
      const route = useRoute()
      const fromPage = route.query.type as string
      state.fromPage = fromPage
      getList()
    })
    return {
      state,
      getList
    }
  },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.kol-list {
  @include flex(flex-start);
  flex-wrap: wrap;
  .kol {
    width: 200px;
    margin: 10px 0 10px 63px;
    &:nth-child(4n-3) {
      margin-left: 0;
    }
    .kol-name {
      font-weight: bold;
      font-size: 20px;
      padding: 5px 0 5px 0;
    }
    .kol-desc {
      font-size: $text-size-small;
      color: $text-light-color2;
      @include text-overflow();
    }
  }
}
</style>
