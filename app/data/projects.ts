export const projects = [
  {
    slug: 'quiz-service',
    featured: true,
    category: 'Web Service',
    title: 'クイズ投稿・管理Webサービス',
    description:
      'Nuxt / AWS / DynamoDB を用いたクイズ投稿・閲覧・管理サービスにおいて、管理画面やユーザー情報取得機能を担当しました。',
    tags: ['Nuxt', 'TypeScript', 'AWS', 'DynamoDB', 'Cognito'],
    point: '管理画面・権限管理・API実装・共通化',
    background:
      "管理画面やユーザー管理機能の開発を担当。権限管理やAPI実装を行いました。",
    detail:
      "Cognito・DynamoDBからのユーザー取得、管理者権限管理、共通化などを担当しました。",
  },
  {
    slug: 'wordpress-performance',
    featured: true,
    category: 'Performance Improvement',
    title: 'WordPressポータルサイト改善',
    description:
      'ポータルサイトTOPへの最新情報表示機能の実装と、WordPressサイトの負荷調査・キャッシュ導入による安定化対応を行いました。',
    tags: ['WordPress', 'PHP', 'Apache', 'Cloudflare', 'MySQL'],
    point: 'フィード統合・障害調査・パフォーマンス改善',
    background:
      "コンテンツごとに取得方法が異なる中で、TOPページに最新情報を統合表示する必要がありました。また、アクセス時にサイトが不安定になる問題も発生していました。",
    detail:
      "RSS・スクレイピングなど取得方法の違いを整理しながら統合し、モーダル内情報への遷移にも対応しました。あわせてキャッシュ導入や負荷調査を行い、メモリ増強を行わず安定稼働できる状態を目指しました。",
  },
  {
    slug: 'recruit-site',
    featured: true,
    category: 'Corporate Website',
    title: 'リクルートサイト改修',
    description:
      'Laravelで構築された採用サイトにおいて、CMS化、管理画面追加、リニューアル対応、他開発者のフォロー・レビューを担当しました。',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'AWS'],
    point: 'CMS化・継続改修・チーム開発',
    background:
      "採用サイトの継続的な改修案件として、CMS化、管理画面機能追加、リニューアル対応などを担当しました。",
    detail:
      "静的ページのCMS化、勉強会詳細ページの作成、ニュース一覧のソート機能追加、ページング改善などを対応しました。リニューアル時には他開発者のフォローやレビューも行いました。",
  },
]