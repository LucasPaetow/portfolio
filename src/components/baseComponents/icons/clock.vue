<template functional>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon-size">
		<g fill="none" fill-rule="evenodd">
			<path
				fill="var(--grey-700)"
				d="M19.31 13.659A9.974 9.974 0 0 0 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10v-1.667a8.333 8.333 0 1 1 7.49-4.674h1.82z"
			/>
			<path
				fill="var(--grey-700)"
				d="M17.76 15.044l2.24-1.52-2.98-1.085zM10.28 3.659a.241.241 0 0 0-.24.235l-.176 7.103a.428.428 0 0 0 .429.44.427.427 0 0 0 .427-.44l-.198-7.103a.242.242 0 0 0-.242-.235z"
			/>
			<path
				fill="var(--grey-700)"
				d="M6.716 13.165c.066.115.21.158.328.096l3.296-1.737a.429.429 0 0 0 .172-.592.417.417 0 0 0-.59-.142l-3.124 2.04a.252.252 0 0 0-.082.335z"
			/>
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
