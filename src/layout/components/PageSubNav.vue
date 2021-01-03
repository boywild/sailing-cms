<template>
  <div class="page-sub-nav mgtb15">
    <router-link target="_blank"
      class="page-sub-nav-item"
      v-for="(item, index) in navList"
      :key="index"
      :to="{ name: item.link, query: { type: item.type } }"
    >
      {{ item.title }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNav',
  props: {
    msg: String
  },
  data() {
    return {
      navList: [
        { title: '会议', link: 'meeting', type: '16' },
        { title: '政策', link: '', type: '17' },
        { title: '金融', link: '', type: '18' },
        { title: '保险', link: '', type: '19' },
        { title: '专题', link: 'topic', type: '20' },
        { title: '领航', link: 'kol', type: '21' },
        { title: '学校', link: '', type: '22' },
        // { title: 'PSC', link: '', type: '23' },
        { title: 'ENGLISH', link: '', type: '23' },
        { title: '国内', link: '', type: '24' },
        { title: '国际', link: '', type: '25' }
        // { title: '更多', link: '', type: '20' },
        // { title: '查询', link: '', type: '20' },
        // { title: '微课', link: '', type: '20' },
        // { title: '会议', link: '', type: '20' },
        // { title: '问答', link: '', type: '20' },
        // { title: '商城', link: '', type: '20' }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.page-sub-nav {
  height: 36px;
  @include flex(flex-start);
  border: 2px solid $theme-blue;
  border-left: none;
  border-right: none;
  .page-sub-nav-item {
    width: 66px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    @include flex();
  }
}
</style>
