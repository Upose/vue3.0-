<!--
 * @Descripttion: 
 * @version: 
 * @Author: RD
 * @Date: 2021-10-21 15:50:54
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:43:20
-->
<template>
	<header class="header"></header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.header {
	height: 40px;
	background-color: #0f94af; /* 不支持线性的时候显示 */
	background-image: linear-gradient(to right, #0f94af, #0550c2);
}
</style>
