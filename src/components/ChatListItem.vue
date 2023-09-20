<template>
  <div class="flex cursor-pointer hover:bg-wa-gray transition-colors ease-in-out duration-300" @click="setChatActive()">
    <div class="pl-3 py-3">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img :src="lastItem.userPhotoURL" class="object-cover object-center h-full w-full" alt="chat-profile" />
      </div>
    </div>
    <div class="border-b basis-full flex flex-col px-4 justify-center align-middle ml-1">
      <div class="flex justify-between">
        <span class="text-lg">{{ lastItem.userName }}</span>
        <span>{{ lastItem.createdAt.seconds }}</span>
      </div>
      <div class="flex justify-between">
        <p class="text-wa-msg-gray text-sm text-ellipsis overflow-hidden line-clamp-1">
          {{ lastItem.text }}
        </p>
        <span v-if="data.length > 0" class="bg-wa-unread text-xs text-white px-2 py-1 rounded-xl">{{ data.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { computed } from "vue"
const store = useMainStore();
const props = defineProps({
  data: {
    type: Object,
  },
  uid: { type: String }
});

const lastItem = computed(() => props.data[0])
function setChatActive() {
  store.isChatActive = true;
  store.activeId = props.uid;
}
</script>

<style></style>