import { mapGetters } from "vuex";

export default {
	methods: {
		handleSwipe(direction) {
			//return early if swiped top and or bottom
			if (direction === "top" || direction === "bottom") return;

			let swipeNext = direction => {
				let target = this.swipeTargets(this.$route.name)[direction];
				let current = this.$route.name;
				if (target !== current) this.$router.push(target);
			};

			swipeNext(direction);
		}
	},
	computed: {
		...mapGetters({
			swipeTargets: "tabsModule/getSurroundingTabs"
		})
	}
};
