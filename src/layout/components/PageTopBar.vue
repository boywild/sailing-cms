<template>
  <div class="page-top-bar">
    <div class="page-wrapper">
      <div class="page-title">信德海事网-专业海事信息咨询服务平台</div>
      <div class="page-registry">
        <router-link to="/register" class="registry">注册</router-link>
        <span class="line">|</span>
        <router-link to="/login" class="login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTopBar',
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
.page-top-bar {
  height: 43px;
  background: #e4e4e4;
  > .page-wrapper {
    @include flex(space-between);
    height: 100%;
  }
  .page-registry {
    .line {
      color: $theme-blue;
      font-weight: bold;
      margin: 0 10px;
    }
    .registry,
    .login {
      cursor: pointer;
    }
  }
}
</style>
