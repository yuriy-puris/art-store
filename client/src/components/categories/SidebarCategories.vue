<template>
  <div class="sidebar">
    <nav class="sidebar-list">
      <ul>
        <li></li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'SidebarCategories',
    created() {
      this.getCategories()
    },
    methods: {
      async getCategories() {
        await StoreService.loadCategories()
      }
    }
  }
</script>