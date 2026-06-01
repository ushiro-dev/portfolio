<script setup lang="ts">
const values = [
  {
    title: '運用・保守を意識した実装',
    description:
      '実装して終わりではなく、後から修正しやすい構成や、運用しやすさを意識した設計・実装を心掛けています。',
  },
  {
    title: '改善・課題解決',
    description:
      '既存システムの重複処理整理や、パフォーマンス改善など、課題に対してできる範囲から改善を進めています。',
  },
  {
    title: 'キャッチアップ・調査対応',
    description:
      '未経験技術や既存コードの調査にも取り組み、必要な情報を整理しながら対応することを意識しています。',
  },
]

const techs = [
  'Laravel',
  'PHP',
  'Vue.js',
  'Nuxt.js',
  'TypeScript',
  'WordPress',
  'AWS',
  'Docker',
  'MySQL',
  'DynamoDB',
]

const experiences = [
  '管理画面開発',
  'CMS開発',
  'API実装',
  '権限制御',
  '既存システム改善',
  '障害調査',
  '性能改善',
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
        改善・保守を意識したWeb開発に取り組んできました。
      </h1>

      <p class="mt-6 max-w-3xl leading-relaxed text-gray-600">
        Laravel / Nuxt / WordPress / AWS を中心に、WebサービスやCMSの開発・改修に携わってきました。<br>
        管理画面開発、CMS開発、既存システム改善など、実務を通して幅広い開発・改修業務を経験しています。
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
            要件や既存仕様を確認しながら、必要な実装・改修を進める業務を多く担当しています。
          </p>

          <p>
            未経験技術についても、既存コードやドキュメントを確認しながらキャッチアップし、
            状況に応じて優先順位を整理しながら対応することを意識しています。
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

        <div class="space-y-8">

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              Tech
            </h3>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="item in techs"
                :key="item"
                class="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              Experience
            </h3>

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

        </div>
      </div>
    </section>
  </main>
</template>