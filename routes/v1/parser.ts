import express,{ Router} from 'express';
import { parser_v1 } from '../../controllers/parserController';

const router: Router = express.Router();
router.post('/parse', parser_v1);
export default router;