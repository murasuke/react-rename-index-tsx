const path = require('path');
module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/entry-point.tsx');
    return paths;
  },
};
