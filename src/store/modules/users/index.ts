/*
 * @Descripttion: 用户相关信息状态管理
 * @version:
 * @Author: TJ
 * @Date: 2021-03-29 08:43:27
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 10:29:48
 */
import { GetterConstants, MutationConstants } from './constants' //枚举出有哪些变量
import { getLocale } from '@/locales'
import { IGlobalState as RootState } from '../../dataType' //接口类型
import { getUserId, setLanguage, setUserId } from '@/utils/cookie'
import {
  Module,
  GetterTree,
  Store as VuxStore,
  CommitOptions,
  MutationTree,
  ActionTree,
  ActionContext,
  DispatchOptions,
} from 'vuex'
//# 定义获取 Authorization（授权）
interface ILogin {
  Authorization: string
}

//#定义users state
export type IUsersState = {
  language: string
}

const state: IUsersState = {
  language: getLocale(), //初始化
}

//#定义users getters
export type Getters = {
  [GetterConstants.GET_LANGUAGE](state: IUsersState): string
}

const getters: GetterTree<IUsersState, RootState> & Getters = {
  [GetterConstants.GET_LANGUAGE]: (state) => state.language,
}

//#定义users mutations
interface Mutations {
  [MutationConstants.SET_LANGUAGE](state: IUsersState, payload: any): void
  [MutationConstants.CLEAR_LANGUAGE](state: IUsersState, payload: string): void
}

const mutations: MutationTree<IUsersState> & Mutations = {
  //# 设置语言
  [MutationConstants.SET_LANGUAGE](state: IUsersState, payload: any) {
    state.language = payload
    setLanguage(state.language) //将语言也存入cookie
  },

  //# 清除语言
  [MutationConstants.CLEAR_LANGUAGE](state: IUsersState, payload: string) {
    state.language = payload
  },
}

export type UserStore<S = IUsersState> = Omit<
  VuxStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}
export const UsersMoudle: Module<IUsersState, RootState> = {
  // namespaced: true,
  state,
  mutations,
  getters,
}
