<template>
  <section class="bg-gray-900 py-20 text-white">
    <div class="mx-auto max-w-5xl px-6">
      <div class="max-w-3xl">
        <p class="mb-3 text-sm font-medium text-blue-300">
          Contact
        </p>

        <h2 class="text-3xl font-bold tracking-tight">
          GitHub・お問い合わせ
        </h2>

        <p class="mt-5 leading-relaxed text-gray-300">
          ポートフォリオのソースコードや開発過程について GitHub に公開しています。<br>
          ご連絡についても、お気軽にお問い合わせください。
        </p>
      </div>

      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="https://github.com/ushiro-dev/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
        >
          GitHubを見る
        </a>

        <NuxtLink
          to="/contact"
          class="inline-flex rounded-full border border-gray-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-gray-400 hover:bg-gray-800"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </section>
</template>