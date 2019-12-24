export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    sidebarOpen: true
  },
  // -----------------------------------------------------------------
  getters: {
    getSidebarState: state => {
      return state.sidebarOpen;
    }
  },
  // -----------------------------------------------------------------
  mutations: {
    SIDEBAR_toggle(state) {
      //set the current state to that of the index
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
  // -----------------------------------------------------------------
  actions: {
    SIDEBAR_toggle: ({ commit }) => {
      commit("SIDEBAR_toggle");
    }
  }
};
