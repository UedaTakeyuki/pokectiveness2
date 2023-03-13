module.exports = {
  title: 'Pokéctiveness2',
  description: 'Pokémon move effectiveness chart.',

  // https://github.com/vuejs/vuepress/issues/2713#issuecomment-806621348
  head: [
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-YK7D4V8XHW',
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-YK7D4V8XHW');",
        ],
    ],
  ],
  
//  dest: 'dist/docs',
  dest: 'public/docs',
  base: '/docs/',
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': 'ca-pub-1717720203982550', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ]
  
  ],

  themeConfig: {
    sidebar: 'auto',
    locales: {
      '/': {
        nav: [
          { text: 'back to App', link: 'https://pokectiveness2.netlify.com/'},
        ]
      },
      '/ja/': {
        nav: [
          { text: 'アプリに戻る', link: 'https://pokectiveness2.netlify.com/'},
        ]
      }  
    }
  },

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'english', // this will be set as the lang attribute on <html>
//      title: 'Users Guide',
      description: 'Pokémon move effectiveness chart.',
    },
    '/ja/': {
      lang: '日本語',
//      title: 'ユーザー・ガイド',
      description: 'ポケモンわざ相性図鑑',
    }
  }
}
