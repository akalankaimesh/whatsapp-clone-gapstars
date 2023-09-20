<template>
  <div class="w-full z-10">
    <div class="flex w-full py-2 px-4 shadow">
      <div class="flex w-full justify-between bg-wa-gray grow rounded-lg p-1">
        <span class="relative">
          <!-- <span class="wa-left-arrow"></span> -->
          <span class="wa-search  pl-1 relative top-0.5"></span>
        </span>
        <input
          class="bg-transparent"
          type="text"
          name="chat-search"
          placeholder="Search or Start New chat"
          id="chat-search"
        />
      </div>
      <span class="wa-unread text-xl pl-3 relative top-0.5"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>