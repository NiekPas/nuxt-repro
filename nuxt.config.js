/* eslint-disable */

const conf = {
  env: {
    gtmDebug: process.env.GTM_DEBUG || false,
  },
  head: {
    title: 'test',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    ],
    script: [{
      src: 'https://cdn.polyfill.io/v2/polyfill.js?features=default,Object.entries,Array.prototype.includes,Array.prototype.find,IntersectionObserver'
    },],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },],
  },
  css: [{
    src: '~assets/stylesheets/application.scss',
    lang: 'scss'
  }],
  store: true,
  loading: '~/components/loading.vue',
  router: {
    middleware: ['i18n', 'gtm'],
  },
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');

      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        }

      });

      // // TODO this is probably not enough as we don't have many *.scss files -- we use single file components.
      // config.module.rules.push({
      //   test: /\.scss$/,
      //   use: ['vue-style-loader', 'css-loader', 'sass-loader', 'sass-resources-loader'],
      // });

      // config.module.rules.push({
      //   test: /icons.js$/,
      //   use: ['vue-style-loader'],
      // });

      config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader'],
      });

      if (!isClient) {
        config.externals = config.externals || [];
        config.externals.splice(0, 0, (context, request, callback) => {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: [],
  plugins: [
    '~assets/icons.js',
  ],
  watchers: {
    webpack: {
      poll: true,
    },
  },
};

if (process.env.PROXY_PASS) {
  conf.modules.push('@nuxtjs/proxy');
  conf.proxy = [process.env.PROXY_PASS];
}

export default conf;
