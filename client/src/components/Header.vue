<template>
  <div class="header_">
    <span class="menu-button"></span>
    <MainMenu/>
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
  components: {
    MainMenu,
    UserCard,
    ProductCard
  }
}
</script>
