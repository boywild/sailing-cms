<template>
  <PageContent>
    <template #content>
      <Recommend :content="recommendList"></Recommend>
    </template>
    <template #side>
      <Search class="mgb15"></Search>
      <Technology
        :showTitle="false"
        :content="[{ title: 'ALFA LAVAL——压载水处理的信心之选' }, { title: '集美大学电子电气员定向委培班联合招生' }]"
      ></Technology>
      <Authors class="mgb20" before="全部" :content="authors"></Authors>
    </template>
    <template #footer>
      <SiteMap></SiteMap>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/layout/components/PageContent.vue'
import Search from '@/components/Search.vue'
import Technology from '@/components/Technology.vue'
import Authors from './components/Authors.vue'
import SiteMap from '@/components/SiteMap.vue'
import Recommend from './components/Recommend.vue'
export default defineComponent({
  name: 'Home',
  components: { PageContent, Search, Technology, Authors, SiteMap, Recommend },
  data() {
    return {
      authors: [
        { name: '王勇', img: '' },
        { name: '刘颖钊', img: '' },
        { name: '胡月祥', img: '' },
        { name: '徐剑华', img: '' },
        { name: '谢燮', img: '' },
        { name: '王博', img: '' },
        { name: '田明辉', img: '' },
        { name: '王磊', img: '' },
        { name: '孙士森', img: '' }
      ],
      recommendList: [
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        },
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        },
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        },
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        },
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        },
        {
          name: '王勇',
          img: '',
          title: '后疫情时代需警惕三...',
          time: '07月06日 14:11',
          desc:
            '目前，虽尚不能定论全球经济一定会颠簸下行至翻车状态，但类似“原油战”、“贸易战”等意外事件仍会热度不减，并对后期全球金融市场产生巨大的扰动'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.authors-article {
  padding-top: 30px;
}
.auth-hot {
  .auth-article {
    padding: 15px 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
