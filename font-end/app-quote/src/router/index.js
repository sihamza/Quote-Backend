import Vue from "vue";
import VueRouter from "vue-router";
import Login  from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Sign In",
    component: Login
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup
  },
  {
    path: "/home",
    name: "Home",
    component: Main
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
