import express from 'express';
import productController from '../../controllers/product/productController';

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.post('/products/add', productController.handleAddNewProduct)
router.patch('/products/changePrice', productController.changeProductPrice)
router.delete('/products/delete', productController.deleteClient)


export default router;
