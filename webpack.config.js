var buildpath = __dirname + '/build/';

module.exports = {
  entry:['./client/js/helloworld.jsx'],
  output: {
    path: buildpath,
    filename: 'js/helloworld.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
