const fs = require("fs");
const path = require("path");
const srt2vtt = require("srt2vtt");

/**
 * how to run srt2vtt lib
 * var srtData = fs.readFileSync('captions.srt');
srt2vtt(srtData, function(err, vttData) {
  if (err) throw new Error(err);
  fs.writeFileSync('captions.vtt', vttData);
});
 */

/**
 *
 * @param {string} filePath
 */
const processSrtToVtt = async filePath => {
  try {
    //  const srt = await processFile(filePath)
    const srt = fs.readFileSync(filePath);
    console.log(srt);
    const VTT = srt2vtt(srt, (err, vttData) => {
      if (err) throw new Error(err);
      console.log(vttData.toString());
    });
    console.log(VTT);
    return VTT;
  } catch (Error) {
    console.log(Error);
  }
};

/**
 *
 * @param {string} filePath - path to srt file
 */
const processFile = filePath => {
  return new Promise((resolve, reject) => {
    try {
      if (filePath) {
        const srt = fs.readFileSync(filePath);
        resolve(srt);
      }
    } catch (Error) {
      reject(Error);
    }
  });
};

/**
 *
 * @param {string} outputNameAndPath - Path and Name of output
 * @param {object} subtitle - Object consisting of updated subtitle file
 */
const writeSubToFile = (outputNameAndPath, subtitle) => {
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
const handleDirOfSubs = inputPath => {
  const dirArr = fs.readdirSync(inputPath);
  const dirPath = inputPath;
  dirArr.forEach(file => {
    let filePath = path.join(dirPath, file);
    // handle file handling here:
  });
  return dirArr;
};

module.exports = {
  handleDirOfSubs,
  processSrtToVtt,
  processFile,
  writeSubToFile
};

// console.log(
//   processSrtToVtt(
//     "/Users/andrewsadowski/dev/react-projects/srt-to-vtt/test.srt"
//   )
// );
