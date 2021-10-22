/*
 * @Descripttion: elemnent结合i18n国际化处理
 * @version: 
 * @Author: TJ
 * @Date: 2021-05-06 11:51:09
 * @LastEditors: HYH
 * @LastEditTime: 2021-09-07 17:07:12
 */
import ElementPlus from 'element-plus'
import i18n from '@/locales'

export default function loadComponent(app:any) {
  app.use(ElementPlus, { size: 'mini', i18n: i18n.global.t })
}