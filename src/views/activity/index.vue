<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content> </template>
    <template #side>
      <InnerSide></InnerSide>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import ImgLazy from '@/components/ImgLazy.vue'
import InnerSide from '@/components/InnerSide.vue'

export default defineComponent({
  name: 'Activity',
  components: { PageContent, ImgLazy, InnerSide },
  data() {
    return {}
  }
})
</script>
<style lang="scss" scoped></style>
