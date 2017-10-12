const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
    console.log('Building Angular 2 application into "./www" directory.');
    const basePath = context.opts.projectRoot;
    const baseWWW = basePath + '/www';

    //"ng build --target=production --environment=prod --output-path cordova/www/",

    console.log(execSync(
      "ng build --target=development --environment=dev --output-path cordova/www/",
      {
        maxBuffer: 1024*1024,
        cwd: basePath + '/..'
      }).toString('utf8')
    );
};