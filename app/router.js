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
  // router.get("/my/song-list", controller.my.songList);
  router.get("/my/csl", controller.my.showSongList); //我的歌单或我收藏的歌单
  router.post("/my/csl", controller.my.collectSongList) //收藏歌单
  router.get("/my/like-song", controller.my.showLikeSong);
  router.post("/my/like-song", controller.my.likeSong);
  router.get("/my/like-singer", controller.my.showLikeSinger);
  router.post("/my/like-singer", controller.my.likeSinger);
  router.resources('comment', '/api/comments', controller.comment);
  router.resources('users', '/api/users', controller.user);
  router.resources('song-list', '/api/song-list', controller.listSong);
  router.resources('song', '/api/song', controller.song);
  router.resources('singer', '/api/singer', controller.singer);
  router.get('/list', controller.listSong.list);
};
