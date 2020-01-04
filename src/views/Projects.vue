<template>
	<article v-touch:swipe="handleSwipe" class="projects">
		<header class="projects__header">
			<h1 class="header__headline">{{ getContentBasics.name }}</h1>
			<h3 class="header__subline">
				{{ getContentBasics.description }}
			</h3>
		</header>

		<section class="projects__section">
			<h2 class="section__headline">Projects</h2>
			<p class="section__description">some of my bigger projects.</p>
		</section>
	</article>
</template>

<script>
import { mapGetters } from "vuex";
import handleSwipe from "@/utility/mixins/handleSwipes.js";

export default {
	components: {},
	mixins: [handleSwipe],
	props: {},
	data() {
		return {};
	},
	methods: {},
	computed: {
		...mapGetters({
			getWidthStatus: "utilityModule/getWidthStatus",
			getSidebarState: "sidebarModule/getSidebarState"
		}),
		getContentBasics() {
			//the getter name is in camel Case and needs to be capitalized
			return this.$store.getters[
				`${this.$route.name}Module/getContentBasics`
			];
		},
		getContentData() {
			//the getter name is in kebab Case and needs to be capitalized
			return this.$store.getters[
				`${this.$route.name}Module/getContentData`
			];
		}
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
