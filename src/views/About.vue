<template>
  <article class="about" v-touch:swipe="handleSwipe">about</article>
</template>

<script>
import { mapGetters } from "vuex";
import handleSwipe from "@/utility/mixins/handleSwipes.js";

export default {
  components: {},
  props: {},
  mixins: [handleSwipe],
  name: "about",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({})
  },
  mounted() {}
};
</script>

<style scoped>
.about {
  /* Positioning */
  /* Box-model */
  height: 100%;
  /* Typography */
  /* Visual */
  background-color: hsla(0, 0%, 0%, 0.45);
  /* Misc */
}
</style>
