<template>
  <PageContentThrough>
    <template #content>
      <div class="topic-box mgb20">
        <div class="topic-cat" v-for="(item, index) in topicList" :key="index">
          <Title :name="item.title" direction="top">
            <template #right>
              <router-link to="/" class="show-more">更多>></router-link>
            </template>
          </Title>
          <div class="topic-row">
            <router-link to="/" class="topic-col">
              <ImgLazy width="135" height="92"></ImgLazy>
              <div class="title">Stena Line:在减排方面...</div>
            </router-link>
            <router-link to="/" class="topic-col">
              <ImgLazy width="135" height="92"></ImgLazy>
              <div class="title">Stena Line:在减排方面...</div>
            </router-link>
            <router-link to="/" class="topic-col">
              <ImgLazy width="135" height="92"></ImgLazy>
              <div class="title">Stena Line:在减排方面...</div>
            </router-link>
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
import { defineComponent } from 'vue'
import PageContentThrough from '@/layout/components/PageContentThrough.vue'
import SiteMap from '@/components/SiteMap.vue'
import Title from '@/components/Title.vue'
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Topic',
  components: { PageContentThrough, SiteMap, Title, ImgLazy },
  data() {
    return {
      topicList: [
        { title: '绿色航运' },
        { title: '智能航运' },
        { title: '航运安全' },
        { title: '船舶建造' },
        { title: '船舶交易' },
        { title: '港口咨询' },

        { title: '海员频道' },
        { title: '海上保安' },
        { title: '航运企业' },
        { title: '航届人物' },
        { title: '疫情防控' },
        { title: '天气播报' }
      ]
    }
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
    }
  }
}
</style>
