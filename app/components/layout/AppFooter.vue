<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-gray-500">
      <p>© {{ currentYear }} Kumiko Ushiro. All rights reserved.</p>
    </div>
  </footer>
</template>