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

    console.log(outputDir);
    const VTT = srt2vtt(srt, async (err, vttData) => {
      if (err) throw new Error(err);
      console.log(vttData.toString());
    });
    await writeSubToFile(fileName, outputDir, VTT);
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
 * @param {string} extension - String with extension type
 */
export const writeSubToFile = (
  fileName,
  outputPath,
  extension = ".vtt",
  subtitle
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let file = path.join(outputPath, fileName + extension);
      console.log(`WRITESUBTOFILE ${typeof file} `, file);
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
