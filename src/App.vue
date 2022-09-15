<template>
  <section>
    <router-view class="app-main" />
    <Navbar />
    <Footer />
  </section>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      router.push({ path: "/auth" });
    } else {
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style>
  body {
  background-image: url('./assets/boba-jovanovic-YSPGSdTdSnY-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  
}
</style>