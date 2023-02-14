import express, { Router } from 'express';
import helmet from 'helmet';
import brasileiraoRoute from './routes/brasileiraoRoute';

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(helmet());
app.use(express.json());
app.use(brasileiraoRoute);

app.listen(port);
console.log(`executando na porta ${port}`);