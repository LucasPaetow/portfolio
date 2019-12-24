<template>
  <!--     @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"-->
  <transition
    mode="out-in"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
    v-resize="resizeEvent"
  >
    <slot />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { resize } from "@/utility/customDirectives/resize.js";

export default {
  components: {},
  props: {
    animationProperties: {
      type: Array,
      default: () => {
        return ["width", "height"];
      }
    }
  },
  name: "about",
  directives: {
    resize
  },
  data() {
    return {
      previousValue: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0
      },
      initalValue: null
    };
  },
  methods: {
    beforeLeave(el) {
      this.initalValue = this.calculateValues(el);
    },
    /*async leave(el, done) {
      let animatePromise = () =>
        new Promise(resolve => {
          this.animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              el.style.width = 100 - progress * 100 + "%";
            },
            callback() {
              console.log("finished");
              resolve();
            }
          });
        });

      await animatePromise();
      await done();
  },*/
    leave(el, done) {
      this.animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          el.style.width = 100 - progress * 100 + "%";
        } /*,
        callback() {
          console.log("done");
          done();
      }*/
      });
      setTimeout(() => {
        done();
      }, 1000);
    },
    afterLeave(el) {
      console.log("done", el);
    },
    /*beforeEnter(el) {
      console.log(el);
    },
    enter(el, done) {
      console.log(el);
      done();
    },
    afterEnter(el) {
      console.log(el);
  },*/
    animate({ timing, draw, duration /*, callback*/ }) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // calculate the current animation state
        let progress = timing(timeFraction);

        // draw it
        draw(progress);

        if (timeFraction < 1) {
          //loop the animation
          requestAnimationFrame(animate);
        } /*else {
          //or finish with the callback
          callback();
      }*/
      });
    },
    calculateValues(element) {
      console.log(Object.entries(element));
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

    resizeEvent() {
      this.initalValue = this.calculateValues(this.$el);
    }
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {
    // get inital values and store them
    this.initalValue = this.calculateValues(this.$el);
  }
};
</script>

<style scoped lang="scss"></style>
