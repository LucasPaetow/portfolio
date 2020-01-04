<template functional>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" class="icon-size">
		<g
			fill="none"
			fill-rule="evenodd"
			stroke="gray"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.056"
		>
			<path fill="var(--grey-700)" d="M10.167 2.833l-5.5 5.5M12 4.143L8.857 1H12z" />
			<path d="M6.5 1H1v11h11V6.5" />
		</g>
	</svg>
</template>

<style scoped>
.icon-size {
	width: 0;
	height: 0;
}

@media (min-width: 22.5em) {
	.icon-size {
		width: var(--base-1x);
		height: var(--base-1x);
	}
}

@media (min-width: 28em) {
	.icon-size {
		padding-top: 0.2rem;
	}
}
</style>
