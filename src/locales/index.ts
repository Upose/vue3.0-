/*
 * @Descripttion:
 * @version:
 * @Author: TJ
 * @Date: 2021-03-26 13:10:41
 * @LastEditors: HYH
 * @LastEditTime: 2021-07-23 16:55:12
 */
import { getLanguage } from '@/utils/cookie'
import { createI18n } from 'vue-i18n' // import from runtime only
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import elementFrLocale from 'element-plus/lib/locale/lang/fr'
// User defined lang
import enLocale from './en'
import zhLocale from './zh-cn'
import frLocale from './fr'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  cn: {
    ...zhLocale,
    ...elementZhLocale,
  },
  fr: {
    ...frLocale,
    ...elementFrLocale,
  },
}

export const getLocale = () => {
  // ============= 检查cookie里面是否存有languageCookie,有的话先取cookie
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }
  // ============= 如果cookie里面未提取到语言类型，判断浏览器端默认语言并使用
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)

  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return 'cn'
}

const i18n = createI18n({
  locale: getLocale(),
  messages: messages,
})

export default i18n
