<template>
  <div class="box">
    <div class="cart-item__details">
      <div class="columns">
        <div class="column">
          <p class="is-inline">{{ cartItem.product.title }}</p>
          <span class="cart-item--price has-text-info has-text-weight-bold">
            ${{ cartItem.product.price / 100 }}
          </span>
        </div>
        <div class="column">
          <button class="button is-small" @click="decrementQuantity">-</button>
          <span class="tag is-info is-medium">{{ cartItem.quantity }}</span>
          <button class="button is-small" @click="incrementQuantity">+</button>
        </div>
        <div class="column">
          <span class="cart-item--price has-text-info has-text-weight-bold">
            ${{ cartItem.total / 100 }}
          </span>
        </div>
        <div class="column">
          <button
            class="button is-danger is-small"
            @click="removeCartItem(cartItem)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
    incrementQuantity() {
      this.$store.dispatch("updateCartItemQuantity", {
        productId: this.cartItem.productId,
        quantity: this.cartItem.quantity + 1,
      });
    },
    decrementQuantity() {
      if (this.cartItem.quantity > 1) {
        this.$store.dispatch("updateCartItemQuantity", {
          productId: this.cartItem.productId,
          quantity: this.cartItem.quantity - 1,
        });
      }
    },
  },
};
</script>
