import express,{ Router} from 'express';
import { parser_v2 } from '../../controllers/parserController';

const router: Router = express.Router();
router.post('/parse', parser_v2);
export default router;