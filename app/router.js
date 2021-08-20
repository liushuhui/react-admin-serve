'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware} = app;
  const jwt = middleware.auth(app.config.jwt); // 要和文件名保持一致
  router.post('/login', controller.login.index);
  router.get('/getmenu', jwt, controller.menu.index);
  router.get('/getMenuDetail', jwt, controller.getMenuDetail.index);
  router.post('/updateMenu', jwt, controller.updateMenu.index);
  router.post('/uploadImg',  controller.uploadImg.index);
  router.post('/addArticle', jwt,  controller.addArticle.index);
  router.get('/getImg',  controller.getImg.index);
  router.get('/getArticle', jwt, controller.getArticle.index);
  router.post('/addComment', jwt, controller.addComment.index);
};
