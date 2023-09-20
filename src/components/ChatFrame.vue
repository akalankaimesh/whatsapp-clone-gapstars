<template>
  <div v-if="currentChat" style="background-image: url('/images/bg-design.png');"
    class="flex flex-col h-full bg-wa-msg-cream">
    <Header v-if="currentChat" :name="currentChat[0]?.userName" :img="currentChat[0]?.userPhotoURL" />
    <Window />
    <ChatInput />
  </div>
</template>

<script setup lang="ts">
import Header from "./ChatFrameHeader.vue";
import Window from "./ChatWindow.vue";
import ChatInput from "./ChatInput.vue";
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store';
const store = useMainStore();
//refaracne active state from store
const currentChat = storeToRefs(store).getCurrentChat
</script>

<style></style>