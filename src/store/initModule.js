export default {
	namespaced: true,
	// -----------------------------------------------------------------
	state: {
		loadingStatus: "idle"
	},
	// -----------------------------------------------------------------
	getters: {
		getLoadingStatus: state => {
			return state.loadingStatus;
		}
	},
	// -----------------------------------------------------------------
	mutations: {
		INIT_setLoading(state, status) {
			//set the current state to that of the index
			state.sidebarOpen = status;
		}
	},
	// -----------------------------------------------------------------
	actions: {
		INIT_this: async ({ dispatch }) => {
			//start with the loading call
			await dispatch("INIT_setLoading", "loading");

			// do init stuff
			await dispatch("utilityModule/WIDTH_init", null, { root: true });

			//end with the loading completion
			await dispatch("INIT_setLoading", "idle");
		},
		INIT_setLoading: ({ commit }, boolean) => {
			commit("INIT_setLoading", boolean);
		}
	}
};
