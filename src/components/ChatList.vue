<template>
  <div class="flex flex-col h-full relative overflow-hidden">
    <Header />
    <SearchBar />
    <div class="relative overflow-y-auto">
      <div class="h-full relative">
        <template v-for="(item, key) in props.data" :key="key">
          <ChatItem v-if="key != user.uid" :data="item.reverse()" :uid="key" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Header from "./ChatListHeader.vue";
import SearchBar from "./ChatFrameSearchBar.vue";
import ChatItem from "./ChatListItem.vue";

import { useMainStore } from '../store';


const props = defineProps({
  data: {
    type: Object
  },
  user: {
    type: Object
  }
})
const store = useMainStore();


</script>

<style></style>