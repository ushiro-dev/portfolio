<script setup lang="ts">
const featuredProjects = [
  {
    category: 'Web Service',
    title: 'クイズ投稿・管理Webサービス',
    description:
      'Nuxt / AWS / DynamoDB を用いたクイズ投稿・閲覧・管理サービスにおいて、管理画面やユーザー情報取得機能を担当しました。',
    tags: ['Nuxt', 'TypeScript', 'AWS', 'DynamoDB', 'Cognito'],
    point: '管理画面・権限管理・API実装・共通化',
  },
  {
    category: 'Performance Improvement',
    title: 'WordPressポータルサイト改善',
    description:
      'ポータルサイトTOPへの最新情報表示機能の実装と、WordPressサイトの負荷調査・キャッシュ導入による安定化対応を行いました。',
    tags: ['WordPress', 'PHP', 'Apache', 'Cloudflare', 'MySQL'],
    point: 'フィード統合・障害調査・パフォーマンス改善',
  },
  {
    category: 'Corporate Website',
    title: 'リクルートサイト改修',
    description:
      'Laravelで構築された採用サイトにおいて、CMS化、管理画面追加、リニューアル対応、他開発者のフォロー・レビューを担当しました。',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'AWS'],
    point: 'CMS化・継続改修・チーム開発',
  },
]
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
          実務で担当した開発・改善経験の中から、特に強みが伝わりやすいものを抜粋しています。
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

          <p class="mt-auto border-t border-gray-200 pt-4 text-sm font-medium text-gray-700">
            {{ project.point }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>