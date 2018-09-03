<template>
  <div class="user-page">
    <div class="container">
      <div class="registration-holder">
        <form action="#">
          <div class="form-row">
            <input
              class="form-control"
              type="text"
              placeholder="Your name"
              v-model="newName">
          </div>
          <div class="form-row">
            <input
              class="form-control"
              type="text"
              placeholder="Your email"
              v-model="newEmail">
          </div>
          <div class="form-row">
            <input
              class="form-control"
              type="text"
              placeholder="Your phone"
              v-model="newPhone">
          </div>
          <div class="form-row">
            <input
              class="form-control"
              type="text"
              placeholder="Your password"
              v-model="newPassword">
          </div>
          <input
            type="submit"
            value="Sign Up"
            @click="signUp()">
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import StoreService from '@/services/StoreService'

export default {
  name: 'NewUser',
  data() {
    return {
      newName: '',
      newEmail: '',
      newPhone: '',
      newPassword: '',
      showUserDetails: false,
    }
  },
  methods: {
    async signUp() {
      if (this.newName !== '' &&
        this.newEmail !== ''  &&
        this.newPassword !== '' &&
        this.newPhone !== '') {
          const params = {
            userName: this.newName,
            userEmail: this.newEmail,
            userPhone: this.newPhone,
            userPassword: this.newPassword
          }
          await StoreService.signUp(params)
            .then(data => {
              localStorage.setItem('userInfo', JSON.stringify(data.data))
              this.$store.commit('setUserInfo')
              router.push({path: '/user'})
            })
//          this.newName = ''
//          this.newEmail = ''
//          this.newPhone = ''
//          this.newPassword = ''
      }
    },
  }
}
</script>
