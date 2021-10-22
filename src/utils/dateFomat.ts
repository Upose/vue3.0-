/*
 * @Descripttion: 公共时间处理方法
 * @version:
 * @Author: TJ
 * @Date: 2021-04-20 08:51:48
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:43:52
 */
export default class DateUtil {
	private date: Date
	private fmt: string
	// 构造函数
	public constructor(date: Date, fmt: string) {
		this.date = date ? date : new Date()
		this.fmt = fmt ? fmt : 'yyyy-MM-dd hh:mm:ss'
	}
	// 方法 函数声明
	public getDate(): Date {
		return this.date
	}

	public getFmt(): string {
		return this.fmt
	}
	// 函数表达式
	public format = (): string => {
		let _date = this.getDate()
		let fmt = this.getFmt()
		let o: any = {
			'M+': _date.getMonth() + 1, //月
			'd+': _date.getDate(), //日
			'h+': _date.getHours(), //小
			'm+': _date.getMinutes(), //分
			's+': _date.getSeconds(), //秒
			// "q+" : Math.floor((_date.getMonth()+3)/3), //季度
			// "S"  : _date.getMilliseconds()             //毫秒
		}
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				(_date.getFullYear() + '').substr(4 - RegExp.$1.length)
			)
		}
		for (let k in o) {
			if (new RegExp('(' + k + ')').test(fmt)) {
				fmt = fmt.replace(
					RegExp.$1,
					RegExp.$1.length == 1
						? o[k]
						: ('00' + o[k]).substr(('' + o[k]).length)
				)
			}
		}
		return fmt
	}
}
