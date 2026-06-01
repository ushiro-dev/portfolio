<template>
  <section class="bg-gray-50 py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="rounded-2xl bg-white p-8 shadow-sm md:p-10">
        <p class="mb-3 text-sm font-medium text-blue-700">
          About
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          実務経験をもとに、<br>
          改善・保守を意識したWeb開発に取り組んでいます。
        </h2>

        <p class="mt-5 leading-relaxed text-gray-600">
          Laravel / Nuxt / WordPress / AWS を中心に、管理画面開発、CMS開発、既存システム改善に携わってきました。<br>
          既存コードの調査やキャッチアップを行いながら、運用しやすいシステムづくりを意識しています。
        </p>

        <div class="mt-8">
          <NuxtLink
            to="/about"
            class="inline-flex rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Aboutを見る
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>