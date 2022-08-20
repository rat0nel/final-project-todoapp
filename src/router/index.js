import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  },
  {
  path: "/auth",
  name: "Login",
  component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
