<template>
  <div class="page-nav">
    <router-link
      class="page-nav-item"
      v-for="(item, index) in navList"
      :key="index"
      to="/"
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
        { title: '首页', link: '' },
        { title: '航情', link: '' },
        { title: '招聘', link: '' },
        { title: '活动', link: '' },
        { title: '专栏', link: '' },
        { title: '图片', link: '' },
        { title: '视频', link: '' },
        { title: '造船', link: '' },
        { title: '交易', link: '' },
        { title: '港口', link: '' },
        { title: '海员', link: '' },
        { title: '企业', link: '' },
        { title: '人物', link: '' },
        { title: '技术', link: '' },
        { title: '安全', link: '' }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.page-nav {
  background: #4669b1;
  height: 43px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .page-nav-item {
    color: #fff;
    width: 66px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
