<template>
  <Layout />
</template>

<script>
import jQuery from 'jquery'
import Layout from './layouts/Layout.vue'
import '../node_modules/datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css'

export default {
  name: 'App',
  components: {
    Layout
  },
}
</script>