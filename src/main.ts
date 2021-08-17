import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import ElementPlus from 'element-plus'
import store from './store';
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/index.scss'

//import './index.css'

createApp(App)
.use(ElementPlus, { size: 'small', locale })
.use(store)
.use(router)
.mount('#app')
