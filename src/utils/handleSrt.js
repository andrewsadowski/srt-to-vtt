const fs = require('fs');
const path = require('path');
const srt2vtt = require('srt2vtt');

/**
 * how to run srt2vtt lib
 * var srtData = fs.readFileSync('captions.srt');
srt2vtt(srtData, function(err, vttData) {
  if (err) throw new Error(err);
  fs.writeFileSync('captions.vtt', vttData);
});
 */

 export const processSrtToVtt = (filePath) => {
   return async () => {
     const srt = await processFile(filePath)
     const VTT = await srt2vtt(srt);
     return VTT;
   }
 }

 /**
 *
 * @param {string} filePath - path to srt file
 */
export const processFile = filePath => {
  return new Promise((resolve, reject) => {
    if (filePath) {
      const srt = fs.readFileSync(filePath, 'utf-8');
      resolve(srt);
    } else {
      reject(Error);
    }
  });
};

/**
 *
 * @param {string} outputNameAndPath - Path and Name of output
 * @param {object} subtitle - Object consisting of updated subtitle file
 */
export const writeSubToFile = (outputNameAndPath, subtitle) => {
  return new Promise((resolve, reject) => {
    if (outputNameAndPath && subtitle) {
      resolve(
        fs.writeFile(outputNameAndPath, subtitle, err => {
          if (err) return console.log(err);
        })
      );
    } else {
      reject(Error);
    }
  });
};


/**
 *
 * @param {string} inputPath - Path to directory of srts
 */
export const handleDirOfSubs = inputPath => {
  const dirArr = fs.readdirSync(inputPath);
  const dirPath = inputPath;
  dirArr.forEach(file => {
    let filePath = path.join(dirPath, file);
    // handle file handling here:
  });
  return dirArr;
};