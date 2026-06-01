<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()

const project = projects.find(
  (project) => project.slug === route.params.slug
)

if (!project) {
  throw createError({
    statusCode: 404,
    message: 'Project Not Found',
  })
}

const sections = [
  {
    label: 'Responsibilities',
    title: '担当内容',
    items: project.responsibilities,
  },
  {
    label: 'Efforts',
    title: '工夫した点',
    items: project.efforts,
  },
  {
    label: 'Results',
    title: '成果',
    items: project.results,
  },
]
</script>
<template>
  <main class="bg-gray-50">
    <section class="mx-auto max-w-5xl px-6 py-20">
      <NuxtLink
        to="/projects"
        class="mb-8 inline-flex text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        ← 一覧へ戻る
      </NuxtLink>

      <p class="mb-3 text-sm font-medium text-blue-700">
        {{ project.category }}
      </p>

      <h1 class="text-4xl font-bold tracking-tight text-gray-900">
        {{ project.title }}
      </h1>

      <p class="mt-6 leading-relaxed text-gray-600">
        {{ project.description }}
      </p>

      <div class="mt-10 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
        >
          {{ tag }}
        </span>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">

        <div>
          <h2 class="text-2xl font-bold">
            背景・課題
          </h2>
        </div>

        <div>
          <p class="leading-relaxed text-gray-600">
            {{ project.background }}
          </p>
        </div>

      </div>
    </section>

    <section
      v-for="section in sections"
      :key="section.title"
      class="bg-gray-50 py-20"
    >
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p class="mb-3 text-sm font-medium text-blue-700">
            {{ section.label }}
          </p>
          <h2 class="text-2xl font-bold text-gray-900">
            {{ section.title }}
          </h2>
        </div>

        <ul class="space-y-3 text-gray-600">
          <li
            v-for="item in section.items"
            :key="item"
            class="rounded-xl border border-gray-200 bg-white p-4"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

  </main>
</template>