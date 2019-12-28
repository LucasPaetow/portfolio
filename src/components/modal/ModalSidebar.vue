<template>
	<wrapperModal overlayColorState="dark">
		<sidebar></sidebar>
	</wrapperModal>
</template>

<script>
import wrapperModal from "@/components/Wrapper/WrapperModal.vue";
import sidebar from "@/components/navigation/Sidebar.vue";
export default {
	name: "modalSidebar",
	components: {
		wrapperModal,
		sidebar
	},
	props: {},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.modal {
}
</style>
