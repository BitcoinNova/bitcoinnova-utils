'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'BitcoinNovaUtils.js',
    library: 'BitcoinNovaUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web'
}
