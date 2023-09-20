<template>
    <div>
        <div :class="data.side == 'right' ? 'float-right bg-wa-msg-green items-end' : 'bg-white items-start'"
            class=" drop-shadow-md clear-both max-w-sm mx-3 mb-1 px-3 py-2 w-max rounded-lg break-words flex flex-col">
            <span class="message-span">{{ data.text }}</span><span class="text-xs text-wa-msg-gray">{{
                secondsFromNow(data?.createdAt?.seconds)
            }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import moment from 'moment';
function secondsFromNow(seconds) {
    return moment.unix(seconds).fromNow();
}
defineProps({
    data: Object
})
</script>