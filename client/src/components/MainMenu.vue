<template>
  <nav class="main-menu">
    <ul>
      <li v-for="(item, index) in getMenuList">
        <router-link
          :to="{
            name: `${ item.object_slug === null ? item.object : item.object_slug }`
          }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainMenu',
  computed: mapState({
      getMenuList(state) {
        return state.menu.menu_list 
      }
  }),
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      this.$store.dispatch('loadMenuList')
    }
  }
}  
</script>
