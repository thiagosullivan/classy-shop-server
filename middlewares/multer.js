import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Multer - destino:", file);
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log("Multer - arquivo recebido:", {
      fieldname: file.fieldname,
      originalname: file.originalname,
      mimetype: file.mimetype,
    });
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log("Multer fileFilter - campo:", file.fieldname);
    console.log("Multer fileFilter - arquivo:", file.originalname);
    cb(null, true);
  },
});

export default upload;
