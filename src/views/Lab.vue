<template>
	<article class="lab" v-touch:swipe="handleSwipe">lab</article>
</template>

<script>
import { mapGetters } from "vuex";
import handleSwipe from "@/utility/mixins/handleSwipes.js";

export default {
	components: {},
	props: {},
	mixins: [handleSwipe],
	name: "lab",
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
.lab {
	/* Positioning */
	/* Box-model */
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: hsla(0, 0%, 0%, 0.25);
	/* Misc */
}
</style>
