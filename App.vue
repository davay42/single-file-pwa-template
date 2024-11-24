<script setup>
import { ref, watch } from 'vue';
import { onKeyDown, useCycleList } from '@vueuse/core';


const active = ref(false)

onKeyDown(' ', () => {
  active.value = !active.value
})


</script>

<template lang="pug">
.flex.flex-col.transition-all.duration-500.ease-out.select-none.rounded-8.shadow-xl.w-full.h-full.text-white.flex-1.items-center.justify-center
  h1.text-4xl _
  .p-4.text-3xl.m-8.rounded-2xl.border-1(@pointerdown="active=true" @pointerup="active=false") {{active}}


</template>

<style lang="postcss">
#app {
  @apply w-full flex flex-col min-h-100svh h-full;
}

a {
  @apply underline;
}

html {
  @apply min-h-100svh;
}

html,
body {
  @apply flex w-full items-stretch justify-stretch min-h-100svh;
  background-color: #444;
  color: '#eee';
  line-height: 1.3;
  font-family: "Commissioner", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;
  touch-action: pan-y;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
