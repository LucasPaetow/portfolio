<template>
  <article class="home" v-on:scroll="console.log('scrolling')">
    <h1>hello</h1>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {},
  name: "home",
  data() {
    return {};
  },
  methods: {
    scrollListener(event) {
      console.log(event);
    }
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {}
};
</script>

<style scoped>
.home {
  /* Positioning */
  /* Box-model */
  height: 100%;
  /* Typography */
  /* Visual */
  background-color: hsla(0, 0%, 0%, 0.05);
  /* Misc */
}
</style>
