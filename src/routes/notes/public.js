const Router = require('@koa/router');
const c = require('./controller');

const router = new Router();

module.exports = router
  .get('/notes/public', c.getPublicCategories)
  .get('/notes/public/:id', c.getSinglePublicCategory)
  .get('/notes/public/:id/data', c.getPublicData);
