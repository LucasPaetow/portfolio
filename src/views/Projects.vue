<template>
	<article class="projects" v-touch:swipe="handleSwipe">projects</article>
</template>

<script>
import { mapGetters } from "vuex";
import handleSwipe from "@/utility/mixins/handleSwipes.js";

export default {
	components: {},
	props: {},
	mixins: [handleSwipe],
	name: "projects",
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
.projects {
	/* Positioning */
	/* Box-model */
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: hsla(0, 0%, 0%, 0.15);
	/* Misc */
}
</style>
