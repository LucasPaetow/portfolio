export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    loading: false
  },
  // -----------------------------------------------------------------
  getters: {
    getLoadingState: state => {
      return state.sidebarOpen;
    }
  },
  // -----------------------------------------------------------------
  mutations: {
    INIT_setLoading(state, boolean) {
      //set the current state to that of the index
      state.sidebarOpen = boolean;
    }
  },
  // -----------------------------------------------------------------
  actions: {
    INIT_this: async ({ dispatch }) => {
      //start with the loading call
      await dispatch("INIT_setLoading", true);

      // do init stuff
      //await dispatch("sidebarModule/SIDEBAR_init", null, { root: true });

      //end with the loading completion
      await dispatch("INIT_setLoading", false);
    },
    INIT_setLoading: ({ commit }, boolean) => {
      commit("INIT_setLoading", boolean);
    }
  }
};
