export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    sidebarOpen: false
  },
  // -----------------------------------------------------------------
  getters: {
    getSidebarState: state => {
      return state.sidebarOpen;
    }
  },
  // -----------------------------------------------------------------
  mutations: {
    SIDEBAR_toggle(state, boolean) {
      //set the current state to that of the index
      state.sidebarOpen = boolean;
    }
  },
  // -----------------------------------------------------------------
  actions: {
    SIDEBAR_init: ({ commit }) => {
      //check if this is viewed on tablet / mobile
      let width = window.innerWidth;

      if (width < 800) {
        // if so, hide the navbar
        commit("SIDEBAR_toggle", false);
        return "not enough width for the sidebar";
      } else {
        // if not, show the navbar
        commit("SIDEBAR_toggle", true);
        return "sidebar is fine";
      }
    },
    SIDEBAR_toggle: ({ commit }, boolean) => {
      commit("SIDEBAR_toggle", boolean);
    }
  }
};
