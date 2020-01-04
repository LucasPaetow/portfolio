<template>
	<div v-if="getWidthStatus !== 'mobile'" class="link-wrapper">
		<router-link
			class="link"
			:to="{ name: data.linkTarget }"
			@mouseenter.native="showImage('visible')"
			@mouseleave.native="showImage('hidden')"
			>{{ data.name }}</router-link
		>
		<wrapperTransition>
			<img
				v-if="imageState === 'visible'"
				class="image"
				:src="data.image"
			/>
		</wrapperTransition>
	</div>
	<div v-else class="link-wrapper">
		<router-link class="link" :to="{ name: data.linkTarget }">{{
			data.name
		}}</router-link>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import wrapperTransition from "@/components/Wrapper/WrapperTransition.vue";

export default {
	name: "HoverLink",
	components: {
		wrapperTransition
	},
	props: {
		index: {
			type: Number
		},
		data: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			imageState: "hidden"
		};
	},
	methods: {
		showImage(status) {
			this.imageState = status;
		}
	},
	computed: {
		...mapGetters({
			getWidthStatus: "utilityModule/getWidthStatus"
		})
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.home {
	/* Positioning */
	position: relative;
	/* Box-model */
	height: 100%;
	/* Typography */
	/* Visual */
	background-color: hsla(0, 0%, 0%, 0.05);
	/* Misc */
}

.link {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.image {
	/* Positioning */
	position: absolute;
	/* Box-model */
	width: 10rem;
	height: auto;
	/* Typography */
	/* Visual */
	/* Misc */
}
</style>
