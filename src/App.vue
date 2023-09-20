<template>
  <!-- <router-view></router-view> -->
  <div
    class="w-screen h-screen main-wrap after:bg-wa-green after:fixed after:w-full after:h-127 xl:p-5 after:left-0 after:top-0">

    <div class="main-frame drop-shadow-2xl bg-wa-gray flex h-full w-full z-10 relative">

      <Preloader v-if="isPreloader" />
      <template v-if="isLogin">
        <div :class="{ '!-left-full md:!left-0': isActive }"
          class="chat-list-frame transition-all duration-700 ease-in-out left-0 flex-initial 2xl:w-3/10 lg:w-4/10 md:w-5/10 w-full md:relative absolute md:h-full h-screen sm:w-full z-10 border-r bg-white">
          <ChatList :user="user" :data="groupedData" />
        </div>
        <div class="chat-frame-wrap 2xl:w-7/10 lg:w-6/10 md:w-5/10 w-full relative">
          <ChatFrame />
        </div>
      </template>
      <LoginView v-if="!isPreloader && !isLogin" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { groupBy } from "lodash"
import { ref, onMounted, computed, watch } from "vue"
import ChatFrame from "./components/ChatFrame.vue";
import ChatList from "./components/ChatList.vue";
import LoginView from "./components/LoginView.vue";
import Preloader from "./components/Preloader.vue";
import { storeToRefs } from 'pinia'
import { useMainStore } from './store';
import { useAuth, useChat } from "@/firebase.js";
const { messages } = useChat();
const { signIn, user, isLogin } = useAuth();
const store = useMainStore();
const isPreloader = ref(true)
watch(messages, (data) => {
  store.chatsdata = data;
})
//refaracne active state from store
const groupedData = computed(() => groupBy(messages.value, 'userId'))
const isActive = storeToRefs(store).isChatActive
onMounted(() => {
  setTimeout(() => {

    isPreloader.value = false
  }, 1000)
})
//fetch data from api 
//store.getChatList();
//store.getMessages();
</script>
<style scoped></style>
