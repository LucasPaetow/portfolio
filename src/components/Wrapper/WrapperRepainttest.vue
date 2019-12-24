<template>
  <transition @leave="leave" :css="false">
    <slot />
  </transition>
</template>

<script>
export default {
  methods: {
    leave(el, done) {
      this.animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          //goes from 100 to 0%
          el.style.width = 100 - progress * 100 + "%";
        },
        callback() {
          done();
        }
      });
    },
    animate({ timing, draw, duration, callback }) {
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
        } else {
          //or finish with the callback
          callback();
        }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
