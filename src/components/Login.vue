<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <h3 class="text-2xl font-bold text-center">Login</h3>
      <form @submit.prevent="login">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              required
              id="email"
              v-model="email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              v-model="password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex items-baseline justify-center">
            <button
              class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Log In
            </button>
            <button
              class="px-6 py-2 m-4 text-black rounded-lg hover:bg-blue-900"
              href="../components/SignUp.vue"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from "../store/user";

const user = useUserStore();
const router = useRouter()

const email = ref(null);
const password = ref(null);

const login = async () => {
	try {
		await user.signIn(email.value, password.value);
    alert('You logged in successfully')
    router.push({name: 'Home'})
	} catch(error) {
		console.log(error)
	}
};
</script>

<style></style>
