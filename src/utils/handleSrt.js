const fs = window.require("fs");
const path = window.require("path");
const srt2vtt = window.require("srt2vtt");

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
export const processSrtToVtt = async filePath => {
  try {
    //  const srt = await processFile(filePath)
    const srt = fs.readFileSync(filePath, "utf8");
    let fileName = path.basename(filePath, ".srt");
    const outputDir = await createDefaultOutputDir(filePath);
    const vtt = await processVTT(srt).then(async res => {
      console.log(`res`, res);
      await writeSubToFile(fileName, outputDir, res);
    });
    console.log(`VTT LOG`, vtt);

    return vtt;
  } catch (Error) {
    console.log(Error);
  }
};

const processVTT = srt => {
  return new Promise(async (resolve, reject) => {
    try {
      let vtt = await srt2vtt(srt, async (err, vttData) => {
        if (err) throw new Error(err);
        console.log(`vttdata from func `, vttData.toString("utf8"));
        let vttContent = vttData.toString("utf8");
        console.log(`vttcontent`, vttContent);
        resolve(vttContent);
      });
      if (!vtt) reject(vtt);
      console.log(vtt);
      return vtt;
    } catch (err) {
      if (err) console.log(err);
      reject(err);
    }
  });
};

/**
 *
 * @param {string} filePath - path to srt file
 */
export const processFile = filePath => {
  return new Promise((resolve, reject) => {
    try {
      if (filePath) {
        const srt = fs.readFileSync(filePath);
        console.log(srt);
        resolve(srt);
      }
    } catch (Error) {
      reject(Error);
    }
  });
};

/**
 *
 * @param {string} outputPath - Path of output
 * @param {string} fileName - Name of file (without extension)
 * @param {object} subtitle - Object consisting of updated subtitle file
 */
export const writeSubToFile = (fileName, outputPath, subtitle) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fileAndExtension = fileName + ".vtt";
      let file = path.join(outputPath, fileAndExtension);
      console.log(`fileandExten`, fileAndExtension);
      console.log(`subtitle content`, subtitle);
      console.log(`WRITESUBTOFILE ${typeof file} `, file);
      if (!subtitle) return "Subtitle is undefined";
      await fs.writeFile(file, subtitle, err => {
        if (err) console.log(err);
        resolve("File Successfully Written to disc");
      });
    } catch (err) {
      reject(err);
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

/**
 *
 * @param {string} filePath
 * -- Creates a directory in the location of the srts provided
 * -- titled VTT_Output
 */
export const createDefaultOutputDir = filePath => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(path.join(dir, "VTT_Output"))) {
    fs.mkdirSync(path.join(dir, "VTT_Output"));
  }
  return path.join(dir, "VTT_Output");
};
