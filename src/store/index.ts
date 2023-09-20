import { defineStore } from 'pinia'
import { useFetch } from '../fetch'
export const useMainStore = defineStore('main', {
    state: () => ({
        chats: {},
        isChatActive: false as boolean,
        activeId: null as null | number | string,
        chatsdata: []
    }),
    getters: {
        chatListProfile: (state) => state.chats?.data?.profile,
        getCurrentChat: (state) => state?.chatsdata
    },
    actions: {
        getChatList() {
            this.chats = useFetch('/db.json');
        },
    },
})