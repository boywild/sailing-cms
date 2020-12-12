<template>
  <PageContent>
    <template #banner>
      <Img class="mgb15" height="118" />
    </template>
    <template #content>
      <div class="home-banner mgb15"></div>
      <Img class="mgb15" height="118" />
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

export default defineComponent({
  name: 'Home',
  components: {
    PageContent,
    Img
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
