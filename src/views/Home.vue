<template>
  <PageContent>
    <template #banner>
      <Img class="mgb15" height="118" />
    </template>
    <template #content>
      <div class="home-banner mgb15"></div>
      <Img class="mgb15" height="118" />
      <div class="article-box">
        <Title></Title>
        <div class="article-content">
          <div class="news-list">
            <div class="news-item">
              <Img class="mgb15" width="151" height="101" />
              <div class="new-info">
                <div class="title">世界最大船用双燃料发动机全球发布</div>
                <div class="desc">
                  由中国船舶自主研发的目前世界上最大的船用双燃料发动机昨天(26日)正式面向
                  全球市场发布
                </div>
                <div class="time">信德海事 2020-05-27 15:33</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Title2></Title2>
    </template>
    <template #side>
      <div>side</div>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import Img from '@/components/Img.vue'
import Title from '@/components/Title.vue'
import Title2 from '@/components/Title2.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PageContent,
    Img,
    Title,
    Title2
  }
})
</script>
<style lang="scss" scoped>
.home-banner {
  width: 656px;
  height: 319px;
  background: #eee;
}
</style>
