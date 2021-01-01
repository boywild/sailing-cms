<template>
  <div class="sms-btn" :disabled="!canClick" size="small" type="info" @click="validateVal">{{ content }}</div>
</template>

<script>
import { defineComponent } from 'vue'
// import validateRule from '@/utils/validate'
export default defineComponent({
  name: 'CountDown',
  components: {},
  props: {
    modelValue: Boolean
  },
  data() {
    return {
      content: '获取验证码',
      totalTime: 60,
      canClick: true
    }
  },
  watch: {
    modelValue(newVal) {
      if (newVal) {
        this.countDown()
      }
    }
  },
  methods: {
    validateVal() {
      if (!this.canClick) return
      this.$emit('validate')
    },
    countDown() {
      if (!this.canClick) return
      // const { validateType, validate } = this
      // if (validateType === 'phone') {
      //   if (!validate) {
      //     console.log('请先填写手机号')
      //     return
      //   } else if (!validateRule.isPhone(validate)) {
      //     console.log('手机号格式不正确')
      //     return
      //   }
      // } else if (validateType === 'email') {
      //   if (!validate) {
      //     console.log('请先填写邮箱')
      //     return
      //   } else if (!validateRule.isEmail(this.validate)) {
      //     console.log('邮箱格式不正确')
      //     return
      //   }
      // }
      this.canClick = false
      this.content = this.totalTime + 's'
      const clock = setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's'
        if (this.totalTime < 0) {
          clearInterval(clock)
          this.content = '发送验证码'
          this.totalTime = 60
          this.canClick = true
          this.$emit('update:modelValue', false)
        }
      }, 1000)
    }
  }
})
</script>
<style lang="scss" scoped>
.sms-btn {
  @include flex();
  width: 100%;
  height: 100%;
  background: $theme-blue;
  color: #fff;
  padding: 0 10px;
  height: 45px;
  cursor: pointer;
  width: 90px;
}
</style>
