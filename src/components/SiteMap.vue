<template>
  <div class="site-map mgb20">
    <div class="site-map-title">网站地图</div>
    <div class="site-map-cols">
      <div class="map-col" v-for="(map, index) in mapList" :key="index">
        <div class="m-c-title">{{ map.title }}</div>
        <div class="m-c-item" v-for="(col, colIndex) in map.items" :key="colIndex">
          <router-link target="_blank" :to="{ name: col.link, query: { ...col.query } }">{{ col.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteMap',
  props: {
    name: { type: String, default: () => '' },
    subName: { type: String, default: () => '' }
  },
  data() {
    return {
      mapList: [
        {
          title: '航情',
          items: [
            { name: '航情观察', link: 'sailing', query: { type: '2', cat: '1' } },
            { name: '市场交易', link: 'sailing', query: { type: '2', cat: '2' } },
            { name: '船舶管理', link: 'sailing', query: { type: '2', cat: '3' } },
            { name: '信德周报', link: 'sailing', query: { type: '2', cat: '4' } }
          ]
        },
        {
          title: '招聘',
          items: [
            { name: '海员薪资', link: 'partner', query: { type: '3', cat: '1' } },
            { name: '招聘求职', link: 'partner', query: { type: '3', cat: '2' } },
            { name: '招生培训', link: 'partner', query: { type: '3', cat: '3' } },
            { name: '航海院校', link: 'partner', query: { type: '3', cat: '4' } }
          ]
        },
        {
          title: '视频',
          items: [
            { name: '航海生活', link: 'videolib', query: { type: '7', cat: '1' } },
            { name: '事故险情', link: 'videolib', query: { type: '7', cat: '2' } },
            { name: '港口风采', link: 'videolib', query: { type: '7', cat: '3' } },
            { name: '船舶技术', link: 'videolib', query: { type: '7', cat: '4' } },
            { name: '教育培训', link: 'videolib', query: { type: '7', cat: '5' } },
            { name: '教育培训', link: 'videolib', query: { type: '7', cat: '6' } }
          ]
        },
        {
          title: '专题',
          items: [
            { name: '绿色航运', link: 'topic', query: { type: '20' } },
            { name: '只能航运', link: 'topic', query: { type: '20' } },
            { name: '航运安全', link: 'topic', query: { type: '20' } },
            { name: '船舶建造', link: 'topic', query: { type: '20' } },
            { name: '船舶交易', link: 'topic', query: { type: '20' } },
            { name: '港口咨询', link: 'topic', query: { type: '20' } }
          ]
        },
        {
          title: '专题',
          items: [
            { name: '海员频道', link: 'topic', query: { type: '20' } },
            { name: '海上保安', link: 'topic', query: { type: '20' } },
            { name: '航运企业', link: 'topic', query: { type: '20' } },
            { name: '航届人物', link: 'topic', query: { type: '20' } },
            { name: '疫情防控', link: 'topic', query: { type: '20' } },
            { name: '天气播报', link: 'topic', query: { type: '20' } }
          ]
        },

        {
          title: '资料库',
          items: [
            { name: '航海技术', link: 'home', query: {} },
            { name: '轮机管理', link: 'home', query: {} },
            { name: '海事法规', link: 'home', query: {} },
            { name: 'PSC检查', link: 'home', query: {} },
            { name: '海商海法', link: 'home', query: {} }
          ]
        },
        {
          title: '我们',
          items: [
            { name: '关于我们', link: 'home', query: {} },
            { name: '联系我们', link: 'home', query: {} },
            { name: '免责声明', link: 'home', query: {} },
            { name: '隐私政策', link: 'home', query: {} }
          ]
        }
      ]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.site-map {
  .site-map-title {
    text-align: center;
    color: $theme-blue;
    border-top: 2px solid $theme-blue;
    font-weight: bold;
    padding: 10px 0;
    margin-bottom: 10px;
  }
}
.site-map-cols {
  @include flex(space-between, flex-start);
  .map-col {
    font-size: $text-size-small;
    text-align: center;
    line-height: 23px;
    .m-c-title {
      font-weight: bold;
    }
    .m-c-item {
      color: #666;
      font-weight: 500;
    }
  }
}
</style>
