
export default {
    methods: {

        // get selected track
        getUserData() {
            if (localStorage.vuex) {
                let authUser = JSON.parse(localStorage.vuex)
                return authUser.user
            }
        },
        
        // media
        getImage(path) {
            if (path == null){
                return process.env.VUE_APP_BASE_URL + 'media/images/placeholder.png'
            } else if (path.includes('http')) {
                return path;
            } else {
                return process.env.VUE_APP_BASE_URL + path;
            }
        },

        setTypeFormat(text){
            return text.replaceAll('_', ' ');
        },

        inValidToken() {
            localStorage.removeItem('accessToken')
        }
    }
}