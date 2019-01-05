'use strict';

/**
 * @param {Egg.Application} app - music-server application
 */
module.exports = app => {
  
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.resources('users', '/api/users', controller.user);
  router.resources('song-list', '/api/song-list', controller.listSong);
  router.resources('song', '/api/song', controller.song);
  router.get('/list', controller.listSong.list);
};
