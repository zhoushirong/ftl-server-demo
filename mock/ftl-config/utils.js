let fs = require('fs')
let path = require('path')

/**
 * 将相对路径转换为绝对路径
 * @param {*} url 
 */
function resolve(url) {
  return path.resolve(url)
}


/**
 * 获取目录下的所有文件
 */
function getWatchFilesDir(dirArr) {
  if (Object.prototype.toString.call(dirArr) !== '[object Array]') {
    return;
  }
  let fileArr = [];
  dirArr.forEach((dir) => {
    fileArr = Array.prototype.concat(fileArr, fileArr.concat(getFilePathsFromDir(dir)));
  })
  return fileArr;
}

/**
 * 获取目录下的所有文件
 * @param dir string 目标目录文件夹
 * return arr
 */
function getFilePathsFromDir(dir) {
  let fileArr = [];
  try {
    fs.readdirSync(dir).forEach(file => {
      let fullname = path.join(dir,file);
      let stats = fs.lstatSync(fullname);
      
      if (stats.isFile()) {
        fileArr.push(path.resolve(fullname));
      }
    })
    
    return fileArr;
  } catch(e){
    throw e;
  }
}

/**
 * 获取目录下的所有json文件，并合并成一个数组
 */
function getJsonFromDir(dir) {
  let JsonArr = [];
  try {
    fs.readdirSync(dir).forEach(file => {
      let fullname = path.join(dir, file)
      let json = fs.readFileSync(fullname, 'utf8');
      
      JsonArr = Array.prototype.concat(JsonArr, JSON.parse(json));
    })
  } catch(e) {
    throw e;
  }
  return JsonArr;
}


module.exports = {
  resolve,
  getFilePathsFromDir,
  getJsonFromDir,
  getWatchFilesDir
}