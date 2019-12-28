<template>
	<wrapperModal overlayColorState="dark">
		<section class="modal">
			<h2 class="modal__headline">hello</h2>
		</section>
	</wrapperModal>
</template>

<script>
import wrapperModal from "@/components/Wrapper/WrapperModal.vue";
export default {
	name: "modalPreview",
	components: {
		wrapperModal
	},
	props: {},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.modal {
	position: relative;
	height: 50vh;
	width: 50vw;
	background-color: $oc-gray-6;
}
</style>
