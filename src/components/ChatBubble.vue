<template>
    <div>
        <div :class="data.side == 'right' ? 'float-right bg-wa-msg-green' : ''"
            class="bg-white clear-both max-w-sm mx-3 mb-1 px-3 py-2 w-max rounded-lg break-words">
            <span>{{ data.text }}</span><span>{{ data.time }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    data: Object
})
</script>