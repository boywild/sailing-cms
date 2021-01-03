<template>
  <a-form layout="vertical" :hideRequiredMark="true">
    <a-form-item v-if="filedType === 'phone'" label="手机号" v-bind="validateInfos.phone">
      <a-input v-model:value="modelRef.phone" type="tel" />
    </a-form-item>
    <a-form-item v-if="filedType === 'email'" label="邮箱" v-bind="validateInfos.email">
      <a-input v-model:value="modelRef.email" type="email" />
    </a-form-item>
    <a-form-item
      v-if="formType === 'register' || (formType === 'login' && filedType === 'phone')"
      label="验证码"
      v-bind="validateInfos.code"
    >
      <a-input class="sendSms" v-model:value="modelRef.code" type="tel">
        <template #addonAfter>
          <CountDown v-if="filedType === 'phone'" v-model="sendPhoneCode" @validate="validatePhone"></CountDown>
          <CountDown v-if="filedType === 'email'" v-model="sendEmailCode" @validate="validateEmail"></CountDown>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="密码" v-if="!(formType === 'login' && filedType === 'phone')" v-bind="validateInfos.password">
      <a-input type="password" v-model:value="modelRef.password" />
    </a-form-item>
    <a-form-item>
      <a-button v-if="formType === 'register'" type="primary" block @click="registry">注册 </a-button>
      <a-button v-else type="primary" block @click="login">登录 </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import Cookies from 'js-cookie'
import { defineComponent, reactive, toRaw, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useForm } from '@ant-design-vue/use'

import CountDown from '@/components/CountDown.vue'
import article, { RegistryParams, LoginParams } from '@/api/article'

export default defineComponent({
  name: 'InfoForm',
  props: {
    formType: { type: String, default: () => '' },
    filedType: { type: String, default: () => '' }
  },
  components: { CountDown },
  setup(props) {
    const router = useRouter()
    const sendPhoneCode = ref(false)
    const sendEmailCode = ref(false)
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
          trigger: 'blur',
          min: 11,
          max: 11,
          message: '请输入手机号'
        }
      ],
      email: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入邮箱'
        }
      ],
      code: [
        {
          required: true,
          trigger: 'blur',
          min: 6,
          max: 6,
          message: '请输入验证码'
        }
      ],
      password: [
        {
          required: true,
          trigger: 'blur',
          min: 6,
          max: 11,
          message: '请输入6-11位密码'
        }
      ]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    console.log(resetFields)
    console.log(validate)
    console.log(validateInfos)
    const validatePhone = () => {
      validate('phone').then(() => {
        sendPhoneCode.value = true
        article.sendSms({ phone: modelRef.phone })
      })
    }
    const validateEmail = () => {
      validate('email').then(() => {
        sendEmailCode.value = true
        article.sendSms({ email: modelRef.email })
      })
    }
    const registry = () => {
      let validateField: Array<string> = []
      let registryParams: RegistryParams
      if (props.filedType === 'phone') {
        validateField = ['phone', 'code', 'password']
        registryParams = {
          account: modelRef.phone,
          password: modelRef.password,
          code: modelRef.code,
          type: '1'
        }
      } else if (props.filedType === 'email') {
        validateField = ['email', 'code', 'password']
        registryParams = {
          account: modelRef.email,
          password: modelRef.password,
          code: modelRef.code,
          type: '2'
        }
      }
      validate(validateField)
        .then(async () => {
          const { data = {} } = await article.registry(registryParams)
          if (data.result === '1') {
            message.warn(data.resultNote)
          }
          console.log(toRaw(modelRef))
        })
        .catch(err => {
          console.log('error', err)
        })
    }
    const login = () => {
      let validateField: Array<string> = []
      let loginParams: LoginParams
      if (props.filedType === 'phone') {
        validateField = ['phone', 'code']
        loginParams = {
          account: modelRef.phone,
          password: modelRef.code,
          type: '1'
        }
      } else if (props.filedType === 'email') {
        validateField = ['email', 'password']
        loginParams = {
          account: modelRef.email,
          password: modelRef.password,
          type: '2'
        }
      }
      validate(validateField)
        .then(async () => {
          const { data = {} } = await article.login(loginParams)
          if (data.result === '1') {
            message.warn(data.resultNote)
          } else {
            const expiresTime = new Date(new Date().getTime() + 4 * 60 * 60 * 1000)
            Cookies.set('uid', data.uid, {
              expires: expiresTime
            })
            localStorage.setItem('uid', data.uid)

            console.log(router)
            router.replace({ name: 'home' })
          }
          console.log(toRaw(modelRef))
        })
        .catch(err => {
          console.log('error', err)
        })
    }
    return {
      validate,
      validateInfos,
      resetFields,
      modelRef,
      registry,
      login,
      validatePhone,
      validateEmail,
      sendPhoneCode,
      sendEmailCode
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
