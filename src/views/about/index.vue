<template>
  <PageContentThrough>
    <template #content>
      <div class="about-page mgb20">
        <h1 class="title">{{ titleTxt }}</h1>
        <div class="about-content" v-html="state.message"></div>
      </div>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContentThrough>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageContentThrough from '@/layout/components/PageContentThrough.vue'
import SiteMap from '@/components/SiteMap.vue'
import article from '@/api/article'
export default defineComponent({
  name: 'Sailing',
  components: { PageContentThrough, SiteMap },
  setup() {
    const state = reactive({
      message: ''
    })
    const route = useRoute()
    const category = (route.params.id as string) || '1'
    const titleTxt = computed(() => {
      switch (category) {
        case '1':
          return '注册协议'
        case '2':
          return '关于我们'
        case '3':
          return '法律声明'
        case '4':
          return '隐私政策'
        case '5':
          return '广告业务'
        case '6':
          return '联系我们'
      }
    })
    const getMessage = async () => {
      const { data = {} } = await article.agreement(category)
      state.message = data.content
    }
    onMounted(() => {
      getMessage()
    })
    return {
      titleTxt,
      state
    }
  },
  data() {
    return {}
  },
  methods: {}
})
</script>
<style lang="scss" scoped>
.about-page {
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
