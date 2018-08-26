<template>
  <div class="user-card">
    <span
      class="user-icon"
      @click="showUserDropDown = !showUserDropDown">
      <svg width="15px" height="18px" viewBox="0 0 11 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1111.000000, -8.000000)" fill="#FFFFFF">
            <g>
              <g>
                <path d="M1122.42857,19.7767857 C1122.42857,20.4255985 1122.24256,20.9821405 1121.87054,21.4464286 C1121.49851,21.9107166 1121.0506,22.1428571 1120.52679,22.1428571 L1112.90179,22.1428571 C1112.37797,22.1428571 1111.93006,21.9107166 1111.55804,21.4464286 C1111.18601,20.9821405 1111,20.4255985 1111,19.7767857 C1111,19.2708308 1111.0253,18.793157 1111.07589,18.34375 C1111.12649,17.894343 1111.22024,17.4419666 1111.35714,16.9866071 C1111.49405,16.5312477 1111.66815,16.1413707 1111.87946,15.8169643 C1112.09077,15.4925579 1112.37053,15.2276796 1112.71875,15.0223214 C1113.06697,14.8169633 1113.46726,14.7142857 1113.91964,14.7142857 C1114.69941,15.4761943 1115.63095,15.8571429 1116.71429,15.8571429 C1117.79762,15.8571429 1118.72916,15.4761943 1119.50893,14.7142857 C1119.96131,14.7142857 1120.36161,14.8169633 1120.70982,15.0223214 C1121.05804,15.2276796 1121.3378,15.4925579 1121.54911,15.8169643 C1121.76042,16.1413707 1121.93452,16.5312477 1122.07143,16.9866071 C1122.20833,17.4419666 1122.30208,17.894343 1122.35268,18.34375 C1122.40327,18.793157 1122.42857,19.2708308 1122.42857,19.7767857 Z M1119.13393,9.4375 C1119.80655,10.10417 1120.14286,10.9107096 1120.14286,11.8571429 C1120.14286,12.8035762 1119.80804,13.6116038 1119.13839,14.28125 C1118.46875,14.9508962 1117.66072,15.2857143 1116.71429,15.2857143 C1115.76785,15.2857143 1114.95982,14.9508962 1114.29018,14.28125 C1113.62053,13.6116038 1113.28571,12.8035762 1113.28571,11.8571429 C1113.28571,10.9107096 1113.62053,10.1026819 1114.29018,9.43303571 C1114.95982,8.76338951 1115.76785,8.42857143 1116.71429,8.42857143 C1117.66072,8.42857143 1118.46726,8.76487759 1119.13393,9.4375 Z" id="account-copy"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
    <router-link
      v-if="userData !== null"
      :to="{ name: 'User' }"
      class="user-name"
    >
      {{userData.userName}}
    </router-link>
    <transition name="fade">
      <div class="user-dropdown" v-if="showUserDropDown">
        <div class="user-form" v-if="showUserForm">
          <form action="#">
            <div class="form-row">
              <input
                class="form-control"
                type="text"
                placeholder="Your name"
                v-model="loginName">
            </div>
            <div class="form-row">
              <input
                class="form-control"
                type="text"
                placeholder="Your password"
                v-model="loginPassword">
            </div>
          </form>
          <input
            type="submit"
            value="Log In"
            @click="login()"
          >
          <span
            class="sign-up"
            @click="goSignUp()"
            >
            Sign Up
          </span>
        </div>
        <div class="user-info" v-if="showUserInfo">
          <p>Hello, <strong>{{ userData.userName }}</strong></p>
          <input
            type="submit"
            value="Log Out"
            @click="logout()">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import StoreService from '@/services/StoreService'
import { mapState } from 'vuex'

export default {
  name: 'UserCard',
  data() {
    return {
      userInfo: false,
      showUserDropDown: false,
      showUserInfo: false,
      showUserForm: true,
      loginName: '',
      loginPassword: ''
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
    async login() {
      if (this.loginName !== ''  &&
          this.loginPassword !== '') {
            const params = {
              loginName: this.loginName,
              loginPassword: this.loginPassword
            }
            await StoreService.login(params)
              .then(data => {
                localStorage.setItem('userInfo', JSON.stringify(data.data))
                this.$store.commit('setUserInfo', { data })
                this.showUserDropDown = !this.showUserDropDown
                this.showUserInfo = !this.showUserInfo
                this.showUserForm = !this.showUserForm
                this.loginName = ''
                this.loginPassword = ''
              })
          }
    },
    async logout() {
      await StoreService.logout()
        .then(data => {
          if (data.status == 200) {
            this.$store.commit('removeUserInfo')
            this.$store.commit('removeAdvanceProducts')
            this.showUserInfo = !this.showUserInfo
            this.showUserForm = !this.showUserForm
          }
        })
    },
    goSignUp() {
      this.showUserDropDown = false
      this.$router.push({name: 'NewUser'})
    },
    getUserData() {
      let localValue = localStorage.getItem('userInfo')
      if (localValue !== null) {
        this.$store.commit('setUserInfo')
        this.showUserForm = !this.showUserForm
        this.showUserInfo = !this.showUserInfo
      }
    },

  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
