<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  watch: {
    $route(to) {
      document.title = to.meta.title
    }
  }
})
</script>
<style lang="scss"></style>
