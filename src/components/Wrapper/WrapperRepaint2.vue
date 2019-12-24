<template>
  <component :is="semanticTag">
    <slot />
  </component>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {
    semanticTag: {
      type: String,
      default: "div"
    }
  },
  name: "about",
  data() {
    return {
      previousValue: 0,
      initalValue: null
    };
  },
  methods: {
    animate({ timing, draw, duration }) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // calculate the current animation state
        let progress = timing(timeFraction);

        draw(progress); // draw it

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    },
    calculateValues(element) {
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
    }
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {
    // get inital values and store them
    this.initalValue = this.calculateValues(this.$el);
    console.log(this.initalValue);
  },
  beforeUpdate() {},
  updated() {}
};
</script>

<style scoped lang="scss"></style>
