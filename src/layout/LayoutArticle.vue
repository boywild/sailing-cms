<template>
  <div class="page">
    <PageTopBar></PageTopBar>
    <div class="page-wrapper">
      <PageHeader></PageHeader>
      <PageNav></PageNav>
      <PageSubNav></PageSubNav>
      <router-view />
      <PageFooter></PageFooter>
      <PageCopyRight></PageCopyRight>
    </div>
  </div>
</template>

<script lang="ts">
import PageTopBar from './components/PageTopBar.vue'
import PageHeader from './components/PageHeader.vue'
import PageNav from './components/PageNav.vue'
import PageSubNav from './components/PageSubNav.vue'
import PageFooter from './components/PageFooter.vue'
import PageCopyRight from './components/PageCopyRight.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutArticle',
  components: {
    PageTopBar,
    PageHeader,
    PageNav,
    PageSubNav,
    PageFooter,
    PageCopyRight
  },
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss"></style>
