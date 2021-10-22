/*
 * @Descripttion: i18n国际化
 * @version: 
 * @Author: TJ
 * @Date: 2021-03-26 13:54:35
 * @LastEditors: TJ
 * @LastEditTime: 2021-03-26 13:55:07
 */
import i18n from '@/locales'
export default function loadComponent(app: any) {
  app.use(i18n)
}
