<template>
	<label class="input" :style="{ width }">
		<input class="input__control" :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" />
		<span class="input__label">{{ label }}</span>
	</label>
</template>

<script setup>
const props = defineProps({
	value: {
		type: String,
		default: '',
	},
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'text',
	},
	placeholder: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		default: '100%',
	},
});
</script>

<style scoped lang="less">
@import '@/styles/colors';

.input {
	position: relative;

	&__control {
		border: 1px solid @primary;
		padding: 0 10px;
		height: 40px;
		border-radius: 7px;
		z-index: 2;

		&:focus,
		&:not(:placeholder-shown) {
			& + .input__label {
				z-index: 1;
				opacity: 1;
				top: -35px;
			}
		}
	}

	&__label {
		position: absolute;
		top: 20px;
		opacity: 0;
		z-index: 1;

		display: block;
		font-weight: bold;
		color: @primary;
		transition: 0.3s;
	}
}
</style>
