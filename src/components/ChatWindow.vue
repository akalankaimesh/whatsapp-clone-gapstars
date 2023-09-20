<template>
    <div class="basis-full overflow-y-auto shadow-inner py-3">
        <ChatBubble :data="item" :key="item.id" v-for="item in filterbyUser" />
        <div ref="bottom" class="mt-20" />
    </div>
</template>

<script setup lang="ts">
import { watch, ref, nextTick, computed } from "vue"
import ChatBubble from "./ChatBubble.vue"
import { useMainStore } from '@/store';
const store = useMainStore();
import { useChat, useAuth } from "@/firebase.js";
const { messages } = useChat()
const { user } = useAuth()

const filterbyUser = computed(() => {
    return messages.value.filter(ele => {
        console.log(ele.userchatWith, ele.userId);
        return ((ele.userchatWith == store.activeId && ele.userId == user.value.uid) || (ele.userchatWith == user.value.uid && ele.userId == store.activeId))
    }).map(item => {
        console.log(item.userId, user.value.uid);
        return Object.assign({ side: item.userId == user.value.uid ? 'right' : 'left' }, item)
    })
})
const bottom = ref(null)
watch(messages, () => {
    nextTick(() => {
        bottom.value?.scrollIntoView({ behavior: 'smooth' })
    })
})
//type define for chat log item
interface chatLog {
    message_id: number,
    side: string,
    text: string,
    time: string
}
</script>