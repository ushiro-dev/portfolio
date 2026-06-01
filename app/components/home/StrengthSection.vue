<script setup lang="ts">
const strengths = [
  {
    number: '01',
    title: '保守性・運用性を意識した実装',
    description:
      'LaravelやWordPressを用いた管理画面・CMS開発において、後から修正しやすい構成や、運用担当者が扱いやすい画面設計を意識して実装してきました。',
  },
  {
    number: '02',
    title: '既存システムの改善・調査対応',
    description:
      '既存コードや仕様を確認しながら、重複処理の整理、表示調整、不具合調査、パフォーマンス改善など、運用中システムの改善に取り組んできました。',
  },
  {
    number: '03',
    title: '未経験領域へのキャッチアップ',
    description:
      '未経験の技術や既存システムでも、公式ドキュメントや既存コードを確認しながら理解を進め、必要な実装・調査対応を行ってきました。',
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
          実務経験の中で培った、改善・調査・キャッチアップ力をもとに、運用を意識した開発に取り組んできました。
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