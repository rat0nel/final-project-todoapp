<template>
  <Login v-if="login" />
  <SignUp v-else />
</template>

<script>

    // Event listener
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
export default {
    components: {
        Login,
        SignUp
    },
    data() {
        return {
            login: true
        }
    }
    // const toggleLogin = ()=>{
    //     login.value = !login.value
    // }
}
</script>

<style>

</style>