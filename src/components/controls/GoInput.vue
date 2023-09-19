<!-- v-model:value="someValue" -->

<template>
	<label class="input" :style="{ width }">
		<input
			class="input__control"
			:type="type"
			:name="name"
			:id="name"
			:placeholder="placeholder"
			:value="value"
			@input="updateValue"
		/>
		<span class="input__label">{{ label }}</span>
		<TransitionGroup>
			<div v-for="error of errors" :key="error.$uid" class="input__errors">
				<div class="input__error">{{ error.$message }}</div>
			</div>
		</TransitionGroup>
	</label>
</template>

<script setup>
import { computed } from 'vue';

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
		default: '300px',
	},
	errors: {
		type: [Array],
	},
});

const emits = defineEmits(['update:value']);

const updateValue = (event) => {
	emits('update:value', event.target.value);
};
</script>

<style scoped lang="less">
@import '@/styles/colors';

.input {
	position: relative;
	display: inline-block;

	&__control {
		border: 1px solid @primary;
		padding: 0 10px;
		height: 40px;
		width: 100%;
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

	&__errors {
		font-size: 13px;
		color: @white;
		padding: 5px;
		margin-top: 4px;
		background: @danger;
		border-radius: 7px;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
