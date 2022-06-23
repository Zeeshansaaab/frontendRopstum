<template>
   <table id="categoryTable">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
   </table>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            categories: null
        }
    },
    methods: {
      loadData(){
        // $('#categoryTable').DataTable( {
        //     data: data
        // } );
      }
    },
    mounted() {
        console.log("Mounted")
        this.isLoading = true
        const token = localStorage.getItem('accessToken')
        this.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.$http.get('/api/category')
        .then(response => {
            this.categories = response.data.data;
            this.isLoading = false;
        })
        .catch(e => {
                this.errors = e.response.data.message
        })
        this.isLoading = false
    },
}
</script>
