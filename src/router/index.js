import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp.vue"
import Login from "../components/Login.vue"
import Auth from "../views/Auth.vue"


const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  },
  {
  path: "/auth",
  name: "Auth",
  component: Auth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/*",
    component: 404
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
