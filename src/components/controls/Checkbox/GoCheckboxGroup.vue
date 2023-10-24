<!-- v-model:value -->

<template>
	<span :class="classes">
		<GoCheckbox
			v-for="option of options"
			:id="option.id"
			:key="option.id"
			class="checkbox-group__item"
			:label="option.name"
			:value="option.name"
			:checked="value.includes(option.name)"
			group
			@updateCheckboxGroup="check"
		/>
	</span>
</template>

<script setup>
import GoCheckbox from '@/components/controls/Checkbox/GoCheckbox.vue';
import { computed } from 'vue';

const props = defineProps({
	value: {
		type: Array,
		required: true,
	},
	direction: {
		type: String,
		default: 'horizontal',
	},
	options: {
		type: Array,
		required: true,
		validator: (value) => value.every((option) => 'id' in option && 'name' in option),
	},
});

const emit = defineEmits({
	'update:value': (value) => true,
});

const classes = computed(() => {
	return ['checkbox-group', `checkbox-group_direction-${props.direction}`];
});

const check = (params) => {
	let updateValue = [...props.value];
	if (params.checked) {
		updateValue.push(params.optionValue);
	} else {
		updateValue.splice(updateValue.indexOf(params.optionValue), 1);
	}
	emit('update:value', updateValue);
};
</script>

<style scoped lang="less">
.checkbox-group {
	display: inline-flex;

	&_direction-horizontal {
		flex-direction: row;
		align-items: center;
	}

	&_direction-vertical {
		flex-direction: column;
	}

	&_direction-horizontal &__item {
		margin-right: 10px;

		&:last-child {
			margin-right: 0;
		}
	}

	&_direction-vertical &__item {
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
