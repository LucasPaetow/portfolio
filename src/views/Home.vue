<template>
	<article class="home" v-on:scroll="console.log('scrolling')">
		<h1>hello</h1>
		<router-link :to="{name: 'previewModal', params:{name: 'modal'} }">LinkTitle</router-link>

		<div v-for="(project, index) in getProjects" :key="index + 'hover'">
			<router-link :to="{name: 'name'}">{{project.name}}</router-link>
			<img :src="project.image" alt />
		</div>

		<wrapperTransition>
			<router-view v-if="getWidthStatus === 'mobile'"></router-view>
		</wrapperTransition>
	</article>
</template>

<script>
import { mapGetters } from "vuex";
import wrapperTransition from "@/components/Wrapper/WrapperTransition.vue";

export default {
	components: {
		wrapperTransition
	},
	props: {},
	name: "home",
	data() {
		return {};
	},
	methods: {
		scrollListener(event) {
			console.log(event);
		}
	},
	computed: {
		...mapGetters({
			getWidthStatus: "utilityModule/getWidthStatus",
			getProjects: "projectsModule/getProjects"
		})
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.home {
	/* Positioning */
	/* Box-model */
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: hsla(0, 0%, 0%, 0.05);
	/* Misc */
}
</style>
