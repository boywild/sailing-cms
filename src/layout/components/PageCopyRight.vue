<template>
  <div class="page-copyright">
    <p>
      <router-link target="_blank" :to="{ name: 'about', params: { id: '2' } }">关于我们</router-link>|
      <router-link target="_blank" :to="{ name: 'about', params: { id: '3' } }">法律声明</router-link>|
      <router-link target="_blank" :to="{ name: 'about', params: { id: '4' } }">隐私政策</router-link>|
      <router-link target="_blank" :to="{ name: 'about', params: { id: '5' } }">广告业务</router-link>|
      <router-link target="_blank" :to="{ name: 'about', params: { id: '6' } }">联系我们</router-link>
    </p>
    <p>辽ICP备16005805号|辽公网安备21029602000152号|增值电信业务经营许可证:辽B2-20190221|出版物经营许可证:高文体17006号</p>
    <p>Copyright信德海事网All Rights Reserved版权所有复制必究</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageCopyRight',
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
.page-copyright {
  text-align: center;
  > p {
    padding: 10px 0;
  }
}
</style>
