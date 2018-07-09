<template>
  <div id="app">
    <Header/>
      <router-view/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>