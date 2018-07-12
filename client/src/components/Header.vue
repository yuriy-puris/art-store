<template>
  <div class="header_">
    <span 
      :class="['menu-button', { 'active' : showMenu === true } ]"
      @click="showMenu = !showMenu"
    >
    </span>
    <transition name="open-menu">
      <MainMenu
        v-show="showMenu"
        v-touch:swipe="swipeMenu"
      />
    </transition>
    <UserCard/>
    <ProductCard/> 
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu'
import UserCard from '../components/UserCard'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Header',
  data() {
    return {
      showMenu: false
    }
  },
  components: {
    MainMenu,
    UserCard,
    ProductCard
  },
  methods: {
    swipeMenu(direction) {
      direction == 'left' ? this.showMenu = !this.showMenu : false
    }
  }
}
</script>

<style>
.open-menu-enter-active,
.open-menu-leave-active {
  transition: transform .5s;
}

.open-menu-enter, 
.open-menu-leave-to {
  transform: translateX(-100%);
}
</style>
