export const projects = [
  {
    slug: 'quiz-service',
    featured: true,
    category: 'Web Service',
    title: 'クイズ投稿・管理Webサービス',
    point: '管理画面開発・権限管理・API実装',
    tags: ['Nuxt.js', 'TypeScript', 'AWS', 'DynamoDB', 'Cognito'],
    description:
      'Nuxt.js / TypeScript / AWS / DynamoDB を用いたクイズ投稿・閲覧・管理サービスにおいて、管理画面開発および各種管理機能の実装を担当しました。',
    background:
      "管理画面やユーザー管理機能の開発を担当し、権限制御やAPI実装を含めた管理機能の整備を行いました。",
    responsibilities: [
      'Nuxt.js を利用した管理画面およびユーザー管理機能の実装',
      'Nuxt（server/api）を用いたAPI実装および Cognito・DynamoDB 連携',
      '権限による画面制御および管理者向け機能の実装',
      'ユーザー一覧・詳細画面、フィルター機能など管理機能の実装',
    ],
    efforts: [
      '管理者判定やお気に入り判定などの共通処理を整理し、再利用しやすい構成へ改善',
      '権限制御を整理し、運用時の扱いやすさを意識した実装を実施',
      '画面実装だけでなく、API・認証・DB連携まで含めて一貫して対応',
    ],
    results: [
      'Nuxt.js・TypeScript・DynamoDB など未経験技術をキャッチアップしながら開発を推進',
      'API・認証・DB連携を含めた一貫した実装経験を積んだ',
      '共通化や責務分離を通して、保守性を意識した実装を経験',
    ],
  },
  {
    slug: 'recruit-site',
    featured: true,
    category: 'Corporate Website',
    title: 'リクルートサイト改修',
    point: 'CMS開発・既存改修・運用改善',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'AWS'],
    description:
      'Laravelで構築された採用サイトにおいて、CMS化、管理画面追加、リニューアル対応、不具合調査・修正を担当しました。',
    background:
      "採用サイトの継続的な改修案件として、CMS化、管理画面機能追加、リニューアル対応などを担当しました。",
    responsibilities: [
      '採用サイトの管理画面機能追加・改修を担当',
      '会社概要ページCMS化、勉強会ページ作成などの画面実装',
      'リニューアル対応、不具合調査・修正、運用改善を担当',
      '他開発メンバーのレビューやフォロー対応',
    ],
    efforts: [
      '静的ページをCMS化し、管理画面から更新できる運用しやすい構成へ改善',
      '既存ファイル構成を見直し、保守性を意識した実装を行った',
      'デザイン再現だけでなく、CMS運用を考慮した設計・実装を意識した',
    ],
    results: [
      '要件が固まり切っていない中で、優先順位を整理しながら開発を進行',
      '静的デザインをCMSや動的コンテンツとして成立させる実装に苦労した',
      '要件変更が発生しやすいため、認識齟齬を防ぐための確認・共有を意識した',
    ],
  },
  {
    slug: 'wordpress-performance',
    featured: true,
    category: 'Performance Improvement',
    title: 'WordPressポータルサイト改善',
    listTitle: 'ポータルサイト改善',
    point: '機能開発・負荷調査・性能改善',
    tags: ['WordPress', 'PHP', 'MySQL'],
    description:
      'ポータルサイトへの最新情報表示機能の実装、情報取得処理の改修、負荷調査・キャッシュ導入による安定化対応を担当しました。',
    background:
      "コンテンツごとに取得方法が異なる中で、TOPページに最新情報を統合表示する必要がありました。また、アクセス時にサイトが不安定になる問題も発生していました。",
    responsibilities: [
      'WordPressポータルサイトTOPページへの最新情報表示機能を実装',
      'RSS・スクレイピングを利用した情報取得処理の実装・改修',
      'WordPress独自プラグイン改修およびモーダル連携対応',
      'サイトパフォーマンス調査およびサーバ負荷改善を担当',
    ],
    efforts: [
      '取得方法が異なる複数コンテンツを整理し、共通化を意識した実装を行った',
      'モーダル内に存在する情報へ直接遷移できる仕組みを実装し、UX向上を図った',
      'アプリケーションだけでなく、サーバ構成も含めた改善を意識して対応した',
    ],
    results: [
      'RSS、スクレイピング、モーダル表示など異なる取得方式を統一的に扱う実装に苦労した',
      '高メモリ使用率・swap逼迫による不安定化の原因調査と改善対応を段階的に実施した',
      '限られたサーバリソースの中で、スペック増強ではなく改善による解決を求められた',
    ],
  },
  {
    slug: 'wordpress-site-update',
    featured: false,
    category: 'Website Maintenance',
    title: 'WordPressサイト改修',
    listTitle: '企業サイト改修',
    point: '既存改修・運用改善・調査対応',
    tags: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    description:
      '企業サイトの運用・改修案件において、コンテンツ更新、表示調整、軽微な機能修正、既存コード調査を担当しました。',  
    background:
      '企業サイト運用の中で、数値更新や軽微な改修、表示調整などの対応が継続的に発生していました。',
    responsibilities: [
      'コンテンツ更新',
      '表示調整',
      '軽微改修',
      '既存コード調査'
    ],
    efforts: [
      '既存構成を確認しながら、影響範囲を考慮して改修',
      '改善できそうな箇所については可能な範囲で提案・対応'
    ],
    results: [
      '既存実装の調査や影響範囲確認を行いながら改修を進行'
    ],
  }
]