var Promise = require('songbird');
var fs = require('fs');

// callback API
fs.readFile('./package.json', 'utf8', function(err, pkg) {
  console.log('callbacks', pkg);
});

// songbird API
fs.promise.readFile('./package.json', 'utf8').then(function(pkg) {
  console.log('promise', pkg);
});

Promise
  .join(
    fs.promise.readFile('./package.json', 'utf8'),
    fs.promise.readFile('./songbird.js', 'utf8')
  )
  .spread(function(pkg, songbird) {
    console.log('package.json length is', pkg.length);
    console.log('songbird.js length is', songbird.length);
  });
