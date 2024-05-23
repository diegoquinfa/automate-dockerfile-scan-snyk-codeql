import qr from 'qr-image';

const createQR = (url) => {
  const urlExplited = url.split('^');
  const urlJoined = urlExplited.join('/');

  const QR = qr.image(urlJoined, { type: 'png' });

  return QR;
};

export default { createQR };
