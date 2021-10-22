/*
 * @Descripttion:获取浏览器版本
 * @version:
 * @Author: TJ
 * @Date: 2021-07-15 15:33:51
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 19:01:05
 */
// 获取浏览器信息
function getExplorerInfo() {
  let explorer: any = window.navigator.userAgent
  explorer = explorer.toLowerCase()
  //ie
  if (explorer.indexOf('msie') >= 0) {
    let ver = explorer.match(/msie ([\d.]+)/)[1] || ''
    return `IE${ver}`
  }
  //firefox
  else if (explorer.indexOf('firefox') >= 0) {
    let ver = explorer.match(/firefox\/([\d.]+)/)[1] || ''
    return `Firefox${ver}`
  }
  //Chrome
  else if (explorer.indexOf('chrome') >= 0) {
    let ver = explorer.match(/chrome\/([\d.]+)/)[1] || ''
    return `Chrome${ver}`
  }
  //Opera
  else if (explorer.indexOf('opera') >= 0) {
    let ver = explorer.match(/opera.([\d.]+)/)[1] || ''
    return `Opera${ver}`
  }
  //Safari
  else if (explorer.indexOf('safari') >= 0) {
    let ver = explorer.match(/version\/([\d.]+)/)[1] || ''
    return `Safari${ver}`
  }
  if (explorer.indexOf('edge') >= 0) {
    let ver = explorer.match(/edge\/([\d.]+)/)[1] || ''
    return `edge${ver}`
  }
  //遨游浏览器
  if (explorer.indexOf('maxthon') >= 0) {
    let ver = explorer.match(/maxthon\/([\d.]+)/)[1] || ''
    return `傲游浏览器${ver}`
  }
  //QQ浏览器
  if (explorer.indexOf('qqbrowser') >= 0) {
    let ver = explorer.match(/qqbrowser\/([\d.]+)/)[1] || ''
    return `QQ浏览器${ver}`
  }
  //搜狗浏览器
  if (explorer.indexOf('se 2.x') >= 0) {
    return `搜狗浏览器`
  }
  return ''
}

export default getExplorerInfo
