/*
 * @Descripttion: 数据管理模块入口
 * @version:
 * @Author: TJ
 * @Date: 2021-03-26 14:48:19
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 10:22:20
 */
import { createLogger, createStore } from 'vuex'
import { IGlobalState } from './dataType'
import createPersistedState from 'vuex-persistedstate'
import { UserStore, UsersMoudle } from './modules/users'

//# 注册store类型
export type Store = UserStore<Pick<IGlobalState, 'users'>>

//# 数据持久化
const dataPlugins = createPersistedState({
  storage: window.localStorage,
  /*不管存入vuex还要存入sessionStorage，在关闭窗口或标签页之
  后将会删除这些数据。你想在浏览器窗口关闭后还保留数据，可以使用 localS
  torage 属性， 该数据对象没有过期时间*/
  paths: ['users.token', 'users.userId','users.leftbarMenu'],
})

export const store = createStore({
  // plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules: {
    users: UsersMoudle,
  },
  plugins: [dataPlugins],
})

export function useStore(): Store {
  return store as Store
}

export default store
