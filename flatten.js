'use-strict';

const importResolve = require('import-resolve');

const sassManifests = [
  'pxh-chrome',
  'pxh-chrome-rtl',
  'pxh-prechrome',
  'pxh-prechrome-rtl'
]

sassManifests.forEach( (manifest) => {
  let extension = 'scss';
  let mainPath = `sass/${manifest}.scss`;
  let outputPath =  `dist/sass/${manifest}.scss`;
  importResolve({
    ext: extension,
    pathToMain: mainPath,
    output: outputPath
  });
})
