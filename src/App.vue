<template>
	<main id="app">
		<navbar />
		<section class="app__main" v-resize="resizeEvent">
			<router-view class="app__view" />
			<smoothRepaint>
				<sidebar class="app__sidebar" v-if="isSidebarOpen" />
			</smoothRepaint>
		</section>
	</main>
</template>

<script>
import navbar from "@/components/navigation/Navbar.vue";
import sidebar from "@/components/navigation/Sidebar.vue";
import smoothRepaint from "@/components/Wrapper/WrapperRepaint.vue";
import { resize } from "@/utility/customDirectives/resize.js";
import { mapGetters } from "vuex";
export default {
	components: {
		navbar,
		sidebar,
		smoothRepaint
	},
	directives: {
		resize
	},
	name: "app",
	methods: {
		resizeEvent() {
			//needs to be debounced
			this.$store.dispatch("utilityModule/WIDTH_init");
		}
	},
	computed: {
		...mapGetters({
			getSidebarState: "sidebarModule/getSidebarState",
			getWidthStatus: "utilityModule/getWidthStatus"
		}),
		isSidebarOpen() {
			let currentRoute = this.$route.name !== "home";
			let sidebarState = this.getSidebarState;
			let browserWidth = this.getWidthStatus !== "mobile";
			//dont show sidebar on the home screen or when its toggled off
			return currentRoute && sidebarState && browserWidth ? true : false;
		}
	},
	mounted() {
		//call the init module
		this.$store.dispatch("initModule/INIT_this");
	}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap");

:root {
	--multiplier: 1.25;
	--base-1x: 1rem;
	--base-2x: calc(var(--base-1x) * var(--multiplier));
	--base-3x: calc(var(--base-2x) * var(--multiplier));
	--base-4x: calc(var(--base-3x) * var(--multiplier));
	--base-5x: calc(var(--base-4x) * var(--multiplier));
	--base-6x: calc(var(--base-5x) * var(--multiplier));
	--base-7x: calc(var(--base-6x) * var(--multiplier));
	--base-8x: calc(var(--base-7x) * var(--multiplier));
	--base-9x: calc(var(--base-8x) * var(--multiplier));
	--base-10x: calc(var(--base-9x) * var(--multiplier));
	--base-fr2: calc((var(--base-1x) / var(--multiplier)));
	--base-fr3: calc((var(--base-fr2) / var(--multiplier)));
	--base-fr4: calc((var(--base-fr3) / var(--multiplier)));
	--base-fr5: calc((var(--base-fr4) / var(--multiplier)));

	//sidebar padding
	--sidebar-width: 15rem;
}

/*Borderbox*/
*,
:after,
:before {
	/* Positioning */
	margin: 0;
	padding: 0;
	/* Box-model */
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	/* Typography */
	text-decoration: none;
	/* Visual */
	/* Misc */
}

html,
body,
#app,
.app__main {
	/* Positioning */
	/* Box-model */
	height: 100%;
	/* Typography */
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* Visual */
	background-color: $oc-white;
	/* Misc */
}

p,
a,
i,
li,
textarea,
select {
	/* Positioning */
	/* Box-model */
	/* Typography */
	font-size: var(--base-1x);
	line-height: 150%;
	/* Visual */
	color: $oc-gray-8;
	/* Misc */
}

a {
	/* Positioning */
	/* Box-model */
	/* Typography */
	text-decoration: underline;
	/* Visual */
	/* Misc */
	cursor: pointer;
}

ul {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
	list-style: none;
}

/*--------------------- app.vue styles----------------------*/
.app__main {
	/* Positioning */
	display: grid;
	grid-template-columns: min-content 1fr;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.app__view {
	/* Positioning */
	grid-column: 1/3;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.app__sidebar {
	/* Positioning */
	display: none;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

@media screen and (min-width: 30rem) {
	.app__view {
		/* Positioning */
		grid-column: 2/3;
		grid-row: 1/2;
		/* Box-model */
		/* Typography */
		/* Visual */
		/* Misc */
	}

	.app__sidebar {
		/* Positioning */
		display: grid;
		grid-column: 1/2;
		grid-row: 1/2;
		/* Box-model */
		/* Typography */
		/* Visual */
		/* Misc */
	}
}
</style>
