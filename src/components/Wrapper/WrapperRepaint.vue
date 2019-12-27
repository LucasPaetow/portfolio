<template>
	<transition
		@before-leave="beforeTransition"
		@leave="whileTransition"
		@after-leave="afterTransition"
		@before-enter="beforeTransition"
		@enter="whileTransition"
		@after-enter="afterTransition"
	>
		<slot />
	</transition>
</template>

<script>
import * as easing from "@/utility/easings/easings.js";

export default {
	props: {
		animationProperties: {
			type: Array,
			default: () => {
				return ["width"];
			}
		},
		easeOut: {
			type: String,
			default: "easeOutSine"
		},
		easeIn: {
			type: String,
			default: "easeInSine"
		},
		duration: {
			type: Number,
			default: 250
		}
	},
	name: "rafWrapper",
	data() {
		return {
			currentValue: null,
			previousValue: null,
			transitionState: null
		};
	},
	methods: {
		beforeTransition(el) {
			this.transitionState = "beforeTransition";
			this.previousValue = this.calculateValues(el);
			this.changeChildElements(el, "hide");
		},
		async whileTransition(el, done) {
			this.transitionState = "whileTransition";
			this.currentValue = this.calculateValues(el);

			let currentValue = this.currentValue;
			let previousValue = this.previousValue;
			let animationProperties = this.animationProperties;
			let duration = this.duration;

			//get a direction for every property in terms of "open" and "close"
			let animationDirection = await this.decideAnimationDirection(
				currentValue,
				previousValue,
				animationProperties
			);

			await this.animate({
				duration,
				timing: easing[this.easeOut],
				draw(progress) {
					//for every Property animate in the given direction
					animationProperties.forEach(prop => {
						if (animationDirection[prop] === "close") {
							//decrements the element by relative progress steps
							el.style[prop] =
								currentValue[prop] -
								currentValue[prop] * progress +
								"px";
						} else {
							//increments the element to the current value by relative progress steps
							el.style[prop] =
								previousValue[prop] +
								currentValue[prop] * progress +
								"px";
						}
					});
				}
			});
			await done();
		},
		afterTransition(el) {
			this.transitionState = "afterTransition";
			this.changeChildElements(el, "show");
		},
		animate({ timing, draw, duration }) {
			let start = performance.now();
			return new Promise(resolve => {
				requestAnimationFrame(function animate(time) {
					// timeFraction goes from 0 to 1
					let timeFraction = (time - start) / duration;
					if (timeFraction > 1) timeFraction = 1;
					// calculate the current animation state
					let progress = timing(timeFraction);
					draw(progress); // draw it
					timeFraction < 1
						? requestAnimationFrame(animate)
						: resolve("resolved animation");
				});
			});
		},
		calculateValues(element) {
			//if the component was not rendered before it only has the Vue Component Array entry not its own class entry
			if (Object.entries(element).length === 1) return;

			const {
				top,
				right,
				bottom,
				left,
				width,
				height,
				x,
				y
			} = element.getBoundingClientRect();
			return { top, right, bottom, left, width, height, x, y };
		},
		decideAnimationDirection(current, previous, animationProperties) {
			if (!current || !previous || !animationProperties)
				throw "need all values";

			let propertyDirections = {};

			animationProperties.forEach(prop => {
				propertyDirections[prop] =
					previous[prop] < current[prop] ? "open" : "close";
			});
			return propertyDirections;
		},
		changeChildElements(element, status) {
			if (element.children.length === 0) return;

			let opacity = status === "hide" ? 0 : "";
			let display = status === "hide" ? "none" : "";
			let children = element.children;
			//hides the children elements with a small visual duration
			let changeOpacity = childArray =>
				childArray.forEach(child => {
					child.style.transitionDuration = `${this.duration / 10}ms`;
					child.style.opacity = opacity;
				});
			//removes them from render tree so there is less to animate
			let changeDisplay = childArray =>
				childArray.forEach(child => {
					child.style.display = display;
				});

			if (status === "hide") {
				changeOpacity(children);
				changeDisplay(children);
			} else {
				changeDisplay(children);
				changeOpacity(children);
			}
		}
	}
};
</script>

<style scoped lang="scss"></style>
