import express from 'express';
import * as providerController from '../controllers/provider.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.post('/', providerController.create);
router.get('/', providerController.getAll);
router.get('/:id', providerController.getById);
router.put('/:id', providerController.update);
router.delete('/:id', providerController.remove);

export default router;