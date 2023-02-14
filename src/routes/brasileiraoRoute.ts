import { Router } from 'express';
import brasileiraoController from '../controllers/brasileiraoController';

const router = Router();

router.get('/', brasileiraoController.getConnectTest);

export default router;