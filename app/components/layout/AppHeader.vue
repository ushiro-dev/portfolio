<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-lg font-bold text-gray-900" @click="scrollTop">
        Kumiko Ushiro
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm text-gray-600 md:flex">
        <NuxtLink to="/" class="hover:text-gray-900" @click="scrollTop">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-900">About</NuxtLink>
        <NuxtLink to="/projects" class="hover:text-gray-900">Projects</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-900">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>