<template>
  <main id="app">
    <navbarPrimary />
    <router-view />
  </main>
</template>

<script>
import navbarPrimary from "@/components/navigation/NavbarPrimary.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    navbarPrimary
  },
  name: "app",
  computed: {
    ...mapGetters({})
  },
  mounted() {
    this.$store.dispatch("initModule/INIT_this");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap");

:root {
  --multiplier: 1.25;
  --base-1x: 1rem;
  --base-2x: calc(var(--base-1x) * var(--multiplier));
  --base-3x: calc(var(--base-2x) * var(--multiplier));
  --base-4x: calc(var(--base-3x) * var(--multiplier));
  --base-5x: calc(var(--base-4x) * var(--multiplier));
  --base-6x: calc(var(--base-5x) * var(--multiplier));
  --base-7x: calc(var(--base-6x) * var(--multiplier));
  --base-8x: calc(var(--base-7x) * var(--multiplier));
  --base-9x: calc(var(--base-8x) * var(--multiplier));
  --base-10x: calc(var(--base-9x) * var(--multiplier));
  --base-fr2: calc((var(--base-1x) / var(--multiplier)));
  --base-fr3: calc((var(--base-fr2) / var(--multiplier)));
  --base-fr3: calc((var(--base-fr2) / var(--multiplier)));
  --base-fr4: calc((var(--base-fr2) / var(--multiplier)));

  //sidebar padding
  --sidebar-width: 15rem;
}

/*Borderbox*/
*,
:after,
:before {
  /* Positioning */
  margin: 0;
  padding: 0;
  /* Box-model */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Typography */
  text-decoration: none;
  /* Visual */
  /* Misc */
}

body,
html,
#app {
  /* Positioning */
  /* Box-model */
  min-height: 100%;
  /* Typography */
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Visual */
  background-color: $oc-white;
  /* Misc */
}

p,
a,
i,
li,
textarea,
select {
  /* Positioning */
  /* Box-model */
  /* Typography */
  font-size: var(--1base);
  line-height: 150%;
  /* Visual */
  color: $oc-gray-8;
  /* Misc */
}

a {
  /* Positioning */
  /* Box-model */
  /* Typography */
  text-decoration: underline;
  /* Visual */
  /* Misc */
  cursor: pointer;
}

ul {
  /* Positioning */
  /* Box-model */
  /* Typography */
  /* Visual */
  /* Misc */
  list-style: none;
}
</style>
