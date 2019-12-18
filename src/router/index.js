import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/lab",
    name: "lab",
    component: () => import(/* webpackChunkName: "about" */ "../views/Lab.vue")
  },
  {
    path: "/components",
    name: "components",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Components.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //saves the scroll position if the user uses the back button
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 0 } };
    }
    return { x: 0, y: 0 };
  }
});

export default router;
