<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { ref } from "vue";
import Authority1 from "./auth/authority1.vue";
import Authority2 from "./auth/authority2.vue";
import Authority3 from "./auth/authority3.vue";

const authStore = useAuthStore();
const authority = ref(authStore.currentUser.authority);
</script>

<template>
  <div class="max-w-xl bg-white shadow-md rounded-lg mx-auto p-4 my-10">
    <div v-if="authority == '1'">
      <h3 class="text-lg font-semibold">
        {{ authority }}
        <Authority1 />
        aaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbっっっっっっっっっっｃaaaaaaaaaa
      </h3>
    </div>
    <div v-if="authority == '2'">
      <h3 class="text-lg font-semibold">
        {{ authority }}
        <Authority2 />
        aaaaaaaa
      </h3>
    </div>
    <div v-if="authority == '3'">
      <h3 class="text-lg font-semibold">
        {{ authority }}
        <Authority3 />
      </h3>
    </div>
  </div>
</template>

<style scoped></style>
