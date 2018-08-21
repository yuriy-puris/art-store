<template>
  <div class="user-holder">
    <div class="container">
      <div class="user-details" v-if="showUserDetails">
        <table>
          <tbody>
          <tr>
            <td>Your name</td>
            <td><strong>{{userData.userName}}</strong></td>
          </tr>
          <tr>
            <td>Your email</td>
            <td><strong>{{userData.userEmail}}</strong></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'User',
    data() {
      return {
        showUserDetails: false
      }
    },
    computed: {
      userData() {
        return this.$store.state.userData.userData
      }
    },
    mounted() {
      this.getUserData()
    },
    methods: {
      getUserData() {
        let localValue = localStorage.getItem('userInfo')
        if (localValue !== null) {
          this.$store.commit('setUserInfo')
          this.showUserDetails = !this.showUserDetails
          this.showRegForm = !this.showRegForm
        }
      }
    }
  }
</script>
