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
        <div class="title">{{item.title}}</div>
        <p>{{item.description}}</p>
        <div class="price-holder">
          <div class="price">{{item.price}}</div>
          <button
            class="buy"
            @click="buy(item.id)">
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
  computed: mapState({
    getProductList(state) {
      return state.homeProducts.products_list
    }
  }),
  created() {
    this.getHomeProducts()
  },
  methods: {
    getHomeProducts() {
      this.$store.dispatch('loadHomeProducts')
    },
    async buy(id) {
      let id_prod = {
        'id_product': id
      }
      await StoreService.loadCardProduct(id_prod)
        .then(data => {
          let id_products = data.data
          this.$store.dispatch('loadUserProducts', id_products )
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
