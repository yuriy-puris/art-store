<template>
  <div class="sidebar">
    <nav class="sidebar-list">
      <ul>
        <li
          v-for="(item, index) in getMainCategory">
            {{item.category}}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'SidebarCategories',
  computed: mapState({
    getMainCategory() {
      return this.$store.state.categories.categories_list
    }
  }),
  methods: {
    loadMainCategory() {
      this.$store.dispatch('loadMainCategory')
    }
  },
  created() {
    this.loadMainCategory()
  }
}
</script>
