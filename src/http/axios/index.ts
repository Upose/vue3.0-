/*
 * @Descripttion: axios 封装入口文件
 * @version:
 * @Author: TJ
 * @Date: 2021-03-29 16:36:39
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:48:22
 */

import * as codes from '@/constant/code'
import { ElMessage } from 'element-plus'
import { Base64 } from 'js-base64' //加密方法
import axios from 'axios' //这个是官方方法
import { ElLoading } from 'element-plus'
import router from '@/router'
// import { getNewToken } from '@/utils/getNewToken'
import i18n from '@/locales'
let num = 0
const instance = axios.create({
	baseURL: process.env.VUE_APP_QIHONG_URL,
	timeout: 20000,
	responseType: 'json',
})

//#  定义加载loading...
let loadingInstance: any
function startLoading() {
	//loading-start 方法
	loadingInstance = ElLoading.service({
		lock: true,
		text: i18n.global.t('common.loading'),
		background: 'rgba(0, 0, 0, 0.7)',
	})
}

//#  loading关闭函数
function endLoading() {
	// loading-close 方法
	loadingInstance.close()
}

// 添加请求拦截器
instance.interceptors.request.use(
	request => {
		startLoading()
		//# 如果gettes里面有token，将token赋值给headers 排除登录接口
		// if (store.getters[GetterConstants.GET_TOKEN]) {
		// 	request.headers['Authorization'] =
		// 		store.getters[GetterConstants.GET_TOKEN]
		// }
		return request
	},
	error => {
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		endLoading()
		const responseData = response?.data?.data
		if (!responseData)
			return {
				code: 5002,
				customData: null,
				message: i18n.global.t('common.unkonwnError'),
			} //未知错误
		const reponsrType = JSON.parse(Base64.decode(responseData))
		const ERRCOR_CODE = reponsrType.code
		switch (ERRCOR_CODE) {
			case codes.CODE_SUCCESS:
				// 成功直接退出
				break
			case codes.CODE_NEED_LOGIN:
				// 未认证
				ElMessage({
					type: 'warning',
					message: reponsrType.message,
				})
				break
			case codes.CODE_ERROR_LOGIN:
				// 未密码错误
				ElMessage({
					type: 'warning',
					message: reponsrType.message,
				})
				break

			case codes.CODE_ERROR_PARAMETER:
				// 内部错误
				ElMessage({
					type: 'warning',
					message: reponsrType.message,
				})
				break
			case codes.CODE_COUNTRY_NOT_EXIST:
				// 国家不存在
				ElMessage({
					type: 'warning',
					message: reponsrType.message,
				})
				break
			case codes.CODE_LOSE_TOKEN:
				// token失效
				if (num === 0) {
					// getNewToken()
					num += 1
				}
				break
			case codes.CODE_NET_ERROR:
				ElMessage({
					type: 'warning',
					message: reponsrType.message,
				})
				break
			default:
				break
		}
		// 解码之后返回解码后的数据
		return reponsrType
	},
	error => {
		endLoading()
		const response = error.response
		// 根据返回的http状态码做不同的处理
		switch (response?.status) {
			case codes.CODE_ERROR:
				// 服务端错误
				router.push('/500')
				break
			case codes.CODE_NGINX_ERROR:
				// nginx错误
				router.push('/500')
				break
			default:
				ElMessage({
					type: 'warning',
					message: 'error_else',
				})
				break
		}
	}
)

export default instance
