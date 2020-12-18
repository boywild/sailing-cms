<template>
  <div class="page-nav">
    <router-link class="page-nav-item" v-for="(item, index) in navList" :key="index" :to="{ name: item.link }">
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
        { title: '首页', link: 'home' },
        { title: '航情', link: 'sailing' },
        { title: '招聘', link: 'partner' },
        { title: '活动', link: 'activity' },
        { title: '专栏', link: 'profession' },
        { title: '图片', link: 'imagelib' },
        { title: '视频', link: 'videolib' },
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
  background: $theme-blue;
  height: 43px;
  @include flex(flex-start);
  .page-nav-item {
    color: #fff;
    width: 66px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    @include flex(center);
  }
}
</style>
