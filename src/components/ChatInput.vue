<template>
    <div class="bg-wa-gray w-full flex p-3 drop-shadow-md">
        <input v-model="message" @keyup.enter="send()" type="text" name=""
            class="basis-full rounded-s-lg shadow-inner outline-none focus:border-wa-green border px-3" id="chat-input">
        <button @click="send()" class="bg-wa-green text-white px-4 py-2 rounded-e-lg font-medium">Send</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useMainStore } from '../store';
import { storeToRefs } from 'pinia'
const store = useMainStore();
import { useChat } from "@/firebase.js";
const message = ref('')
const { sendMessage } = useChat();
const chatUser = ref(storeToRefs(store).activeId || "no-user")
const send = () => {
    sendMessage(message.value, chatUser.value)
    message.value = ''
}
</script>