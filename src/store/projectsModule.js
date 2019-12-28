export default {
	namespaced: true,
	// -----------------------------------------------------------------
	state: {
		project1: {
			name: "e-commerce",
			linkTarget: "project",
			params: "e-commerce",
			description:
				"An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms",
			image:
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80"
		}
	},
	// -----------------------------------------------------------------
	getters: {
		getProjects: state => {
			return Object.values(state);
		}
	},
	// -----------------------------------------------------------------
	mutations: {},
	// -----------------------------------------------------------------
	actions: {}
};
