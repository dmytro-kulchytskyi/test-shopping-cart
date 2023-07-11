import { createStore } from "vuex";
import cart from "@/store/modules/cart";
import product from "@/store/modules/product";

export default createStore({
    modules: {
        cart,
        product
    },
});
