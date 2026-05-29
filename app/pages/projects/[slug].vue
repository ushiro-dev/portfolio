<script setup lang="ts">

const route = useRoute()

const projects = {
  "quiz-service": {
    category: "Web Service",
    title: "クイズ投稿・管理Webサービス",
    description:
      "Nuxt / AWS / DynamoDB を用いたクイズ投稿・管理サービス",
    tags: ["Nuxt", "TypeScript", "AWS", "DynamoDB", "Cognito"],
    background:
      "管理画面やユーザー管理機能の開発を担当。権限管理やAPI実装を行いました。",
    detail:
      "Cognito・DynamoDBからのユーザー取得、管理者権限管理、共通化などを担当しました。",
  },
  "wordpress-performance": {
    category: "Performance Improvement",
    title: "WordPressポータルサイト改善",
    description:
      "ポータルサイトTOPへの最新情報表示機能の実装と、WordPressサイトの負荷調査・キャッシュ導入による安定化対応",
    tags: ["WordPress", "PHP", "Apache", "Cloudflare", "MySQL"],
    background:
      "コンテンツごとに取得方法が異なる中で、TOPページに最新情報を統合表示する必要がありました。また、アクセス時にサイトが不安定になる問題も発生していました。",
    detail:
      "RSS・スクレイピングなど取得方法の違いを整理しながら統合し、モーダル内情報への遷移にも対応しました。あわせてキャッシュ導入や負荷調査を行い、メモリ増強を行わず安定稼働できる状態を目指しました。",
  },
  "recruit-site": {
    category: "Corporate Website",
    title: "リクルートサイト改修",
    description:
      "Laravelで構築された採用サイトのCMS化・管理画面追加・リニューアル対応",
    tags: ["Laravel", "PHP", "MySQL", "Docker", "AWS"],
    background:
      "採用サイトの継続的な改修案件として、CMS化、管理画面機能追加、リニューアル対応などを担当しました。",
    detail:
      "静的ページのCMS化、勉強会詳細ページの作成、ニュース一覧のソート機能追加、ページング改善などを対応しました。リニューアル時には他開発者のフォローやレビューも行いました。",
  },
}

const project =
  projects[
    route.params.slug as keyof typeof projects
  ]

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
        ← Projectsへ戻る
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