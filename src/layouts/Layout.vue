<template>
  <div class="page-wrapper">
        <Header />
        <main class="main">
            <router-view />
        </main>
        <Footer />
  
  </div>
  <!-- End of Page-wrapper-->
  
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Header,
        Footer,
  },
  data () {
      return {
          show: false
      }
  },
  methods: {

  }
}
</script>