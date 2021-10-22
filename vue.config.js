/*
 * @Descripttion: vue配置文件
 * @version:
 * @Author: TJ
 * @Date: 2021-03-24 13:44:33
 * @LastEditors: TJ
 * @LastEditTime: 2021-10-22 10:07:31
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const __test = process.env.NODE_ENV === 'test'
const __production = process.env.NODE_ENV === 'production'
const __timeStamp = new Date().getTime()
module.exports = {
	// 应用的架设路径，CLI默认你的项目部署在域名的根目录下所以publicPath默认为/
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'assets',
	// 构建后的文件是否启用哈希命名
	filenameHashing: false,
	// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	productionSourceMap: false,
	// 删除无效的插件 减小体积，避免加载多余的资源
	chainWebpack: config => {
		config.plugins.delete('prefetch-admin')
	},
	configureWebpack: config => {
		// 生产环境相关配置
		if (__production) {
			// 代码压缩
			config.plugins.push(
				new UglifyJsPlugin({
					uglifyOptions: {
						//生产环境自动删除 console
						warnings: false,
						compress: {
							// warnings: false, // 若打包错误，则注释这行
							drop_debugger: true,
							drop_console: true,
							pure_funcs: ['console.log'],
						},
					},
					sourceMap: false,
					parallel: true,
				})
			)
			// 配置gzip压缩
			config.plugins.push(
				...[
					new CompressionWebpackPlugin({
						filename: `[path].gz[query]`,
						algorithm: 'gzip',
						test: /\.(js|css|svg)$/i,
						threshold: 10240,
						minRatio: 0.8,
						deleteOriginalAssets: true,
					}),
				]
			)
		}
		// 打包编译后修改 js 文件名
		if (__test) {
			config.output.filename = `js[name].${__timeStamp}.js`
			config.output.chunkFilename = `js[name].${__timeStamp}.js`
		}
	},
	devServer: {
		open: false,
		disableHostCheck: false,
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://192.168.50.115:7099', // 对应自己的 跨域地址 即请求的后端地址
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
}
