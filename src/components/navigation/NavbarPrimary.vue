<template>
  <section class="navbar-primary">
    <router-link :to="{ name: '', params: {} }"></router-link>hello
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {},
  name: "navbarPrimary",
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
.navbar-primary {
  /* Positioning */
  /* Box-model */
  /* Typography */
  /* Visual */
  /* Misc */
}
</style>
