<template>
  <div class="page-checkout">
    <h1>Checkout</h1>
    <div class="container">
      <div class="wrapper-checkout">
        <form :class="['form-checkout', loginUser ? 'form-login' : 'form-quest']" action="#">
          <div class="form-row">
            <label for="name">Your name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              v-model="userData.userName">
          </div>
          <div class="form-row">
            <label for="email">Your email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model="userData.userEmail">
          </div>
          <div class="form-row">
            <label for="phone">Your phone</label>
            <input
              id="phone"
              type="phone"
              class="form-control">
          </div>
        </form>
        <div class="card-purchases">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in userAdvancedProducts">
                <td>
                  <div
                    class="product-img"
                    v-bind:style="{ backgroundImage: 'url('+item.url+')' }">
                  </div>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            value="Buy"
            @click="finalBuy()">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import StoreService from '@/services/StoreService'

  export default {
    name: 'Checkout',
    data() {
      return {
        loginUser: true
      }
    },
    computed: {
      userData() {
        return this.$store.state.userData.userData
      },
      userAdvancedProducts() {
        return this.$store.state.advanceProducts.advanceProducts
      }
    },
    methods: {
      async loadUserData() {
//          if (localStorage.getItem('advanceProducts') === null) {
//            this.loginUser = !this.loginUser
//          } else {
//            await StoreService.checkout()
//          }
        await StoreService.checkout()
          .then(data => {
            // parse cookie
            let cookie = document.cookie
            let cookieObj = {}
            cookie.split("; ").forEach(item => {
              let i = item.split('=')
              cookieObj[i[0]] = i[1]
            })
            if (!cookieObj.purchase) {
              this.loginUser = false
              this.getUserAdvancedProducts()
            } else {
              this.loginUser = true
              this.getUserData()
            }
          })
      },
      getUserData() {
        this.$store.commit('setUserInfo')
      },
      getUserAdvancedProducts() {
        this.$store.commit('setAdvanceProduct', {})
      },
      async finalBuy() {
        let finalPurchases = this.$store.state.advanceProducts.advanceProducts
        await StoreService.finalBuy(finalPurchases)
          .then(data => {
            if (data.status == 200) {
              this.$store.commit('removeAdvanceProducts')
              this.$router.push({ name: 'ThanksPage' })
            }
        })
      }
    },
    created() {
      this.getUserAdvancedProducts()
      this.loadUserData()
    }
  }
</script>
