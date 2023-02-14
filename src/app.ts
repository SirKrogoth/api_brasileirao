import express, { Router } from 'express';
import helmet from 'helmet';
import brasileiraoRoute from './routes/brasileiraoRoute';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(brasileiraoRoute);

export default app;