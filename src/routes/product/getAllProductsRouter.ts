import express from 'express';
import productController from '../../controllers/product/productController';

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.post('/products/add', productController.handleAddNewProduct)


export default router;
