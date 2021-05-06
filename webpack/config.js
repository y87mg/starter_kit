const fs = require('fs');
const path = require('path');

const PATHS = {
  source: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../public'),
};

//Папка с моими страницами
const pages = `${PATHS.source}/pages`;

const getNamesArray = function () {
  const arrayData = [];
  fs.readdirSync(pages, 'utf-8').forEach(function (item) {
    try {
      let name = JSON.parse(fs.readFileSync(`${pages}/${item}/data.json`, 'utf-8')).name;

      if(!name) {
        throw new Error("В data.json отсутствует свойство - name...!");
      }

      arrayData.push(name);
    } catch (err) {
      console.log(err.stack);
    }
  });
  return arrayData;
};

//Массив страниц
const pagesArray = getNamesArray();

const externals = {
  paths: PATHS,
  pages: pages,
  pagesArray: pagesArray,
};

const getPages = function (theArray) {
  let theObject = {};
  for (let i = 0; i < theArray.length; i++) {
    theObject[theArray[i]] = `${pages}/${theArray[i]}/${theArray[i]}.js`;
  }
  return theObject;
};

const entry = getPages(pagesArray);

const output = {
  path: PATHS.build,
  filename: './js/[name].js',
};

module.exports = {
  externals: externals,
  entry: entry,
  output: output,
};
