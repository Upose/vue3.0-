/*
 * @Descripttion:页面公共数据接口
 * @version:
 * @Author: TJ
 * @Date: 2021-04-25 09:06:53
 * @LastEditors: TJ
 * @LastEditTime: 2021-05-28 14:13:25
 */
// 定义菜单树数据结构
export interface IMenutree {
  ancestors?:string
  languageId?: string
  menuId?: number
  parentId?: number
  parentName?: string
  orderNum?: number
  path?: string
  isFrame?: number
  iconCode?:string
  isCache?: number
  menuType?: string
  menuLevel?: number
  perms?: string
  enable?: number
  gmtCreate?: number
  gmtModified?: number
  remark?: string
  children: Array<IMenutree>
  id: number
  level?: number
  menuCode?: string
  menuEnabled?: null
  menuName?: string
  pid?: number
  url: string
}
export interface IDepartMent {
  ancestors: string
  children: Array<any>
  parentName: string
  parentId: number
  deptName: string
  deptId: number
  leader: string
  mobileCode: string
  phone: string
  email: string
  orderNum: number
  remark: string
  [propName: string]: any
}
export interface IPage {
  index: number
  size: number
  totalCount: number
}
export interface IProps {
  children: string
  label: string
}
