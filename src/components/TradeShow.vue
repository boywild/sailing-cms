<template>
  <div class="trade-show">
    <Title2 :before="before" :after="after"></Title2>
    <div class="trade-list">
      <div class="trade-topic" v-for="(item, index) in content" :key="index">
        <div class="title">
          <router-link to="/">{{ item.title }}</router-link>
        </div>
        <div class="trade-info">会议时间：{{ item.time }} 会议地点：{{ item.location }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title2 from './Title2.vue'
export default defineComponent({
  name: 'TradeShow',
  components: { Title2 },
  props: {
    content: { type: Array, default: () => [] },
    before: { type: String, default: () => '' },
    after: { type: String, default: () => '' }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.trade-list {
    min-height: 215px;
  .trade-topic {
    line-height: normal;
    padding: 5px 0;
    &:hover {
      .title {
        font-size: $text-size-middle;
        font-weight: bold;
        padding-bottom: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .trade-info {
        display: block;
      }
    }
    .title {
      padding-left: 15px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #9a9a9a;
      }
    }
    .trade-info {
      color: $text-light-color;
      font-size: $text-size-small;
      padding-left: 15px;
      display: none;
    }
  }
}
</style>
