import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from "../views/Cats.vue";
import Dogs from "../views/Dogs.vue";
import Pet from "../views/Pet.vue";
import Humans from "../views/Humans.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cats",
    name: "cats",
    component: Cats,
  },
  {
    path: "/dogs",
    name: "dogs",
    component: Dogs,
  },
  {
    path: "/pets/:species/:id",
    name: "pets",
    component: Pet,
  },
  {
    path: "/humans",
    name: "humans",
    component: Humans,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
