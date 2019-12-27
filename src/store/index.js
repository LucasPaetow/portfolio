import Vue from "vue";
import Vuex from "vuex";

import aboutModule from "@/store/aboutModule.js";
import contactModule from "@/store/contactModule.js";
import projectsModule from "@/store/projectsModule.js";
import componentsModule from "@/store/componentsModule.js";
import labModule from "@/store/labModule.js";
import utilityModule from "@/store/utilityModule.js";
import sidebarModule from "@/store/sidebarModule.js";
import tabsModule from "@/store/tabsModule.js";
import initModule from "@/store/initModule.js";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		aboutModule,
		contactModule,
		projectsModule,
		componentsModule,
		labModule,
		utilityModule,
		sidebarModule,
		tabsModule,
		initModule
	}
});
