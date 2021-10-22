/*
 * @Descripttion: 请求数据封装
 * @version:
 * @Author: TJ
 * @Date: 2021-03-31 15:34:45
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 10:55:54
 */

// import { IParams,IMetadata,ICustomdata} from "@/@types/httpInterface"
import { useStore } from '@/store'
import dateUtil from '@/utils/dateFomat'
import { IParams, ICustomdata } from '@/@types/httpInterface'
import getExplorerInfo from './getExplorerInfo'
const store = useStore()
export default function dataStructure(customData: ICustomdata) {
  // 浏览器版本号
  const plantInfo = { device: getExplorerInfo() }
  // dateUtil实例化，为构造函数传入参数
  let currentTime = new dateUtil(new Date(), 'yyyyMMddhhmmss')
  //这两个参数这个不需要和用户交互
  let obj = {
    requestTime: currentTime.format(), //调用封装对象里面的format()方法
    accessSysCode: 'CAFTRADE_INFO_SYS',
    languageId: store.state.users.language,
    areaId: 'CHN',
    plantInfo,
  }
  let params: IParams = {
    metaData: {},
    customData: {},
  }

  params.customData = { ...customData }

  params.metaData = { ...obj } //将页面传入的参数对象和这个参数对象结构放在一起

  return params
}
