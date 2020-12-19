<template>
  <PageContentThrough>
    <template #content>
      <div class="kol-list">
        <router-link to="/" class="kol" v-for="(item, index) in kolList" :key="index">
          <ImgLazy width="200" height="121"></ImgLazy>
          <div class="kol-name">{{ item.name }}</div>
          <div class="kol-desc">{{ item.desc }}</div>
        </router-link>
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
import ImgLazy from '@/components/ImgLazy.vue'
export default defineComponent({
  name: 'Kol',
  components: { PageContentThrough, SiteMap, ImgLazy },
  data() {
    return {
      kolList: [
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' },
        { name: '许立荣', desc: '中国远洋海运集团有限公司党', img: '' }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.kol-list {
  @include flex(space-between);
  flex-wrap: wrap;
  .kol {
    width: 200px;
    margin-bottom: 20px;
    .kol-name {
      font-weight: bold;
      font-size: 20px;
      padding: 5px 0 5px 0;
    }
    .kol-desc {
      font-size: $text-size-small;
      color: $text-light-color2;
      @include text-overflow();
    }
  }
}
</style>
