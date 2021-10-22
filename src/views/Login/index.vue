<!--
 * @Descripttion: 
 * @version: 
 * @Author: RD
 * @Date: 2021-10-21 10:57:27
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 11:56:07
-->
<template>
	<div class="main_container">
		测试登录页
	</div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { defineComponent, reactive } from 'vue'

import { useI18n } from 'vue-i18n'
export default defineComponent({
	name: 'login',
	setup() {
		const { t } = useI18n()
		const route = useRoute()
		const store = useStore()
		const state = reactive({})
		return {}
	},
})
</script>

<style lang="scss" scope></style>
