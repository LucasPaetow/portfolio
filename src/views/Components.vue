<template>
  <article class="components" v-touch:swipe="handleSwipe">components</article>
</template>

<script>
import { mapGetters } from "vuex";
import handleSwipe from "@/utility/mixins/handleSwipes.js";

export default {
  components: {},
  props: {},
  mixins: [handleSwipe],
  name: "components",
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

<style scoped lang="scss">
.components {
  /* Positioning */
  /* Box-model */
  height: 100%;
  /* Typography */
  /* Visual */
  background-color: hsla(0, 0%, 0%, 0.35);
  /* Misc */
}
</style>
