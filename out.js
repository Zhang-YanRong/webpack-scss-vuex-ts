{
  mode: 'development',
  context: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/dist',
    filename: 'static/js/[name].js',
    publicPath: '',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules',
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp') */
      {}
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules',
      '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp-loaders') */
      {}
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/.cache/vue-loader',
              cacheIdentifier: 'b6919aca'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/.cache/vue-loader',
              cacheIdentifier: 'b6919aca'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/.cache/babel-loader',
              cacheIdentifier: '771c895a'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/@vue/cli-service/lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx'
              ],
              cache: true,
              cacheIdentifier: '339a0a54',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/.cache/ts-loader',
              cacheIdentifier: '4c68f9dc'
            }
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/.cache/ts-loader',
              cacheIdentifier: '4c68f9dc'
            }
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          sourceMap: false,
          cache: true,
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          VUE_APP_ENV: '"dev"',
          NODE_ENV: '"development"',
          BASE_URL: '""'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'scss-webpack-element',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/public',
          to: '/Users/Dev/Desktop/work/个人/scss-learn/scss-webpack-element/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: false,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    )
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
