import express from 'express';
import clientController from '../../controllers/client/clientController';

const router = express.Router();

router.get('/clients', clientController.getAllClients)
router.post('/clients/add', clientController.handleAddNewClient)
router.patch('/clients/changeName', clientController.changeClientName)
router.delete('/clients/delete', clientController.deleteClient)

export default router;
