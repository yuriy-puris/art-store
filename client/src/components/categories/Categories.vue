<template>
  <div class="categories-holder">
    <div class="container">
      <SidebarCategories/>
    </div>
  </div>
</template>
<script>
import SidebarCategories from '@/components/categories/SidebarCategories'
  export default {
    name: 'Categories',
    components: {
      SidebarCategories
    },
  }
</script>
