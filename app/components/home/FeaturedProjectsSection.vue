<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects.filter((project) => project.featured)
</script>
<template>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="mb-12">
        <p class="mb-3 text-sm font-medium text-blue-700">
          Featured Projects
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          主な実績
        </h2>
        <p class="mt-4 leading-relaxed text-gray-600">
          実務経験の中から、強みが伝わりやすい開発・改善経験を掲載しています。
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="project in featuredProjects"
          :key="project.title"
          class="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6"
        >
          <p class="mb-3 text-sm font-medium text-blue-700">
            {{ project.category }}
          </p>

          <h3 class="mb-3 text-lg font-bold leading-snug text-gray-900">
            {{ project.title }}
          </h3>

          <p class="mb-5 text-sm leading-relaxed text-gray-600">
            {{ project.point }}
          </p>

          <div class="mb-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600"
            >
              {{ tag }}
            </span>
          </div>

          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="mt-auto inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-900"
          >
            詳細を見る
          </NuxtLink>
        </article>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink
          to="/projects"
          class="inline-flex rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
        >
          実績一覧を見る
        </NuxtLink>
      </div>
    </div>
  </section>
</template>