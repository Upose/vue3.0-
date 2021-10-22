<!--
 * @Descripttion: 
 * @version: 
 * @Author: RD
 * @Date: 2021-10-21 10:57:27
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:42:46
-->
<template>
	<div class="bot_container">
		管理员用户首页进入路由
	</div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
	name: 'layout',

	setup() {
		const { t } = useI18n()
		const route = useRoute()
		const store = useStore()
		const state = reactive({})

		return {}
	},
})
</script>

<style lang="scss" scope>
.bot {
	height: calc(100vh - 40px);
}
</style>
