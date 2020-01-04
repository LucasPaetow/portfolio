import Vue from "vue";

export const resize = {
	inserted: (element, binding) => {
		let handleResize = resizeEvent => {
			if (binding.value(resizeEvent, element)) {
				window.removeEventListener("resize", handleResize);
			}
		};
		window.addEventListener("resize", handleResize);
	}
};

Vue.directive("resize", resize);
