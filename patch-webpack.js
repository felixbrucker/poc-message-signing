const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(/node: false/g, "node: {crypto: true, stream: true, fs: 'empty', net: 'empty'}");

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});

const f2 = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/common.js';

fs.readFile(f2, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(/ecma: wco.supportES2015 \? 6 : 5/g, "ecma: 8");

  fs.writeFile(f2, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
