import Vue from "vue";

export const scroll = {
  inserted: (element, binding) => {
    let handleScroll = scrollEvent => {
      if (binding.value(scrollEvent, element)) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }
};

Vue.directive("scroll", scroll);
