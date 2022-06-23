<template>

    <div class="py-6 px-6 lg:px-8 w-2/4 sm:w-full md:w-2/4">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white capitalize">{{formType}} to ropstam</h3>
        <Error v-if="errors" :message="errors"></Error>
        {{errors}}
        <form v-if="formType == 'register'" @submit.prevent="submit()" class="space-y-6">
            <div>
                 <label for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">Name</label>
                <input type="text"
                    class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name" autocomplete="" v-model="form.name" required>
            </div>

            <div>
                 <label for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">email</label>
                <input type="email"
                    class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="email" autocomplete="" v-model="form.email" required>
            </div>
            
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create
                    account</a>
            </div>
        </form>

        <form v-if="formType == 'login'" @submit.prevent="submit()" class="space-y-6">
        
        
            <div>
                 <label for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Email</label>
                <input type="email"
                    class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="email" autocomplete="" v-model="form.email" required>
            </div>

            <div>
                 <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Password</label>
                <input type="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="password" autocomplete="" v-model="form.password" required>
            </div>
        
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create
                    account</a>
            </div>
        </form>
    </div>
</template>
<script>

import Helpers from '@/mixins/Helpers'
import Error from '@/components/InputError.vue'

export default {
    components: {
        Error
    },

    data() {
        return {
            form: null,
            errors: null,
            formType: this.type,
            isModalVisible: true,
        }
    },
    methods: {
        submit() {
            var route = this.formType == 'register' ? 'register' : 'login'
            var data = this.form
            this.$http.get('/sanctum/csrf-cookie').then(response => {
                this.$http.post('/api/' + route, data, {
                })
                    .then(response => {
                        localStorage.setItem('accessToken', response.data.data.access_token);
                        this.errors = response.data.message
                        this.$router.push({ name: 'Dashboard' })
                    })
                    .catch(e => {
                        console.log(e)
                        this.errors = e.response.data.message
                    })
            })
        },

        changeFormType(type) {
            this.formType = type
        },
       
    },
    watch:{
        $route (to, from){
            this.formType = this.$route.params.type
            this.form = { 
                email:'',
                name:'',
                password:''
            }
        }
    } ,
    mounted() {
        this.formType = this.$route.params.type
        if(this.formType== 'login'){
            this.form = { 
                email:'',
                password:''
            }
        }else{
            this.form = { 
                email:'',
                name:''
            }
        }
    },
    mixins: [Helpers]
}
</script>
