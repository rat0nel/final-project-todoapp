<template>
  <Login v-if="user.login" />
  <SignUp v-else />
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

const user = useUserStore();
</script>

<style></style>
