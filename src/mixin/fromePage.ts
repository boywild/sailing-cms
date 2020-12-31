import { useRoute } from 'vue-router'
export default {
  data() {
    return {
      pageType: useRoute().query
    }
  },
  created() {
    // const route = useRoute()
    // console.log(route.query)
  }
}
