/*
 * @Descripttion:  设置cookie
 * @version:
 * @Author: TJ
 * @Date: 2021-03-26 14:41:19
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:43:47
 */
import Keys from '@/constant/key'
import Cookies from 'js-cookie'
// 语言id
export const setLanguage = (language: string) =>
	Cookies.set(Keys.languageKey, language)
export const getLanguage = () => Cookies.get(Keys.languageKey)

// 处理userId
export const setUserId = (userId: string) => Cookies.set(Keys.userId, userId) //{ expires: dateRange(7) }{%22username%22:%2212213231211@163.com%22}
export const getUserId = () => Cookies.get(Keys.userId)
export const removeUserId = () => Cookies.remove(Keys.userId)

// 七天免登录 登录状态
export const setNoLogin = (noLogin: string) =>
	Cookies.set(Keys.noLogin, noLogin)
export const getNoLogin = () => Cookies.get(Keys.noLogin)
export const removeNoLogin = () => Cookies.remove(Keys.noLogin)

// 用户信息
export const setUserInfo = (userInfo: object) =>
	Cookies.set(Keys.userInfo, userInfo)
export const getUserInfo = () => Cookies.get(Keys.userInfo)
export const removeUserInfo = () => Cookies.remove(Keys.userInfo)
