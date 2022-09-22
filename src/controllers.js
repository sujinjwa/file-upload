import fs from "fs";

export const getFile = (req, res) => {
  return res.render("home");
};

export const postFile = (req, res) => {
  const { file } = req;
  console.log(file);
  return res.redirect(`/read/${file.filename}`);
};

export const read = (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  fs.readFile(`uploads/${filename}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      //return res.send(data);
      return res.render("read", { data });
    }
  });
};

// export const upload = multer({ dest: "uploads/" });
