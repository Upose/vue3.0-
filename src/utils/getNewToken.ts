/*
 * @Descripttion: 获取新token
 * @version:
 * @Author: TJ
 * @Date: 2021-05-19 09:01:54
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:44:01
 */

// import { IRequest } from '@/@types/httpInterface'
// import commonApi from '@/http/api/common'
// import i18n from '@/locales'
// import {
// 	getUserId,
// 	removeNoLogin,
// 	removeUserId,
// 	removeUserInfo,
// } from './cookie'
// import dataStructure from './dataStructure'
// import { useStore } from '@/store'
// import {
// 	ActionConstants,
// 	MutationConstants,
// } from '@/store/modules/users/constants'
// import { ElMessageBox } from 'element-plus'
// import router from '@/router'
// const store = useStore()
// function getNewToken() {
// 	let userId = getUserId()
// 	if (userId) {
// 		let data = dataStructure({ userId })
// 		commonApi.generate_token(data).then(res => {
// 			let { code, customData } = res as IRequest
// 			if (code === 200) {
// 				store.dispatch(ActionConstants.SET_NEW_TOKEN, customData)
// 				store.dispatch(ActionConstants.SET_USER_ID, customData.userId)
// 			} else {
// 				router.push('/login')
// 			}
// 		})
// 	} else {
// 		ElMessageBox.confirm(
// 			i18n.global.t('elMsgBox.tokenInvalid'),
// 			i18n.global.t('elMsgBox.tips'),
// 			{
// 				confirmButtonText: i18n.global.t('elMsgBox.sure'),
// 				cancelButtonText: i18n.global.t('elMsgBox.cancel'),
// 				type: 'warning',
// 			}
// 		)
// 			.then(() => {
// 				store.commit(MutationConstants.CLEAR_TOKEN, '')
// 				removeUserId()
// 				removeNoLogin()
// 				removeUserInfo()
// 				router.push('/login')
// 			})
// 			.catch(() => {
// 				store.commit(MutationConstants.CLEAR_TOKEN, '')
// 				removeUserId()
// 				removeUserInfo()
// 			})
// 	}
// }

// export { getNewToken }
