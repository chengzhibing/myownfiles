import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => {import("../components/Login.vue")}
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
})

export default router;