const imgSize = require("image-size");
const fs = require("fs");

module.exports.deleteFile = function deleteFile(file) {
  if (file) fs.unlinkSync(file.path);
};

module.exports.validateDimension = (file, width, height) => {
  let dimension = imgSize(file.path);
  if (dimension.width > width || dimension.height > height) {
    this.deleteFile(file);
    return true;
  }
  return false;
};
