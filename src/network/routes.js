import express from 'express';
import qrRouter from './../controllers/qr_img/network.js';

const routerAPI = (app) => {
  const router = express.Router();
  app.use('/', express.static('public'));
  app.use('/api', router);
  router.use('/qr', qrRouter);
};

export default routerAPI;
