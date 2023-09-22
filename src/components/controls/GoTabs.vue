<template>
	<div class="tabs">
		<div class="tabs__nav">
			<span
				v-for="tab in tabs"
				:key="tab.name"
				:class="['tabs__nav-item', { 'tabs__nav-item_selected': tab.name === selectedTab }]"
				@click="clickOnTab(tab.name)"
			>
				{{ tab.label }}
			</span>
		</div>
		<div class="tabs__content">
			<slot />
		</div>
	</div>
</template>

<script setup>
// Props
const props = defineProps({
	tabs: {
		type: Array,
		require: true,
	},
	selectedTab: {
		type: String,
	},
});

// Emits
const emits = defineEmits({
	changeTab: (tabName) => !!tabName,
});

// Functions
const clickOnTab = (tabName) => {
	emits('changeTab', tabName);
};
</script>

<style scoped lang="less">
@import 'palette';

.tabs {
	&__nav {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	&__nav-item {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
		border-radius: 7px;
		cursor: pointer;
		border: 1px solid @primary;
		padding: 0 20px;
		font-size: 15px;

		&:hover {
			background: @primary-hover;
			color: #fff;
			transition: 0.2s;
		}
	}

	&__nav-item_selected {
		background: @primary;
		color: #fff;
	}

	&__content {
		padding: 20px;
		border-radius: 7px;
		background: #fff;
	}
}
</style>
