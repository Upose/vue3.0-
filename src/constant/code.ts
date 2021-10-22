/*
 * @Descripttion: 状态码定义
 * @version: 
 * @Author: TJ
 * @Date: 2021-03-29 15:59:31
 * @LastEditors: HYH
 * @LastEditTime: 2021-08-13 16:53:36
 */


// 成功
const CODE_SUCCESS = 200
// 服务器发生错误，用户将无法判断发出的请求是否成功
const CODE_ERROR = 500
// NGINX代理错误
const CODE_NGINX_ERROR = 502
// 当创建一个对象时，发生一个验证错误
const CODE_ERROR_PARAMETER = 4022
// // SQL语句错误
// const CODE_ERROR_SQL = 220
// 未认证
const CODE_NEED_LOGIN = 4001
// 用户名或密码错误
const CODE_ERROR_LOGIN = 4002
// 资源未找到 用户发出的请求针对的是不存在的记录，服务器没有进行操作
const CODE_NOT_FOUND = 4004
// 没有权限
const CODE_FORBIDDEN = 4003
// token已失效
const CODE_LOSE_TOKEN = 4006
// 内部错误
const CODE_NET_ERROR = 5001
// 国家不存在 4024
const CODE_COUNTRY_NOT_EXIST=4027
export  {
	CODE_SUCCESS,
	CODE_ERROR,
	CODE_ERROR_PARAMETER,
	// CODE_ERROR_SQL,
	CODE_ERROR_LOGIN,
	CODE_NEED_LOGIN,
	CODE_NOT_FOUND,
	CODE_FORBIDDEN,
	CODE_LOSE_TOKEN,
	CODE_NET_ERROR,
	CODE_NGINX_ERROR,
	CODE_COUNTRY_NOT_EXIST
}

