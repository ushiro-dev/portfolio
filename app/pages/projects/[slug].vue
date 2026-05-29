<script setup lang="ts">

const route = useRoute()

import { projects } from '~/data/projects'

const project =
  projects.find((project) => project.slug === route.params.slug)

if (!project) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Project Not Found',
  })
}
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

      <p class="mt-6 max-w-3xl leading-relaxed text-gray-600">
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

    <section class="bg-gray-50 py-20">
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">

        <div>
          <h2 class="text-2xl font-bold">
            担当・工夫したこと
          </h2>
        </div>

        <div>
          <p class="leading-relaxed text-gray-600">
            {{ project.detail }}
          </p>
        </div>

      </div>
    </section>

  </main>
</template>