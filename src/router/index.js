import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sensor from "@/views/Sensor.vue";
import AddSensor from "@/views/AddSensor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sensor/:id",
    name: "Sensor",
    component: Sensor,
  },
  {
    path: "/add",
    name: "Add Sensor",
    component: AddSensor,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
