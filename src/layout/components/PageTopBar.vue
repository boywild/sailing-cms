<template>
  <div class="page-top-bar">
    <div class="page-wrapper">
      <div class="page-title">信德海事网-专业海事信息咨询服务平台</div>
      <div class="page-registry" v-if="!isLogin">
        <router-link to="/register" class="registry">注册</router-link>
        <span class="line">|</span>
        <router-link to="/login" class="login">登录</router-link>
      </div>
      <div class="page-registry" v-else>
        <div class="logout" @click="logout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Cookies from 'js-cookie'
export default defineComponent({
  name: 'PageTopBar',
  props: {
    msg: String
  },
  setup() {
    const isLogin = ref(false)
    const uid = Cookies.get('uid')
    if (uid) {
      isLogin.value = true
    }
    const logout = () => {
      isLogin.value = false
      Cookies.remove('uid')
    }
    return {
      isLogin,
      logout
    }
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
    .logout {
      cursor: pointer;
    }
  }
}
</style>
