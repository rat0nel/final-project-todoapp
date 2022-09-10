<template>
  <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div
        class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold"
      >
        <a
          class="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span class="text-2xl pl-2"
            ><i class="em em-notebook_with_decorative_cover"></i> Organize
            U</span
          >
        </a>
      </div>
      <div
        class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"
      >
        <ul
          class="list-reset flex justify-between flex-1 md:flex-none items-center"
        >
          <li class="mr-3" v-if="currentRoute() === '/'">
            <a class="inline-block py-2 px-4 text-white no-underline" href="#"
              >HOME</a
            >
          </li>
          <li class="mr-3" v-if="currentRoute() === '/auth'">
            <a
              class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="/login"
              >LOGIN</a
            >
          </li>
          <li class="mr-3" v-if="currentRoute() === '/auth'">
            <a
              class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="/auth"
              >SIGNUP</a
            >
          </li>
          <li class="mr-3" v-if="currentRoute() === '/'">
            <button
              class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              @click.prevent="logout"
            >
              LOG OUT
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script setup>
import { useUserStore } from "../store/user";
import { useRouter, useRoute } from "vue-router";

const user = useUserStore();
const router = useRouter();

const logout = async () => {
  await user.signOut();
  router.push({ name: "Auth" });
};
function currentRoute() {
  return window.location.pathname;
};
function toggleLogin(){
  user.toggleLogin();
}
</script>

<style></style>
