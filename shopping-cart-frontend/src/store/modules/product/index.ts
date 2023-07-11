import { getProducts } from "@/store/api/product";
import { IProductItem } from "@/store/interfaces/IProductItem";
import { IProductState } from "@/store/interfaces/IProductState";
import { ActionContext } from "vuex";

const state: IProductState = {
  productItems: [],
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state: IProductState, payload: IProductItem[]) {
    state.productItems = payload;
  },
};

const actions = {
  async getProducts({
    commit,
  }: ActionContext<IProductState, Record<string, never>>) {
    const products = await getProducts();
    commit("UPDATE_PRODUCT_ITEMS", products);
  },
};

const getters = {
  productItems: (state: IProductState) => state.productItems,
  productItemById: (state: IProductState) => (id: string) => {
    return state.productItems.find((productItem) => productItem.id === id);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
