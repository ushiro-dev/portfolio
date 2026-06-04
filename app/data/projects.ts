export const projects = [
  {
    slug: 'quiz-service',
    featured: true,
    category: 'Web Service',
    title: 'クイズ投稿・管理Webサービス',
    point: '管理画面開発・権限管理・API実装',
    tags: ['Nuxt.js', 'TypeScript', 'AWS', 'DynamoDB', 'Cognito'],
    listDescription:
      '管理画面開発、権限制御、API実装を中心に、クイズサービスの管理機能整備を担当しました。',
    description:
      'Nuxt.js / TypeScript / AWS / DynamoDB を用いたクイズ投稿・閲覧・管理サービスにおいて、管理画面開発および各種管理機能の実装を担当しました。',
    screenshots: [
      {
        src: '/images/projects/quiz-user-detail.png',
        alt: 'ユーザー管理画面',
        title: 'ユーザー管理画面',
        description: 'Cognito・DynamoDBと連携したユーザー詳細管理画面',
      },
      {
        src: '/images/projects/quiz-create.png',
        alt: 'クイズ作成画面',
        title: 'クイズ作成画面',
        description: 'JSONインポート、動的フォーム',
      },
    ],
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
      '管理画面開発からAPI実装、認証・DB連携まで一貫して担当',
      '管理者権限に応じた画面制御・機能出し分けを実装',
      '共通処理の整理により、保守性を意識した実装を実施',
    ],
  },
  {
    slug: 'recruit-site',
    featured: true,
    category: 'Corporate Website',
    title: 'リクルートサイト改修',
    point: 'CMS開発・継続改修・チーム開発',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'AWS'],
    listDescription:
      '採用サイトのCMS開発、管理画面追加、既存改修、リニューアル対応を担当しました。',
    description:
      'Laravelで構築された採用サイトにおいて、CMS開発、管理画面追加、継続改修、リニューアル対応を担当しました。',
    screenshots: [
      {
        src: '/images/projects/recruit-news-list.png',
        alt: 'ニュース一覧画面',
        title: 'ニュース管理画面',
        description: '一覧管理、ソート、公開設定、CMS運用機能',
      },
      {
        src: '/images/projects/recruit-seminar-create.png',
        alt: '勉強会作成画面',
        title: '勉強会新規作成',
        description: '入力フォーム、画像アップロード、コンテンツ管理',
      },
    ],    
    background:
      "採用サイトの継続改修案件として、CMS化や管理画面追加、リニューアル対応など、運用を考慮した機能追加・改善対応を行いました。",
    responsibilities: [
      '採用サイトの管理画面機能追加および既存機能改修',
      'リニューアル対応、不具合調査・修正、運用改善対応',
      '他開発メンバーのレビューおよびフォロー対応',
    ],
    efforts: [
      '静的ページをCMS化し、管理画面から更新できる運用しやすい構成へ改善',
      '既存構成を確認しながら、保守性を意識した実装を実施',
      'デザイン再現だけでなく、CMS運用を考慮した設計・実装を意識して対応',
    ],
    results: [
      '静的ページのCMS化により、管理画面から更新できる構成を実装',
      '既存機能改修やリニューアル対応を通して、継続運用を支える改善を実施',
      'レビュー・フォロー対応を行い、チーム内の開発進行を支援',
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
    listDescription:
      '最新情報表示機能の実装に加え、情報取得処理の改修、負荷調査・性能改善を担当しました。',
    description:
      'ポータルサイトへの最新情報表示機能の実装、情報取得処理の改修、負荷調査・性能改善を担当しました。',
    background:
      "コンテンツごとに取得方法が異なる中で、TOPページへ最新情報を統合表示する必要がありました。また、アクセス増加時にサイトが不安定になる課題があり、改善対応が求められていました。",
    responsibilities: [
      'ポータルサイトTOPページへの最新情報表示機能の実装',
      'RSS・スクレイピングを利用した情報取得処理の実装・改修',
      'WordPress独自プラグイン改修およびモーダル連携対応',
      'サイトパフォーマンス調査および負荷改善対応',
    ],
    efforts: [
      '取得方法が異なる複数コンテンツを整理し、共通化を意識した実装を実施',
      'モーダル内の情報へ直接遷移できる仕組みを実装し、UX向上を意識して対応',
      'アプリケーションだけでなく、サーバ構成も含めた改善を意識して対応',
    ],
    results: [
      '最新情報表示機能の実装から情報取得処理の改修まで担当',
      '負荷調査を行い、アプリケーション・サーバ両面から改善を実施',
      '段階的な改善により、安定運用を意識したパフォーマンス改善を実施',
    ],
  },
  {
    slug: 'wordpress-site-update',
    featured: false,
    category: 'Website Maintenance',
    title: 'WordPressサイト改修',
    listTitle: '企業サイト改修',
    point: '既存改修・コード調査・運用対応',
    tags: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    listDescription:
      '企業サイトの継続改修として、表示調整、既存機能改修、コード調査、運用対応を担当しました。',
    description:
      '企業サイトの運用・改修案件において、既存機能改修、表示調整、コンテンツ更新、既存コード調査を担当しました。',  
    screenshots: [
      {
        src: '/images/projects/wordpress-site-admin.png',
        alt: '職種比率管理画面',
        title: '職種比率管理画面',
        description: 'データの更新対応および運用改善を目的とした更新フロー整備',
      },
      {
        src: '/images/projects/wordpress-site-chart.png',
        alt: '職種比率・スキル分布表示',
        title: '職種比率・スキル分布表示',
        description: '表示改修および更新対応',
      },
    ],
    background:
      '運用中の企業サイトにおいて、コンテンツ更新や既存機能改修など、継続的な改善対応を行いました。',
    responsibilities: [
      'コンテンツ更新および表示調整対応',
      '既存機能改修および軽微な機能追加',
      '既存コード調査および影響範囲確認',
      'WordPress管理画面を利用した運用対応',
    ],
    efforts: [
      '既存コードを確認しながら、影響範囲を意識した改修を実施',
      '運用担当者が扱いやすいことを意識して対応',
      '既存実装を踏襲しながら、保守性を意識して改修を実施',
    ],
    results: [
      '既存コードを調査し、影響範囲を確認しながら改修を実施',
      '表示調整・コンテンツ更新・軽微な機能追加など、運用中サイトの改修を担当',
      '既存実装を踏襲しながら、保守性を意識した改善を実施',
    ],
  }
]