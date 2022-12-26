const auth = require("../controllers/auth");

// video
const createVideoRouter = require("../routes/video/create");
const getVideoRouter = require("../routes/video/get");
const getVideosRouter = require("../routes/video/list");
// Thumbnails
const createThumbnailRouter = require("../routes/thumbnail/create");
// content
const createTitleRouter = require("../routes/content/title/create");
const createDescriptionRouter = require("../routes/content/description/create");
//settings
const settingRouter = require("../routes/setting/get");

const express = require("express");
const router = express.Router();

const routes = [
  // Video
  router.get("/api/video/:id", auth, getVideoRouter),
  router.get("/api/video/", auth, getVideosRouter),
  router.post("/api/video/", auth, createVideoRouter),

  // Thumbnail
  router.post("/api/thumbnail/", auth, createThumbnailRouter),

  // Content
  router.post("/api/title/", auth, createTitleRouter),
  router.post("/api/description/", auth, createDescriptionRouter),
  //setting
  router.get("/api/setting/", auth, settingRouter),
];

module.exports = function (app) {
  routes.forEach((route) => app.use(route));
};
