<template>
	<div class="switch-theme"></div>
</template>

<script setup>
(function () {
	const switchTheme = document.querySelector('.switch-theme');
	const body = document.querySelector('body');

	changeLocalStorageTheme();

	switchTheme.addEventListener('click', toggleTheme);

	function changeLocalStorageTheme() {
		// Initial theme setting
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'light');
		}

		// Check, if dark theme
		if (localStorage.getItem('theme') === 'dark') {
			toggleTheme();
		}
	}

	function toggleTheme() {
		switchTheme.classList.toggle('dark-theme');
		body.classList.toggle('dark-theme');

		if (body.classList.contains('dark-theme')) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
	}
})();
</script>

<style scoped lang="scss">
.switch-theme {
	display: inline-block;
	position: relative;
	width: 50px;
	height: 25px;
	border: 2px solid $switch-theme-border-light-color;
	background: transparent;
	border-radius: 25px;
	box-shadow: 1px 1px 2px 0px (rgba($switch-theme-border-light-color, 0.5));
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 2px;
		width: 23px;
		height: 23px;
		background: $switch-theme-border-light-color;
		border-radius: 50%;
		transition: 0.5s;
	}

	&.dark-theme {
		border-color: $switch-theme-border-dark-color;
		background: $switch-theme-border-light-color;
		box-shadow: 1px 1px 2px 0px (rgba($switch-theme-border-dark-color, 0.5));
		transition: 0.5s;

		&::before {
			left: 25px;
			background: $switch-theme-border-dark-color;
		}
	}
}

// Main colors
$main-color-dark: #222222;
$main-color-light: #f4f4f4;

// Light theme colors
$background-color-light-theme: $main-color-light;
$background-color-dark-theme: $main-color-dark;

// Dark theme colors
$font-color-light-theme: $main-color-dark;
$font-color-dark-theme: $main-color-light;

// Switch theme colors
$switch-theme-border-light-color: $main-color-dark;
$switch-theme-border-dark-color: $main-color-light;

// Progress bar colors
$progress-bar-height: 5px;
$progress-bar-main-color: orange;
$progress-bar-current-color: orangered;

// Custom modal colors
$custom-modal-mask-bg-color: #cccccce6;
$custom-modal-bg-color: #eee;
</style>
