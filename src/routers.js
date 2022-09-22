import express from "express";
import { getFile, postFile, read } from "./controllers";
import upload from "./middleware";

const router = express.Router();

router.route("/").get(getFile).post(upload.single("file"), postFile);
router.get("/read/:filename", read);
//router.get("/", home);
//router.get("/uploads/:id", readFile);
//router.route("/read").post(txtUpload.single("txt"), postRead);

export default router;
