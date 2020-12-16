<template>
  <div class="page-sub-nav mgtb15">
    <router-link class="page-sub-nav-item" v-for="(item, index) in navList" :key="index" to=""> {{ item.title }}</router-link>
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
        { title: '政策', link: '' },
        { title: '金融', link: '' },
        { title: '保险', link: '' },
        { title: '专题', link: '' },
        { title: '领航', link: '' },
        { title: '学校', link: '' },
        { title: 'PSC', link: '' },
        { title: 'ENGLISH', link: '' },
        { title: '更多', link: '' },
        { title: '查询', link: '' },
        { title: '微课', link: '' },
        { title: '会议', link: '' },
        { title: '问答', link: '' },
        { title: '商城', link: '' }
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
