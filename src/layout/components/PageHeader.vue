<template>
  <div class="page-header pdtb15">
    <div class="page-logo">
      <img class="img" src="../../assets/images/page-logo.png" alt="" />
    </div>
    <div class="page-adv">
      <img class="img" src="../../assets/images/upload/header-adv.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-logo {
    width: 320px;
    height: 81px;
  }
  .page-adv {
    width: 652px;
    height: 81px;
  }
}
</style>
