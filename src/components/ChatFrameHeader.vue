<template>
  <div class="flex w-full justify-between p-4 bg-wa-gray border-b shadow-xs">
    <div class="flex items-center">
      <div>
        <img class="rounded-full w-40px h-40px" :src="img" alt="chat image" />
      </div>
      <p class="font-semibold pl-4 text-sm">{{ name }}</p>
    </div>
    <button class="wa-close md:hidden" @click="closeActiveChat()"></button>
  </div>
</template>

<script setup lang="ts">

import { useMainStore } from "../store";
defineProps({
  name: {
    type: String,
    default: "User Name",
  },
  img: {
    type: String,
    default: "/images/default-profile.jpg",
  },
});
const store = useMainStore();
function closeActiveChat() {
  store.isChatActive = false;
}
</script>

<style></style>
../firebase.js../firebase.js