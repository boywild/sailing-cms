<template>
  <div class="page">
    <PageTopBar></PageTopBar>
    <div class="page-wrapper">
      <PageHeader></PageHeader>
      <PageNav></PageNav>
      <PageSubNav></PageSubNav>
      <router-view />
      <PageCopyRight></PageCopyRight>
    </div>
    <BackTop><UpSquareFilled :style="{ fontSize: '50px', color: '#4669b1' }"/></BackTop>
  </div>
</template>

<script lang="ts">
import { BackTop } from 'ant-design-vue'
import { UpSquareFilled } from '@ant-design/icons-vue'
import PageTopBar from './components/PageTopBar.vue'
import PageHeader from './components/PageHeader.vue'
import PageNav from './components/PageNav.vue'
import PageSubNav from './components/PageSubNav.vue'
import PageCopyRight from './components/PageCopyRight.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutArticle',
  components: {
    BackTop,
    UpSquareFilled,
    PageTopBar,
    PageHeader,
    PageNav,
    PageSubNav,
    PageCopyRight
  },
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss"></style>
