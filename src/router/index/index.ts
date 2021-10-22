/*
 * @Descripttion:
 * @version:
 * @Author: RD
 * @Date: 2021-10-21 17:17:12
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 17:46:35
 */
// 首页路由
import Index from '@/views/Index/index.vue'
// 管理员首页用户路由
import MangerIndex from '@/views/Index/mangerIndex/index.vue'
// 管理员首页用户路由
import NormalIndex from '@/views/Index/normalIndex/index.vue'
export default {
  path: 'index',
  name: 'Index',
  component: Index,
  children: [
    {
      path: 'mangerIndex',
      name: 'mangerIndex',
      component: MangerIndex,
    },
    {
      path: 'normalIndex',
      name: 'normalIndex',
      component: NormalIndex,
    },
  ],
}
