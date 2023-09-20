<template>
	<div class="table">
		<div class="table__container">
			<div class="table__headings" :style="{ 'grid-template-columns': columnTemplates }">
				<div class="table__heading-name" v-for="heading of headings" :key="heading" @click="clickOnHead(heading)">
					{{ heading }}
				</div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	headings: {
		type: Array,
	},
	columnTemplates: {
		type: String,
	},
});

const emits = defineEmits(['sorting']);

// Functions
const clickOnHead = (columnName) => {
	emits('sorting', columnName.toLowerCase());
};
</script>

<style scoped lang="less">
@import '@/styles/colors';
@import '@/styles/breakpoints';

.table {
	display: flex;
	justify-content: center;

	&__container {
		background-color: @white;
		width: 100%;
		margin-bottom: 40px;
		margin-top: 15px;
	}

	&__headings {
		display: none;
		column-gap: 10px;
		align-items: center;
		border-bottom: 2px solid #eeeff4;
		background: @white;
		padding: 5px 16px;

		@media @medium {
			display: grid;
		}
	}

	&__heading-name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #999;
		cursor: pointer;
	}
}
</style>
