<template>
  <nav class="main-menu">
    <ul>
      <li
        v-for="(item, index) in menu_list"
      >
        <router-link></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'MainMenu',
    computed: {
      ...mapState([
        'menu_list'
      ])
    },
    created() {
      return this.$store.dispatch('loadMenuList')
    }
  }  
</script>
