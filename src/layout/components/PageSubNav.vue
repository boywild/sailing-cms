<template>
  <div class="page-sub-nav mgtb15">
    <router-link
      target="_blank"
      class="page-sub-nav-item"
      v-for="(item, index) in navList"
      :key="index"
      :to="{ name: item.link, query: { ...item.query } }"
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
        { title: '会议', link: 'meeting', query: { type: '16' } },
        { title: '政策', link: 'article', query: { type: '17', name: '政策' } },
        { title: '金融', link: 'article', query: { type: '18', name: '金融' } },
        { title: '保险', link: 'article', query: { type: '19', name: '保险' } },
        { title: '专题', link: 'topic', query: { type: '20' } },
        { title: '领航', link: 'kol', query: { type: '21' } },
        { title: '学校', link: 'article', query: { type: '22', name: '学校' } },
        // { title: 'PSC', link: '', query:{type: '23' }},
        { title: 'ENGLISH', link: '', query: { type: '23' } },
        { title: '国内', link: 'article', query: { type: '24', name: '国内' } },
        { title: '国际', link: 'article', query: { type: '25', name: '国际' } }
        // { title: '更多', link: '', query:{type: '20' }},
        // { title: '查询', link: '', query:{type: '20' }},
        // { title: '微课', link: '', query:{type: '20' }},
        // { title: '会议', link: '', query:{type: '20' }},
        // { title: '问答', link: '', query:{type: '20' }},
        // { title: '商城', link: '', query:{type: '20' }}
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
