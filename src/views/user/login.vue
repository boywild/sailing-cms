<template>
  <div class="page-wrapper">
    <div class="login-page">
      <Head></Head>
      <SubmitBaseInfo form-type="login"></SubmitBaseInfo>
      <SiteMap></SiteMap>
      <PageCopyRight></PageCopyRight>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SiteMap from '@/components/SiteMap.vue'
import PageCopyRight from '@/layout/components/PageCopyRight.vue'
import Head from './components/Head.vue'
import SubmitBaseInfo from './components/SubmitBaseInfo.vue'
export default defineComponent({
  name: 'Login',
  components: { SiteMap, PageCopyRight, Head, SubmitBaseInfo }
})
</script>
<style lang="scss"></style>
