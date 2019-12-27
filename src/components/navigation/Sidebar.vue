<template>
	<aside class="sidebar">
		<h2>Hello2</h2>
		<h3>Hello3</h3>
	</aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	components: {},
	props: {},
	name: "sidebar",
	data() {
		return {};
	},
	methods: {},
	computed: {
		...mapGetters({})
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.sidebar {
	/* Positioning */
	/* Box-model */
	width: 10rem;
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: lightblue;
	/* Misc */
}
</style>
