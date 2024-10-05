<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { mapActions } from "pinia";
import authority1 from "@/pages/auth/authority1.vue";
import authority2 from "@/pages/auth/authority2.vue";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(authStore);
console.log(user.value);
const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser();
});
</script>

<template>
  <div class="max-w-xl bg-white shadow-md rounded-lg mx-auto p-4 my-10">
    <h3 class="text-lg font-semibold">
      Welcome to your Vue SPA powered by Laravel.aaaa
    </h3>
  </div>
</template>
