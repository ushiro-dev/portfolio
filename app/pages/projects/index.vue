<script setup lang="ts">
import { projects } from '~/data/projects'
</script>
<template>
  <main class="bg-gray-50">
    <section class="mx-auto max-w-5xl px-6 py-20">
      <p class="mb-3 text-sm font-medium text-blue-700">
        Projects
      </p>

      <h1 class="text-4xl font-bold tracking-tight text-gray-900">
        実績
      </h1>

      <p class="mt-6 max-w-3xl leading-relaxed text-gray-600">
        実務で担当した開発・改修・改善経験の中から、特に強みが伝わりやすいものを整理しています。
        管理画面開発、CMS化、Webサイト改善、パフォーマンス改善など、運用を意識した取り組みを中心に掲載しています。
      </p>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto max-w-5xl px-6">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="project in projects"
            :key="project.slug"
            class="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6"
          >
            <p class="mb-3 text-sm font-medium text-blue-700">
              {{ project.category }}
            </p>

            <h2 class="mb-3 text-xl font-bold leading-snug text-gray-900">
              {{ project.title }}
            </h2>

            <p class="mb-5 text-sm leading-relaxed text-gray-600">
              {{ project.description }}
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

            <p class="mb-6 border-t border-gray-200 pt-4 text-sm font-medium text-gray-700">
              {{ project.point }}
            </p>

            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="mt-auto inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              詳細を見る
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>