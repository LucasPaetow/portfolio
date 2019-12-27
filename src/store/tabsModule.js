export default {
	namespaced: true,
	// -----------------------------------------------------------------
	state: {
		tabArray: ["projects", "lab", "components", "about"]
	},
	// -----------------------------------------------------------------
	getters: {
		getSurroundingTabs: state => current => {
			let currentIndex = state.tabArray.findIndex(tab => tab === current);

			return {
				//inverted due to the inverted nature of swipe gestures
				left:
					state.tabArray[
						currentIndex === state.tabArray.length - 1
							? currentIndex
							: currentIndex + 1
					],
				right:
					state.tabArray[
						currentIndex === 0 ? currentIndex : currentIndex - 1
					]
			};
		}
	},
	// -----------------------------------------------------------------
	mutations: {},
	// -----------------------------------------------------------------
	actions: {}
};
