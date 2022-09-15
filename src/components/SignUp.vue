<template>
	<div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 class="text-2xl font-bold text-center">Signup</h3>
        <form @click.prevent="signup" action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                        <input type="email" placeholder="Email" required id="email" v-model="email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                        <input type="password" placeholder="Password" required id="password" v-model="password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
				<div class="mt-4">
                    <label class="block">Confirm Password</label>
                        <input type="password" placeholder="Password" required id="confirmPassword" v-model="confirmPassword"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
				<div v-if="errorMsg" class="error-div text-red-500">{{errorMsg}}</div>
                <div class="flex items-baseline justify-center">
                    <button 
					class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button>
                    <button 
                    @click.prevent="user.toggleLogin()"
					class="px-6 py-2 m-4 text-black rounded-lg hover:bg-blue-900 hover:text-white">Login</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup>

import {ref} from "vue";
import { useUserStore } from "../store/user";

const user = useUserStore()

		const email =ref(null);
		const password = ref(null);
		const confirmPassword = ref(null);
		const errorMsg = ref('')

		const signup = async () => {
			if (password.value === confirmPassword.value) {
				try {
					await user.signUp(email.value, password.value)
					errorMsg.value = 'Successful'
				} catch(error) {
					errorMsg.value = error.message;
				}
				}
			else {
				errorMsg.value = "Passwords do not match"
			}

		}

</script>

<style>

</style>