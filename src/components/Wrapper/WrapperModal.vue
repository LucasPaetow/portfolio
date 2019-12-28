<template>
	<section role="dialog" class="modal-wrapper">
		<aside
			class="wrapper__background"
			@click="$router.back()"
			:style="{ backgroundColor: overlayColor }"
		></aside>
		<wrapperTransition>
			<div class="wrapper__content" v-if="modalContentActive" :style="overlayPositioning">
				<slot />
			</div>
		</wrapperTransition>
	</section>
</template>

<script>
import wrapperTransition from "@/components/Wrapper/WrapperTransition.vue";

export default {
	name: "modal",
	components: {
		wrapperTransition
	},
	props: {
		overlayColorState: {
			type: String
		},
		focusElement: {
			default: null,
			type: Object
		},
		overlayPosition: {
			type: String,
			default: "center center"
		}
	},
	data() {
		return {
			scrollPosition: 0,
			modalContentActive: false
		};
	},
	computed: {
		overlayColor() {
			if (this.overlayColorState === "light") {
				return "hsla(0, 0%, 100%, 0.9)";
			} else if (this.overlayColorState === "dark") {
				return "hsla(0, 0%, 0%, 0.2)";
			} else {
				return "";
			}
		},
		overlayPositioning() {
			let position = this.overlayPosition.split(" ");
			let xAxis = {
				left: "start",
				center: "center",
				right: "end"
			};
			let yAxis = {
				top: "start",
				center: "center",
				bottom: "end"
			};

			return {
				justifySelf: xAxis[position[0]],
				alignSelf: yAxis[position[1]]
			};

			//justify-self = start, center, end =>  left center right
			//align-self = start center end => top center bottom
		}
	},
	methods: {
		activate() {
			// Save the current active element
			// so we can restore it when closing
			// the popup overlay.
			this.previousActiveElement = document.activeElement;

			// Prevent the background to be scrollable.
			this.disableScrolling();
			// Make it impossible to focus elements in
			// the background when using the TAB key.
			this.inert();
			// Focus the first focusable element in the dialog.
			this.focusFirstDescendant();
			//activate the modal to show the transition
			this.activeModal(true);
		},
		async deactivate() {
			this.activeModal(false);
			this.enableScrolling();
			await this.inert(false);
			this.restoreFocus();
		},
		activeModal(boolean) {
			this.modalContentActive = boolean;
		},
		// Disable scrolling on all devices (including iOS).
		disableScrolling() {
			this.scrollPosition = window.pageYOffset;

			let store = document.getElementById("app");
			store.style.overflowY = "scroll";
			store.style.position = "fixed";
			store.style.top = `-${this.scrollPosition}px`;
			store.style.left = "0";
			store.style.right = "0";
		},
		enableScrolling() {
			let store = document.getElementById("app");
			store.style.overflowY = "";
			store.style.position = "";
			store.style.left = "";
			store.style.right = "";

			window.scrollTo(0, this.scrollPosition);
		},
		// Make all elements except the overlay inert.
		async inert(status = true) {
			await this.$nextTick();
			[...this.$root.$el.children].forEach(child => {
				if (child === this.$el || child.contains(this.$el)) return;
				child.inert = status;
			});
		},
		focusFirstDescendant(element) {
			console.log(element);
			const focusable = this.$el.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			if (focusable[0] && focusable[0].focus) focusable[0].focus();
		},
		restoreFocus() {
			const element = this.focusElement || this.previousActiveElement;

			if (element && element.focus) element.focus();
		}
	},
	mounted() {
		const close = e => {
			const ESC = 27;
			if (e.keyCode !== ESC) return;
			this.$emit("close");
		};
		// Close the modal when the
		// user presses the ESC key.
		document.addEventListener("keyup", close);
		// Activate the modal when the component is mounted.
		this.activate();
	},
	destroyed() {
		document.removeEventListener("keyup", close);
		this.deactivate();
	}
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
	/* Positioning */
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 5;
	display: grid;
	/* Box-model */
	width: 100vw;
	height: 100vh;
}

.wrapper__background {
	/* Positioning */
	grid-column: 1/2;
	grid-row: 1/2;
	z-index: 1;
	/* Box-model */
	width: 100vw;
	height: 100vh;
	/* Typography */
	/* Visual */
}

.wrapper__content {
	/* Positioning */
	grid-column: 1/2;
	grid-row: 1/2;
	z-index: 2;
	position: relative;
	/* Box-model */
	/* Typography */
	/* Visual */
}
</style>
