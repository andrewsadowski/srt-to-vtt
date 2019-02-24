const fs = require('fs');
const srt2vtt = require('srt2vtt');



/**
 * how to run srt2vtt lib
 * var srtData = fs.readFileSync('captions.srt');
srt2vtt(srtData, function(err, vttData) {
  if (err) throw new Error(err);
  fs.writeFileSync('captions.vtt', vttData);
});
 */