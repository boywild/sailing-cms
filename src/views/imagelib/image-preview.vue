<template>
  <PageContentThrough class="mgb15">
    <template #content>
      <div class="imgpreview mgb20">
        <swiper
          class="gallery-top"
          :thumbs="{
            swiper: thumbsSwiper
          }"
        >
          <swiper-slide v-for="(item, index) in state.imgList" :key="index">
            <div class="preview-box">
              <img :src="item.image" />
              <div class="home-hot-txt">{{ item.title }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="gallery-thumbs">
          <swiper
            direction="vertical"
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :autoHeight="true"
            watch-slides-visibility
            watch-slides-progress
            navigation
          >
            <swiper-slide v-for="(item, index) in state.imgList" :key="index">
              <img :src="item.image" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContentThrough>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import SwiperCore, { Pagination, Thumbs, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PageContentThrough from '@/layout/components/PageContentThrough.vue'
import SiteMap from '@/components/SiteMap.vue'
import article from '@/api/article'
SwiperCore.use([Pagination, Thumbs, Navigation])
export default defineComponent({
  name: 'ImageLib',
  components: { Swiper, SwiperSlide, PageContentThrough, SiteMap },
  setup() {
    const state = reactive({
      imgList: [],
      articleId: ''
    })
    const getDetail = async () => {
      const { data = {} } = await article.articleDetail({ articleId: state.articleId })
      state.imgList = data.itemList
      console.log(data)
    }
    onMounted(() => {
      const route = useRoute()
      const articleId = route.params.articleId as string
      state.articleId = articleId
      getDetail()
    })
    return {
      state,
      getDetail
    }
  },
  data() {
    return {
      thumbsSwiper: null
    }
  },
  methods: {
    setThumbsSwiper(swiper: any) {
      console.log(swiper)
      this.thumbsSwiper = swiper
    }
  }
})
</script>
<style lang="scss">
.imgpreview {
  @include flex(space-between);
  height: 562px;
  .gallery-top {
    width: 841px;
    height: 562px;
  }
  .gallery-thumbs {
    height: 562px;
    width: 130px;
    box-sizing: border-box;
    .swiper-container {
      padding: 25px 0;
      height: 100%;
    }
    .swiper-slide {
      width: 130px !important;
      height: 86px !important;
      overflow: hidden;
      opacity: 0.4;
      img {
        max-width: 100%;
      }
      &.swiper-slide-thumb-active {
        opacity: 1;
      }
    }
    .swiper-button-prev {
      &::after {
        display: none;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 7px solid;
        border-color: transparent transparent #fff transparent;
      }
      left: auto !important;
      width: 100%;
      height: 18px;
      top: 0;
      opacity: 1;
      margin-top: 0;
      background: #000000;
    }
    .swiper-button-next {
      &::after {
        display: none;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 7px solid;
        border-color: #fff transparent transparent transparent;
      }
      top: auto !important;
      right: auto !important;
      opacity: 1;
      bottom: 0;
      width: 100%;
      height: 18px;
      margin-top: 0;
      top: 0;
      background: #000000;
    }
  }

  .preview-box {
    img {
      max-width: 100%;
    }
  }
}
</style>
