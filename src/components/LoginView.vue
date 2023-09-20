<template>
    <div class="flex w-full h-full flex-col items-center justify-center">
        <button @click="signIn()"
            class="bg-wa-green hover:bg-wa-unread transition-colors drop-shadow hover:drop-shadow-lg duration-300 block relative w-max text-white py-3 px-10 rounded-full text-lg">LOGIN</button>
    </div>
</template>
<script setup lang="ts">
// firebase js all the athentication functions written in here
import { useAuth } from "@/firebase.js";

const { signIn } = useAuth();
</script>