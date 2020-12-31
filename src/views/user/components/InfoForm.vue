<template>
  <a-form layout="vertical">
    <a-form-item v-if="filedType === 'phone'" label="手机号" v-bind="validateInfos.phone">
      <a-input v-model:value="modelRef.phone" type="tel" @blur="validate('phone', { trigger: 'blur' }).catch(() => {})" />
    </a-form-item>
    <a-form-item v-if="filedType === 'email'" label="邮箱" v-bind="validateInfos.email">
      <a-input v-model:value="modelRef.email" type="email" @blur="validate('email', { trigger: 'blur' }).catch(() => {})" />
    </a-form-item>
    <a-form-item v-if="formType === 'register'" label="验证码" v-bind="validateInfos.code">
      <a-input v-model:value="modelRef.code" type="tel" extra="232323" @blur="validate('code', { trigger: 'blur' }).catch(() => {})">
        <template #addonAfter> <a-button type="primary"> 发送验证码 </a-button> </template>
      </a-input>
    </a-form-item>
    <a-form-item label="密码" v-bind="validateInfos.password">
      <a-input type="password" v-model:value="modelRef.password" @blur="validate('password', { trigger: 'blur' }).catch(() => {})" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" block @click="onSubmit">提交 </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
export default defineComponent({
  name: 'InfoForm',
  props: {
    formType: { type: String, default: () => '' },
    filedType: { type: String, default: () => '' }
  },
  setup() {
    const modelRef = reactive({
      phone: '',
      email: '',
      code: '',
      password: ''
    })
    const rulesRef = reactive({
      phone: [
        {
          required: true,
          min: 11,
          max: 11,
          message: '请输入手机号'
        }
      ],
      email: [
        {
          required: true,
          message: '请输入邮箱'
        }
      ],
      code: [
        {
          required: true,
          min: 6,
          max: 6,
          message: '请输入验证码'
        }
      ],
      password: [
        {
          required: true,
          min: 6,
          max: 11,
          message: '请输入密码'
        }
      ]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef))
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
    return {
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit
    }
  },
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
  .ant-form-item-label {
    font-weight: bold;
  }
  .ant-input {
    height: 45px;
  }
  .ant-btn {
    height: 45px;
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
    }
  }
}
</style>
