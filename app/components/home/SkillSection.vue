<script setup lang="ts">
const techCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Nuxt (server/api)'],
  },
  {
    title: 'Infrastructure / Database',
    skills: ['AWS', 'Docker', 'MySQL', 'DynamoDB'],
  },
  {
    title: 'Experience',
    skills: ['管理画面開発', 'CMS開発', 'API実装', '権限制御', '性能改善', '障害調査'],
  },
]
</script>
<template>
  <section class="bg-gray-50 py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="mb-12">
        <p class="mb-3 text-sm font-medium text-blue-700">
          Skills
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          使用技術
        </h2>
        <p class="mt-4 leading-relaxed text-gray-600">
          実務で使用してきた技術や経験領域をまとめています。
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