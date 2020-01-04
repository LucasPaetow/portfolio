export default {
	namespaced: true,
	// -----------------------------------------------------------------
	state: {
		projects: {
			project1: {
				name: "e-commerce",
				routing: {
					desktop: {
						target: "",
						params: ""
					},
					mobile: {
						target: "ModalProject",
						paramName: "preview",
						paramContent: "e-commerce"
					}
				},
				description:
					"An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms",
				image:
					"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80"
			},
			project2: {
				name: "landing page",
				routing: {
					desktop: {
						target: "",
						params: ""
					},
					mobile: {
						target: "ModalProject",
						paramName: "preview",
						paramContent: "e-commerce"
					}
				},
				description:
					"An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms",
				image:
					"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80"
			},
			project3: {
				name: "feedback generator",
				routing: {
					desktop: {
						target: "",
						params: ""
					},
					mobile: {
						target: "ModalProject",
						paramName: "preview",
						paramContent: "e-commerce"
					}
				},
				description:
					"An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms. An even smaller paragraph explaining atoms",
				image:
					"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80"
			}
		},
		basics: {
			name: "projects",
			description:
				"A small paragraph for why this is interesting or why this his here. Nothing more than 2 lines with only very basic information. Maybe hint at the atomic framework."
		}
	},
	// -----------------------------------------------------------------
	getters: {
		getContentData: state => {
			return Object.values(state.projects);
		},
		getContentBasics: state => {
			return state.basics;
		}
	},
	// -----------------------------------------------------------------
	mutations: {},
	// -----------------------------------------------------------------
	actions: {}
};
