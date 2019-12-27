export default {
	namespaced: true,
	// -----------------------------------------------------------------
	state: {
		widthStatus: null
	},
	// -----------------------------------------------------------------
	getters: {
		getWidthStatus: state => {
			return state.widthStatus;
		}
	},
	// -----------------------------------------------------------------
	mutations: {
		WIDTH_setStatus(state, status) {
			state.widthStatus = status;
		}
	},
	// -----------------------------------------------------------------
	actions: {
		WIDTH_init: ({ commit }) => {
			let width = window.innerWidth;

			if (width < 500) {
				commit("WIDTH_setStatus", "mobile");
			} else if (width < 900) {
				commit("WIDTH_setStatus", "tablet");
			} else {
				commit("WIDTH_setStatus", "desktop");
			}
		},
		WIDTH_setStatus: ({ commit }, boolean) => {
			commit("WIDTH_setStatus", boolean);
		}
	}
};
