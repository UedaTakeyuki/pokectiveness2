module.exports = {
  title: 'Pokéctiveness2',
  description: 'Pokémon move effectiveness chart.',
  dest: 'dist/docs',
  base: '/docs/',
//  dest: 'public/docs',
//  base: '/public/docs/',

  themeConfig: {
    sidebar: 'auto'
  },

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'english', // this will be set as the lang attribute on <html>
      title: 'Pokectiveness2',
      description: 'Pokémon move effectiveness chart.'
    },
    '/ja/': {
      lang: '日本語',
      title: 'Pokectiveness2',
      description: 'ポケモンわざ相性図鑑',
      themeConfig: {
        sidebar: 'auto',

        nav: [
          { text: '戻る', link: '/' },
        ]
      },
    }
  }
}
