import { ActionContext } from "vuex";
import { ICart } from "@/store/interfaces/ICart";
import { ICartLine } from "@/store/interfaces/ICartLine";
import { ICartState } from "@/store/interfaces/ICartState";

import {
  getCart,
  addProductToCart,
  setProductQuantity,
  removeProductFromCart,
  clearCart,
} from "@/store/api/cart";

const state: ICartState = {
  items: [],
  total: 0,
  calculating: false,
};

const mutations = {
  SET_CART_CALCULATING(state: ICartState, calculating: boolean) {
    state.calculating = calculating;
  },
  UPDATE_CART(state: ICartState, payload: ICart) {
    state.items = payload.items;
    state.total = payload.total;
    state.calculating = false;
  },
};

const actions = {
  async getCart({ commit }: ActionContext<ICartState, Record<string, never>>) {
    commit("SET_CART_CALCULATING", true);
    const updatedCart = await getCart();
    commit("UPDATE_CART", updatedCart);
  },
  async addCartItem(
    { commit }: ActionContext<ICartState, Record<string, never>>,
    cartLine: ICartLine
  ) {
    commit("SET_CART_CALCULATING", true);
    const updatedCart = await addProductToCart(
      cartLine.productId,
      cartLine.quantity
    );
    commit("UPDATE_CART", updatedCart);
  },
  async updateCartItemQuantity(
    { commit }: ActionContext<ICartState, Record<string, never>>,
    cartLine: ICartLine
  ) {
    commit("SET_CART_CALCULATING", true);
    const updatedCart = await setProductQuantity(
      cartLine.productId,
      cartLine.quantity
    );
    commit("UPDATE_CART", updatedCart);
  },
  async removeCartItem(
    { commit }: ActionContext<ICartState, Record<string, never>>,
    cartLine: ICartLine
  ) {
    commit("SET_CART_CALCULATING", true);
    const updatedCart = await removeProductFromCart(cartLine.productId);
    commit("UPDATE_CART", updatedCart);
  },
  async removeAllCartItems({
    commit,
  }: ActionContext<ICartState, Record<string, never>>) {
    commit("SET_CART_CALCULATING", true);
    const updatedCart = await clearCart();
    commit("UPDATE_CART", updatedCart);
  },
};

const getters = {
  cartItems: (state: ICartState) => state.items,
  cartTotal: (state: ICartState) => state.total,
  cartQuantity: (state: ICartState) =>
    (state.items || []).reduce((sum, it) => sum + it.quantity, 0),
  cartCalculating: (state: ICartState) => state.calculating,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
