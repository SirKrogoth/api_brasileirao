import { Router } from 'express';
import clubesController from '../controllers/clubesController';
import datasJogosController from '../controllers/datasJogosController';
import accountController from '../controllers/accountController';
import { validadeNewAccountSchema, validateAuthorization } from './accountSchemasMiddleware';

const router = Router();

router.get('/', clubesController.getConnectTest);
router.get('/clubes', validateAuthorization, clubesController.getClubes);
router.get('/clube/:idClube', validateAuthorization, clubesController.getClube);
router.get('/datasJogo', validateAuthorization, datasJogosController.getDatasJogos);
router.get('/jogosDaRodada/:rodada', validateAuthorization, datasJogosController.getJogosDaRodada);
router.get('/getJogosClube/:idClube', validateAuthorization, datasJogosController.getJogosClube);
router.get('/findAllAccounts', validateAuthorization, accountController.findAll);
router.post('/addAccount/', validadeNewAccountSchema, validateAuthorization, accountController.addAccount);
router.post('/accounts/login', accountController.loginAccount);


export default router;