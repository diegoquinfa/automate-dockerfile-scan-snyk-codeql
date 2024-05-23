import express from 'express';
import controller from './controller.js';

const qrRouter = express.Router();

qrRouter.get('/:url', (req, res) => {
  const { url } = req.params;

  const QR = controller.createQR(url);

  res.type('png');
  QR.pipe(res);
});

export default qrRouter;
