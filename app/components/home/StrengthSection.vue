<script setup lang="ts">
const strengths = [
  {
    number: '01',
    title: '改善・課題解決を意識した実装',
    description:
      'LaravelやWordPressを用いた管理画面・CMS開発の経験があります。更新性や保守性を意識しながら、共通化・構成見直し・パフォーマンス改善など、運用しやすいシステムを意識して実装してきました。',
  },
  {
    number: '02',
    title: '幅広い技術領域への対応力',
    description:
      'Vue / Nuxt を用いたフロントエンド開発に加え、Nuxt server/api を利用したAPI実装や、AWS・Docker・WordPress運用改善まで幅広く対応してきました。',
  },
  {
    number: '03',
    title: 'キャッチアップ・調査対応力',
    description:
      '要件が固まりきっていない状況での調整や、既存コードの解析、障害調査などを通して、状況に応じた対応を行ってきました。未経験領域についてもキャッチアップしながら柔軟に対応しています。',
  },
]
</script>
<template>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="mb-12">
        <p class="mb-3 text-sm font-medium text-blue-700">
          Strengths
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          強み
        </h2>
        <p class="mt-4 leading-relaxed text-gray-600">
          実務での開発・改修経験を通して、運用・保守を意識した実装や既存システムの改善に取り組んできました。
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="strength in strengths"
          :key="strength.title"
          class="rounded-2xl border border-gray-200 bg-gray-50 p-6"
        >
          <p class="mb-4 text-sm font-semibold text-blue-700">
            {{ strength.number }}
          </p>

          <h3 class="mb-3 text-lg font-bold text-gray-900">
            {{ strength.title }}
          </h3>

          <p class="text-sm leading-relaxed text-gray-600">
            {{ strength.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>