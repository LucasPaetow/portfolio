<template>
	<article class="home">
		<header class="home__header">
			<h1 class="header__headline">Headline</h1>
			<h3 class="header__subline">
				Some intro text with a few sentences about me, what I like to do
				and maybe were I work? But there is nothing fixed just yet.
				Anything goes
			</h3>
		</header>

		<section class="home__section">
			<h2 class="section__headline">Projects</h2>
			<p class="section__description">some of my bigger projects.</p>

			<customHoverLink
				v-for="(project, index) in getProjects"
				:key="index + 'hover'"
				:data="project"
				:index="index"
				:class="[
					index < 5
						? 'section__links--first-row'
						: 'section__links--last-row',
					'section__links'
				]"
			/>
		</section>

		<!--<router-link :to="{ name: 'previewModal', params: { name: 'modal' } }"
			>LinkTitle</router-link
		>-->

		<wrapperTransition>
			<router-view v-if="getWidthStatus === 'mobile'"></router-view>
		</wrapperTransition>
	</article>
</template>

<script>
import { mapGetters } from "vuex";
import wrapperTransition from "@/components/Wrapper/WrapperTransition.vue";
import customHoverLink from "@/components/customComponents/CustomHoverLink.vue";

export default {
	name: "Home",
	components: {
		wrapperTransition,
		customHoverLink
	},
	props: {},
	data() {
		return {};
	},
	methods: {},
	computed: {
		...mapGetters({
			getWidthStatus: "utilityModule/getWidthStatus",
			getProjects: "projectsModule/getContentData"
		})
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.home {
	/* Positioning */
	display: grid;
	grid-template-columns: 1fr 1.61fr 1fr;
	grid-template-rows: 20rem;
	grid-auto-rows: min-content;
	grid-row-gap: var(--base-4x);
	/* Box-model */
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: hsla(0, 0%, 0%, 0.05);
	/* Misc */
}

.home__header {
	/* Positioning */
	grid-column: 2/3;
	align-self: end;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.home__section {
	/* Positioning */
	grid-column: 2/3;
	display: grid;
	grid-template-columns: 1fr 1.25fr 1.25fr;
	grid-column-gap: var(--base-4x);
	grid-row-gap: var(--base-2x);
	/* Box-model */
	padding: var(--base-4x) 0;
	/* Typography */
	/* Visual */
	border-bottom: 1px solid darkgray;
	/* Misc */
}

.section__headline {
	/* Positioning */
	grid-column: 1/4;
	grid-row: 1/2;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.section__description {
	/* Positioning */
	grid-column: 1/2;
	grid-row: 2/4;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.section__links--first-row {
	/* Positioning */
	grid-column: 2/3;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.section__links--last-row {
	/* Positioning */
	grid-column: 3/4;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}
</style>
