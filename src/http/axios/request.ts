/*
 * @Descripttion: 配置get 和 post请求
 * @version:
 * @Author: TJ
 * @Date: 2021-03-29 17:23:20
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:49:26
 */

// request.ts
import instance from './index'
import { Base64 } from 'js-base64'
import { IParams } from '@/@types/httpInterface'
// import { getNewToken } from '@/utils/getNewToken'
const config = {
	headers: {
		accessSysCode: 'CAFTRADE_INFO_SYS',
	},
}
export default class Request {
	//# get方法
	static get = (url: string, params?: object) => {
		return new Promise((resolve, reject) => {
			instance
				.get(url, { params: params })
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	// post方法
	static post = (url: string, params?: IParams) => {
		return new Promise((resolve, reject) => {
			instance
				.post(url, {
					version: 'v1',
					encryption_type: 'base64',
					data: Base64.encode(JSON.stringify(params)),
				})
				.then((res: any) => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	// 上传方法
	static uploadPost = (url: string, params: object) => {
		return new Promise((resolve, reject) => {
			instance
				.post(url, params, config)
				.then((res: any) => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}
}
