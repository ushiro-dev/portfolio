<script setup lang="ts">
const values = [
  {
    title: '運用・保守を意識した実装',
    description:
      '実装して終わりではなく、後から修正しやすい構成や、運用担当者が扱いやすい画面・CMS設計を意識しています。',
  },
  {
    title: '改善・課題解決',
    description:
      '既存システムの重複処理の共通化、ファイル構成の見直し、パフォーマンス改善など、課題に対してできる範囲から改善を進めています。',
  },
  {
    title: 'キャッチアップ・調査対応',
    description:
      '未経験技術や既存コードの調査、障害調査などにも取り組み、状況に応じて必要な情報を整理しながら対応しています。',
  },
]

const experiences = [
  'Laravel',
  'PHP',
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'WordPress',
  'AWS',
  'Docker',
  'MySQL',
  'DynamoDB',
  '管理画面開発',
  'CMS化',
  'API実装',
  'パフォーマンス改善',
  '障害調査',
]
</script>
<template>
  <main class="bg-gray-50">
    <section class="mx-auto max-w-5xl px-6 py-20">
      <p class="mb-3 text-sm font-medium text-blue-700">
        About
      </p>

      <h1 class="text-4xl font-bold tracking-tight text-gray-900">
        実務経験をもとに、<br>
        改善・保守を意識したWeb開発に取り組んでいます。
      </h1>

      <p class="mt-6 max-w-3xl leading-relaxed text-gray-600">
        Laravel / Nuxt / WordPress / AWS を中心に、WebサービスやCMSの開発・改修に携わってきました。<br>
        管理画面開発、CMS化、既存システムの改善、Webサイトの運用改善など、実務で必要とされる幅広い領域に対応しています。
      </p>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p class="mb-3 text-sm font-medium text-blue-700">
            Profile
          </p>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            自己紹介
          </h2>
        </div>

        <div class="space-y-5 leading-relaxed text-gray-600">
          <p>
            Webエンジニアとして、業務システムやWebサービス、WordPressサイトの開発・改修を経験してきました。
            実装だけでなく、既存コードの調査、運用しやすい構成への改善、管理画面やCMS機能の整備などにも取り組んでいます。
          </p>

          <p>
            未経験の技術領域についても、既存コードやドキュメントを確認しながらキャッチアップし、必要な実装や調査対応を進めてきました。
            要件が固まりきっていない状況でも、優先順位や実装範囲を確認しながら対応することを意識しています。
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p class="mb-3 text-sm font-medium text-blue-700">
            Values
          </p>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            大切にしていること
          </h2>
        </div>

        <div class="grid gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 class="text-lg font-bold text-gray-900">
              {{ value.title }}
            </h3>
            <p class="mt-3 leading-relaxed text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p class="mb-3 text-sm font-medium text-blue-700">
            Experience
          </p>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            経験領域
          </h2>
        </div>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in experiences"
            :key="item"
            class="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>
  </main>
</template>