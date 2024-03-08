import express, { Router } from 'express';
import helmet from 'helmet';
import brasileiraoRoute from './routes/brasileiraoRoute';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(brasileiraoRoute);
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

export default app;