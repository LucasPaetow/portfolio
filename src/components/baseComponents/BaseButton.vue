<template>
	<button class="button">
		<slot name="beforeLabel"></slot>
		<p>{{ label }}</p>
		<slot></slot>
	</button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "BaseButton",
	components: {},
	props: {
		label: {
			type: String,
			default: "button"
		}
	},
	data() {
		return {
			buttonStatus: "idle"
		};
	},

	computed: {
		...mapGetters({})
	},
	mounted() {},
	methods: {}
};
</script>

<style scoped lang="scss">
.button {
	/* Positioning */
	position: relative;
	/* Box-model */
	width: min-content;
	height: 100%;
	padding: var(--base-fr3) var(--base-3x);
	border-radius: var(--base-fr5);
	/* Typography */
	cursor: pointer;
	font-size: var(--base-fr2);
	text-transform: uppercase;
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	/* Visual */
	box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);
	background-image: linear-gradient(180deg, #cf5b4a 0%, #cf4c57 100%);
	/* Misc */
}

.button p {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	color: white;
	/* Misc */
}

.button::before {
	/* Positioning */
	position: absolute;
	/* Box-model */
	content: " ";
	border-radius: var(--base-fr5);
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	/* Typography */
	/* Visual */
	box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: opacity 500ms;
	/* Misc */
}

.button:hover::before {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	opacity: 1;
	/* Misc */
}

.button,
.button:focus {
	/* Positioning */
	/* Box-model */
	outline: none;
	outline-style: none;
	border: none;
	/* Typography */
	/* Visual */
	/* Misc */
}

.button:active {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
	transform: translateY(0.1rem);
}
</style>
