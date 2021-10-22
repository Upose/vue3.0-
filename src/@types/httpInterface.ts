/*
 * @Descripttion: 数据接口定义
 * @version:
 * @Author: TJ
 * @Date: 2021-03-31 14:23:38
 * @LastEditors: TJ
 * @LastEditTime: 2021-05-17 15:18:40
 */
// ？号可选属性;[propName:string]:string 有时候我们希望一个接口允许有任意的属性
// 数组 Araay<number> 或者 number[]
// 参数对象
export interface IParams {
  metaData: IMetadata
  customData: ICustomdata
}

// 公共参数
export interface IMetadata {
  languageId?: string
  areaId?: string
  // 接入时间
  requestTime?: string
  // 接入平台表示
  accessSysCode?: string
  mobileINfo?: ImobileINfo
  [propName: string]: any
}
// 可选参数
export interface ICustomdata {
  [propName: string]: any
}

export interface ImobileINfo {
  system?: string
  device?: string
  producer?: string
}

// 接口返回值类型
export interface IRequest {
  code: number
  customData: any
  message: string
}
export interface IMobile {
  areaId: string
  mobileCode: string
  name: string
}
