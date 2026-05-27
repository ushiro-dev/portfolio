<script setup lang="ts">
const techCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Nuxt server/api', 'CakePHP'],
  },
  {
    title: 'Database / Infrastructure',
    skills: ['MySQL', 'DynamoDB', 'AWS', 'Docker', 'Apache', 'Cloudflare'],
  },
  {
    title: 'CMS / Tools',
    skills: ['WordPress', 'Git', 'CodeCommit', 'Figma'],
  },
]
</script>
<template>
  <section class="bg-gray-50 py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="mb-12">
        <p class="mb-3 text-sm font-medium text-blue-700">
          Tech Stack
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          使用技術
        </h2>
        <p class="mt-4 leading-relaxed text-gray-600">
          実務で使用してきた技術を、担当領域ごとに整理しています。
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="category in techCategories"
          :key="category.title"
          class="rounded-2xl border border-gray-200 bg-white p-6"
        >
          <h3 class="mb-4 text-lg font-bold text-gray-900">
            {{ category.title }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>