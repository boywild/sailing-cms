import { createApp } from 'vue'
import { Form, Button, Input, Tabs, BackTop, Icon, Comment } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'
import '@/assets/style/swiper-bundle.css'

const app = createApp(App)
app.use(Form)
app.use(Button)
app.use(Input)
app.use(Tabs)
app.use(BackTop)
app.use(Icon)
app.use(Comment)
app.use(store).use(router).mount('#app')
