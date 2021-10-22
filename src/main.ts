/*
 * @Descripttion: 入口文件
 * @version:
 * @Author: TJ
 * @Date: 2021-04-13 08:50:46
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 13:06:38
 */
import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from './plugins/element'
// import "element-plus/packages/theme-chalk/src/base.scss"
import router from './router'
import store from './store'
import 'default-passive-events'
import { loadAllPlugins } from './plugins'
const app = createApp(App)

loadAllPlugins(app)
app
  .use(store)
  .use(router)
  .mount('#app')
