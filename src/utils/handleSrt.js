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