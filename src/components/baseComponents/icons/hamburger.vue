<template>
	<!-- hamburger icon with animation -->
	<section class="hamburger" :class="{ open: activeHambuerMenu }" @click="$emit('hamburgerevent')">
		<div class="line start"></div>
		<div class="line"></div>
		<div class="line end"></div>
	</section>
</template>

<script>
export default {
	name: "hamburger",
	props: {
		activeHambuerMenu: Boolean
	}
};
</script>

<style scoped>
.hamburger {
	width: var(--base-7x);
	height: var(--base-7x);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transition: transform 0.2s ease-out;
	padding: calc(var(--base-1x) * 1.15);
}

@media (min-width: 30em) {
	.hamburger {
		width: var(--base-8x);
		height: var(--base-8x);
		padding: var(--base-3x);
	}
}

.hamburger.open {
	transform: rotate(-45deg);
}

.line {
	background-color: lightgray;
	border-radius: 0.2rem;
	width: 100%;
	height: 0.25rem;
}

.start {
	width: 50%;
	transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: right;
}

.open .start {
	transform: rotate(-90deg) translateX(0.15rem);
}

.end {
	width: 50%;
	align-self: flex-end;
	transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: left;
}

.open .end {
	transform: rotate(-90deg) translateX(-0.15rem);
}
</style>
