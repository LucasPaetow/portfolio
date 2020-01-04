<template>
	<article class="contact">
		<router-link :to="{ name: 'contactSidebar' }">contact</router-link>
		<router-view></router-view>
	</article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	components: {},
	props: {},
	name: "contact",
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
.contact {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}
</style>
