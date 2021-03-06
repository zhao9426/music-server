'use strict';

/**
 * @param {Egg.Application} app - music-server application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/songs', controller.home.showSongs);
  router.get("/token", controller.home.token);
  router.post("/login", controller.user.login);
  router.post("/upload", controller.home.upload);
  router.get("/song-list", controller.home.songList);
  router.get("/new-songs", controller.home.newSongs);
  router.get("/singers", controller.home.singers);
  router.get("/category", controller.home.category);
  router.get("/rank", controller.home.rank);
  router.get("/my/csl", controller.my.showSongList); 
  router.post("/my/csl", controller.my.collectSongList);
  router.get("/my/like-song", controller.my.showLikeSong);
  router.post("/my/like-song", controller.my.likeSong);
  router.delete("/my/like-song/:id", controller.my.destroyLikeSong);
  router.get("/my/like-singer", controller.my.showLikeSinger);
  router.post("/my/like-singer", controller.my.likeSinger);
  /* router.get("/api/comments", controller.comment.index);
  router.get("/api/comments/new", controller.comment.new);
  router.get("/api/comments/:id", controller.comment.show);
  router.get("/api/comments/:id/edit",  controller.comment.edit);
  router.post("/api/comments", controller.comment.create);
  router.put("/api/comments:id",  controller.comment.update);
  router.delete("/api/comments/:id",  controller.comment.destroy); */
  router.resources('comment', '/api/comments', controller.comment);
  router.resources('users', '/api/users', controller.user);
  router.resources('song-list', '/api/song-list', controller.listSong);
  router.resources('song', '/api/song', controller.song);
  router.resources('singer', '/api/singer', controller.singer);
  router.get('/list', controller.listSong.list);
};
