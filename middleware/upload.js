const multer = require("multer");
const fs = require("fs-extra");
const maxSize = 2 * 1024 * 1024; // 2mb
const util = require("util");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const multerFilter = function (req, file, cb) {
  const acceptedExtensionsList = [".jpg", ".jpeg", ".png"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (acceptedExtensionsList.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file extension"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: maxSize },
});

module.exports = upload;
