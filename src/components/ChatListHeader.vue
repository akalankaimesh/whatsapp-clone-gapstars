<template>
  <div class="flex w-full chat-list-header justify-between p-4 bg-wa-gray text-wa-dark-gray">

    <div v-if="userData" class="chat-list-header-profile-pic flex items-center justify-center">
      <img :src="userData.photoURL" class="rounded-full w-40px h-40px" alt="profile-image" />

      <p class="pl-3 font-medium">{{ userData.displayName }}</p>
    </div>
    <div class="chat-list-header-actions flex justify-center align-middle">
      <div>
        <button><span class="wa-group text-2xl p-2"></span></button>
        <button class="relative wa-status-no-circle text-2xl h-24px p-2">
          <span class="wa-circle absolute left-2 top-3 text-wa-green block"></span>
        </button>
        <button><span class="wa-new-chat text-2xl p-2"></span></button>
      </div>
      <div class="relative top-2">
        <button @click="openMenu($event)"><span class="wa-dot-3 text-xl pl-3 "></span></button>
        <ul v-if="isMenu"
          class="absolute right-0 top-10 z-50 bg-white hover:bg-red-500 hover:text-white transition-colors duration-300 cursor-pointer border p-3 drop-shadow-md">
          <li><button @click="signOut()">Logout</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue"
import { useAuth } from "@/firebase.js";

const { signOut, user } = useAuth();
const userData = computed(() => {
  return user?.value
})
const isMenu = ref(false);
function openMenu(e) {
  e.stopPropagation();
  isMenu.value = true;
}
onMounted(() => {
  document.addEventListener("click", () => {
    isMenu.value = false
  })
})
onUnmounted(() => {
  document.removeEventListener("click", () => {
    isMenu.value = false
  })
})
</script>

<style></style>