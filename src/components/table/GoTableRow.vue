<template>
	<div class="table__row" :style="{ 'grid-template-columns': columnTemplates }">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	columnTemplates: {
		type: String,
	},
});
</script>

<style scoped lang="less">
@import '@/styles/breakpoints';

.table__row {
	border-bottom: 2px solid #eeeff4;
	position: relative;
	display: block;
	column-gap: 10px;
	align-items: center;
	padding: 0 16px;

	@media screen and @medium {
		display: grid;
	}

	&:last-child {
		border-bottom: none;
	}
	&_items-center {
		justify-items: center;
	}
}
</style>
