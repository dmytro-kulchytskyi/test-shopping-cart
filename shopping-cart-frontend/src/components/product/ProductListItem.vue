<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h4>{{ productItem.title }}</h4>
        <a
          class="button is-rounded is-pulled-left"
          @click="addCartItem({ productId: productItem.id, quantity: 1 })"
        >
          <strong>Add to Cart</strong>
        </a>
        <br />
        <p class="mt-4">
          {{ productItem.description }}
        </p>
      </div>
      <div class="media">
        <div class="media-content">
          <img :src="productItem.image" />
        </div>
        <div class="media-right">
          <a class="button is-primary is-light">
            <strong>$ {{ productItem.price / 100 }}</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>
