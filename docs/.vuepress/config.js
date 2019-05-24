module.exports = {
  title: 'Pokéctiveness2',
  description: 'Pokémon move effectiveness chart.',
//  dest: 'dist/docs',
  dest: 'public/docs',
  base: '/docs/',
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
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
      title: 'Users Guide',
      description: 'Pokémon move effectiveness chart.',
    },
    '/ja/': {
      lang: '日本語',
      title: 'ユーザー・ガイド',
      description: 'ポケモンわざ相性図鑑',
    }
  }
}
