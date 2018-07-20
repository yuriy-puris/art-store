<template>
  <div id="app">
    <Header/>
      <main class="wrapper">
        <router-view/>
      </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>