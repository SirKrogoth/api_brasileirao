import { Router } from 'express';
import clubesController from '../controllers/clubesController';
import datasJogosController from '../controllers/datasJogosController';
import accountController from '../controllers/accountController';

const router = Router();

router.get('/', clubesController.getConnectTest);
router.get('/clubes', clubesController.getClubes);
router.get('/clube/:idClube', clubesController.getClube);
router.get('/datasJogo', datasJogosController.getDatasJogos);
router.get('/jogosDaRodada/:rodada', datasJogosController.getJogosDaRodada);
router.get('/getJogosClube/:idClube', datasJogosController.getJogosClube);
router.post('/accounts/', accountController.addAccount);
router.post('/accounts/login', accountController.loginAccount);


export default router;