<template>
  <div id="app">
    <Header/>
      <main class="wrapper">
        <router-view/>
      </main>
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