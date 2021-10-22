/*
 * @Descripttion: 加载所有插件
 * @version:
 * @Author: TJ
 * @Date: 2021-05-06 11:53:30
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:43:36
 */
// src/plugins/index.ts
import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins，导出loadAllPlugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
	// 获取当前目录下所哟.ts文件
	const files = require.context('.', true, /\.ts$/)
	// 遍历，过滤并加载插件
	files.keys().forEach(key => {
		if (typeof files(key).default === 'function') {
			if (key !== './index.ts' && key !== './element.ts')
				files(key).default(app)
		}
	})
}
