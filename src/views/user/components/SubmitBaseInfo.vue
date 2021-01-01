<template>
  <div class="login-info">
    <a-tabs @change="callback">
      <a-tab-pane key="1" :tab="`手机${formType === 'login' ? '登录' : '注册'}`">
        <InfoForm :form-type="formType" filed-type="phone"></InfoForm>
      </a-tab-pane>
      <a-tab-pane key="2" :tab="`邮箱${formType === 'login' ? '登录' : '注册'}`" force-render>
        <InfoForm :form-type="formType" filed-type="email"></InfoForm>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import InfoForm from './InfoForm.vue'
export default defineComponent({
  name: 'SubmitBaseInfo',
  props: {
    formType: { type: String, default: () => '' }
  },
  components: { InfoForm },

  data() {
    return {
      form: {}
    }
  },
  methods: {
    handleSubmit() {
      console.log('===')
    }
  }
})
</script>
<style lang="scss">
.login-info {
  width: 419px;
  margin: 0 auto;
  .ant-btn-primary {
    background-color: $theme-blue;
    border-color: $theme-blue;
  }
  .ant-tabs-tab-active {
    color: $theme-blue;
  }
  .ant-form-item-label {
    font-weight: bold;
  }
  .ant-input {
    height: 45px;
  }
  .ant-btn {
    height: 45px;
  }
  .sendSms {
    .ant-input-group-addon {
      padding: 0;
      border: none;
    }
  }
  .ant-tabs-nav {
    display: block;
    .ant-tabs-tab {
      width: 50%;
      margin: 0;
      text-align: center;
    }
    .ant-tabs-ink-bar {
      width: 50% !important;
      background-color: $theme-blue;
    }
  }
}
</style>
