import express from 'express';
import cors from 'cors';
import routerAPI from './network/routes.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routerAPI(app);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});
