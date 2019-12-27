<template>
	<section
		class="navbar"
		v-scroll="scrollEvent"
		id="navbar"
		:class="isScrolled ? 'navbar--shadow' : ''"
	>
		<div class="navbar__top" id="navbar__top">
			<router-link
				class="navbar__link navbar__link--unstyled navbar__link--logo"
				:to="{ name: 'home', params: {} }"
			>
				<div class="navbar__logo">
					<h3 class="logo__text">LP</h3>
				</div>
			</router-link>
			<router-link
				class="navbar__link navbar__link--unstyled navbar__link--button"
				:to="{ name: 'contact', params: {} }"
			>
				<button class="navbar__button" @click="toggleSidebar">contact</button>
			</router-link>
		</div>
		<div class="navbar__bottom">
			<router-link class="navbar__link" :to="{ name: 'projects', params: {} }">Projects</router-link>
			<router-link class="navbar__link" :to="{ name: 'lab', params: {} }">Lab</router-link>
			<router-link class="navbar__link" :to="{ name: 'components', params: {} }">Components</router-link>
			<router-link class="navbar__link" :to="{ name: 'about', params: {} }">About</router-link>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import { scroll } from "@/utility/customDirectives/scroll.js";

export default {
	components: {},
	props: {},
	directives: {
		scroll
	},
	name: "navbar",
	data() {
		return {
			isScrolled: false,
			lastScrollTop: window.pageYOffset
		};
	},
	methods: {
		toggleSidebar() {
			this.$store.dispatch("sidebarModule/SIDEBAR_toggle");
		},
		scrollEvent() {
			//check for inital scroll and change data
			window.scrollY === 0
				? (this.isScrolled = false)
				: (this.isScrolled = true);

			//check for mobile
			if (!this.isMobile) return;

			//check for scroll direction
			let scrollDirection = this.getScrollDirection();
			//do something on scroll down
			this.moveNavbar(scrollDirection);
		},
		getScrollDirection() {
			let currentScrollTop = window.pageYOffset;
			//check if the current scroll position is greater than the old one
			let scrollDirection =
				currentScrollTop > this.lastScrollTop ? "down" : "up";
			//update the old position
			this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
			return scrollDirection;
		},
		moveNavbar(direction) {
			let fullNav = document.getElementById("navbar");
			let topNav = document.getElementById("navbar__top");

			if (direction === "down") {
				fullNav.style.transform = `translateY(-${topNav.clientHeight}px)`;
			} else {
				fullNav.style.transform = `translateY(0)`;
			}
		}
	},
	computed: {
		...mapGetters({
			getWidthStatus: "utilityModule/getWidthStatus"
		}),
		isMobile() {
			return this.getWidthStatus === "mobile" ? true : false;
		}
	}
};
</script>

<style scoped lang="scss">
.navbar {
	/* Positioning */
	position: sticky;
	display: grid;
	grid-template-rows: 1fr 1fr;
	/* Box-model */
	top: 0;
	/* Typography */
	background-color: white;
	/* Visual */
	/* Misc */
}

.navbar::before {
	/* Positioning */
	position: absolute;
	z-index: -1;
	/* Box-model */
	content: " ";
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	/* Typography */
	/* Visual */
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
		0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
		0 22.3px 17.9px rgba(0, 0, 0, 0.042),
		0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);

	/* Misc */
	opacity: 0;
}

.navbar--shadow.navbar::before {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
	opacity: 1;
}

@media screen and (min-width: 30rem) {
	.navbar {
		/* Positioning */
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		/* Box-model */
		/* Typography */
		/* Visual */
		/* Misc */
	}
}

.navbar__top {
	/* Positioning */
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.navbar__bottom {
	/* Positioning */
	display: grid;
	grid-auto-flow: column;
	justify-content: space-around;
	align-content: center;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

@media screen and (min-width: 30rem) {
	.navbar__top {
		/* Positioning */
		grid-column: 1/4;
		grid-row: 1/2;
		grid-template-columns: 1fr 1fr 1fr;
		/* Box-model */
		/* Typography */
		/* Visual */
		/* Misc */
	}

	.navbar__bottom {
		/* Positioning */
		grid-column: 2/3;
		grid-row: 1/2;
		grid-auto-flow: column;
		justify-content: space-around;
		align-content: center;
		/* Box-model */
		/* Typography */
		/* Visual */
		/* Misc */
	}
}

.navbar__link--logo {
	/* Positioning */
	grid-column: 1/2;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}
.navbar__link--button {
	/* Positioning */
	grid-column: 3/4;
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
}

.navbar__logo {
	/* Positioning */
	grid-column: 1/2;
	/* Box-model */
	padding: 0.5rem 1rem;
	/* Typography */
	/* Visual */
	border: 1px solid grey;
	/* Misc */
}

.navbar__button {
	/* Positioning */
	grid-column: 3/4;
	/* Box-model */
	padding: 0.5rem 1rem;
	width: 100%;
	/* Typography */
	/* Visual */
	border: 1px solid grey;
	/* Misc */
}
</style>
