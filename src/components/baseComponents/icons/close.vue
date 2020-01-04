<template>
	<!-- hamburger icon with animation -->
	<div class="close" @click="$emit('closeiconevent')">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 11 11"
			:class="{ active: activeCloseMenu }"
			class="close--svg"
		>
			<g fill="none" fill-rule="evenodd" stroke="var(--grey-800)" stroke-linecap="round">
				<path d="M.5 5.5h10M5.5.5v10" />
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: "closeIcon",
	props: {
		activeCloseMenu: {
			type: Boolean,
			defaul: false
		}
	}
};
</script>

<style scoped>
.close {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	padding: var(--base-1x);
}

.close--svg {
	width: var(--base-3x);
	height: var(--base-3x);
	cursor: pointer;
	transition: transform 0.2s ease-out;
}

.close--svg.active {
	transform: rotate(-45deg);
	transform-origin: center;
}
</style>
