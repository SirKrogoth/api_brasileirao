import { Router } from 'express';
import clubesController from '../controllers/clubesController';

const router = Router();

router.get('/', clubesController.getConnectTest);
router.get('/clubes', clubesController.getClubes);

export default router;