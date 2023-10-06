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
router.get('/getLatestsResultsForClub/:idClub', validateAuthorization, datasJogosController.getLatestsResultsForClub);
router.get('/findAllAccounts', validateAuthorization, accountController.findAll);
router.get('/findClubByName/:nomeClube', validateAuthorization, clubesController.getClubByName);
router.post('/addAccount/', validadeNewAccountSchema, validateAuthorization, accountController.addAccount);
router.post('/accounts/login', accountController.loginAccount);
router.post('/addJogosDaRodada', validateAuthorization, datasJogosController.postAddJogosRodada);
router.patch('/setScoreGame', validateAuthorization, datasJogosController.setScoreGame);

export default router;