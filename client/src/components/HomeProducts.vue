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
  data() {
    return {
      productArray: []
    }
  },
  computed: mapState({
    getProductList(state) {
      return state.homeProducts.products_list
    },
    testList(state) {
      return state.homeProducts.testArray
    }
  }),
  created() {
    this.getHomeProducts()
    this.localStore()
  },
  methods: {
    getHomeProducts() {
      this.$store.dispatch('loadHomeProducts')
    },
    localStore() {
      let localValue = localStorage.getItem('userProducts')
      if (localValue !== null) {
        let parseLocalValue = JSON.parse(localStorage.getItem('userProducts'))
        this.productArray = parseLocalValue
      }
    },
    advanceBuy(product) {
      let actualProductId = product.id
//      product.quantity = 1
      if (this.productArray.length === 0) {
        this.productArray.push(product)
      } else {
        this.productArray.forEach(item => {
          if (item.id == actualProductId) {
            item.quantity++
            console.log(item.quantity)
          } else {
            console.log('bad')
//            this.productArray.push(product)
          }
        })
      }
      console.log(this.productArray)
//      let serialProducts = JSON.stringify(this.productArray)
//      localStorage.setItem('userProducts', serialProducts)
//      this.$store.commit('setAdvanceProduct')
    }
  }
}
</script>
