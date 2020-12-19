<template>
  <PageContent class="mgb15">
    <template #banner>
      <ImgLazy class="mgb15" height="118"></ImgLazy>
    </template>
    <template #content>
      <div class="imglib-banner mgb20"></div>
      <Title class="mgb20" name="实时热点" direction="top"></Title>
      <ImglibColumn :list="imglibList"></ImglibColumn>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
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
import Title from '@/components/Title.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import ImglibColumn from './components/ImglibColumn.vue'
import SiteMap from '@/components/SiteMap.vue'
export default defineComponent({
  name: 'ImageLib',
  components: { PageContent, ImgLazy, Title, Search, Technology, ImglibColumn, SiteMap },
  data() {
    return {
      imglibList: [
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.imglib-banner {
  width: 100%;
  height: 418px;
  background: #eee;
}
</style>
