import * as express from 'express';

import HeroCtrl from './controllers/hero';
import Hero from './models/hero';

export default function setRoutes(app) {

  const router = express.Router();

  const heroCtrl = new HeroCtrl();

  // Heroes
  router.route('/heroes').get(heroCtrl.getAll);
  router.route('/heros/count').get(heroCtrl.count);
  router.route('/hero').post(heroCtrl.insert);
  router.route('/hero/:id').get(heroCtrl.get);
  router.route('/hero/:id').put(heroCtrl.update);
  router.route('/hero/:id').delete(heroCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
