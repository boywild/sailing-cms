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
      <div class="imglib-hot">
        <Title2 class="mgb20" before="实时" after="热点"></Title2>
        <div class="imglig-hot-list">
          <PreviewArticle v-for="(item, index) in hotMain" :key="index" :content="item"></PreviewArticle>
        </div>
      </div>
      <div class="imglib-hot">
        <Title2 class="mgb20" before="实时" after="热点"></Title2>
        <div class="imglig-hot-important">
          <div class="hot-important-preview mgb20">
            <ImgLazy width="315" height="201"></ImgLazy>
            <div class="title">一个“横漂”的自我修养</div>
          </div>
          <div class="hot-important-preview">
            <ImgLazy width="315" height="201"></ImgLazy>
            <div class="title">一个“横漂”的自我修养</div>
          </div>
        </div>
      </div>
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
import Title2 from '@/components/Title2.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import ImglibColumn from './components/ImglibColumn.vue'
import SiteMap from '@/components/SiteMap.vue'
import PreviewArticle from '@/components/PreviewArticle.vue'
export default defineComponent({
  name: 'ImageLib',
  components: { PageContent, ImgLazy, Title, Title2, Search, Technology, ImglibColumn, SiteMap, PreviewArticle },
  data() {
    return {
      imglibList: [
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' },
        { name: 'Stena Line:在减排方面...', img: '' }
      ],
      hotMain: [
        { title: '大连海事大学原党委书记王昭翮调任中国农业', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' },
        { title: '重磅！中国石化集团改制为国有独资公司', img: '' }
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
.imglig-hot-list {
  @include flex(space-between);
  flex-wrap: wrap;
  .preview-article {
    margin: 0 0 15px 0;
  }
}
.imglig-hot-important {
  .hot-important-preview {
    .title {
      font-size: $text-size-middle;
      font-weight: bold;
      line-height: 50px;
      @include text-overflow();
    }
  }
}
</style>
