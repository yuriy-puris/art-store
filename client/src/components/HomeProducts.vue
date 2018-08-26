<template>
  <div class="container">
    <h1>New Products</h1>
    <div class="product-holder">
      <div
        v-for="(item, index) in getProductList"
        class="item">
        <div
          class="img"
          v-bind:style="{ backgroundImage: 'url('+item.url+')' }">
        </div>
        <div class="title">{{ item.title }}</div>
        <p>{{ item.description }}</p>
        <div class="price-holder">
          <div class="price">{{ item.price }}</div>
          <button
            class="buy"
            @click="advanceBuy(item)">
              Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreService from '@/services/StoreService'
import { mapState } from 'vuex'

export default {
  name: 'HomeProducts',
  computed: {
    ...mapState({
      getProductList(state) {
        return state.homeProducts.products_list
      },
      testList(state) {
        return state.homeProducts.testArray
      },
    }),
  },
  created() {
    this.getHomeProducts()
  },
  methods: {
    getHomeProducts() {
      this.$store.dispatch('loadHomeProducts')
    },
    advanceBuy(product) {
      this.$store.commit('setAdvanceProduct', { product })
    }
  }
}
</script>
