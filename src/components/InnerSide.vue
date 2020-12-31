<template>
  <div class="inner-side">
    <Search class="mgb15"></Search>
    <Technology
      :showTitle="false"
      :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
    ></Technology>
    <ReadingTop class="mgb15" before="阅读" after="排行" :content="readTop" :page-type="pageType"></ReadingTop>
    <HotBox class="mgb20" before="热点" after="资讯" :main="hotList.slice(0, 2)" :list="hotList.slice(2)" :page-type="pageType"></HotBox>
    <TopRank class="mgb20" :content="commentList" :page-type="pageType"></TopRank>
    <FeatureBox before="热点" after="专题" :content="professionList" :page-type="pageType"></FeatureBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import ReadingTop from '@/components/ReadingTop.vue'
import HotBox from '@/components/HotBox.vue'
import TopRank from '@/components/TopRank.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import article from '@/api/article'

export default defineComponent({
  name: 'InnerSide',
  components: { Search, Technology, ReadingTop, HotBox, FeatureBox, TopRank },
  props: {},
  setup() {
    const readTop = ref([]) // 阅读排行
    const hotList = ref([]) // 热点资讯
    const commentList = ref([]) // 评论排行
    const professionList = ref([]) // 热点专题
    const pageType = ref('') // 热点专题

    onMounted(() => {
      const route = useRoute()
      const queryType = (route.query.type as string) || '1'
      pageType.value = queryType
      const allData = [
        { name: '阅读排行', type: queryType, sortType: '2', pageSize: 7 },
        { name: '热点资讯', type: queryType, hot: '1', pageSize: 7 },
        { name: '评论排行', type: queryType, sortType: '3', pageSize: 8 },
        { name: '热点专题', type: '5', hot: '1', pageSize: 5 }
      ]
      const fetchList = allData.map((ele) => article.getArticleList({ pageNo: 1, ...ele }))
      Promise.all(fetchList).then((res) => {
        const allDataList = res.map((ele) => ele.data.dataList || [])
        readTop.value = allDataList[0]
        hotList.value = allDataList[1]
        commentList.value = allDataList[2]
        professionList.value = allDataList[3]
      })
    })
    return {
      readTop,
      hotList,
      commentList,
      professionList,
      pageType
    }
  },
  data() {
    return {}
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
