<!--
 * @Descripttion: 
 * @version: 
 * @Author: RD
 * @Date: 2021-10-21 10:57:27
 * @LastEditors: TJ
 * @LastEditTime: 2021-10-22 11:01:21
-->
<template>
	<div class="main_container">
		<Header />
		<div class="bot">
			<router-view />
		</div>
	</div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { defineComponent, reactive } from 'vue'
import Header from '@/components/common/Header.vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
	name: 'layout',
	components: {
		Header,
	},
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
