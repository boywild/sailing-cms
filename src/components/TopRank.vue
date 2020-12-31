<template>
  <div class="top-rank">
    <div class="top-rank-tab">
      <div class="rank-tab-item active">评论排行</div>
      <!-- <div class="rank-tab-item">评论排行</div> -->
    </div>
    <div class="top-rank-content">
      <div class="top-rank-list">
        <router-link
          :to="{ name: 'post', params: { articleId: item.articleId, fromPage: pageType } }"
          class="t-p-item"
          v-for="(item, index) in content"
          :key="index"
        >
          <div class="index">{{ index + 1 }}</div>
          <div class="title">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopRank',
  props: {
    content: { type: Array, default: () => [] },
    pageType: { type: String, default: () => '1' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-rank {
  .top-rank-tab {
    padding: 5px 0;
    border-top: 2px solid $theme-blue;
    @include flex(flex-start);
    .rank-tab-item {
      font-size: $text-size-middle;
      font-weight: bold;
      line-height: normal;
      position: relative;
      cursor: pointer;

      &:first-child {
        padding-right: 10px;
        // &::after {
        //   content: '';
        //   position: absolute;
        //   right: 0;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   width: 2px;
        //   height: 18px;
        //   background: $text-color;
        // }
      }
      &:last-child {
        padding-left: 10px;
      }
      &.active {
        color: $theme-blue;
        // &::after {
        //   background: $theme-blue;
        // }
      }
    }
  }
}
.top-rank-list {
  .t-p-item {
    @include flex(flex-start);
    line-height: 25px;
    padding: 3px 0;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      .index {
        color: $theme-red;
      }
    }
    .index {
      font-weight: bold;
      font-size: $text-size-big;
      padding-right: 10px;
      color: $text-light-color2;
    }
    .title {
      flex: 1;
    }
  }
}
</style>
