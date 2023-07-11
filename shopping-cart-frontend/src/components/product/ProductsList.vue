<template>
    <div class="container is-fluid">
        <div class="tile is-ancestor">
            <div class="tile is-parent" v-for="productItem in productItems" :key="productItem.id">
                <ProductListItem :productItem="productItem" />
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters} from 'vuex';
    import ProductListItem from './ProductListItem'
    export default {
        name: "ProductsList",
        components: {
            ProductListItem
        },
        computed: {
            ...mapGetters([
                'productItems'
            ])
        },
        created() {
            this.$store.dispatch('getProductItems');
        }
    };
</script>