import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Cart from "../components/cart/Cart.vue";
import ProductList from "../components/product/ProductsList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/products",
    component: ProductList,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/",
    redirect: "/products",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
