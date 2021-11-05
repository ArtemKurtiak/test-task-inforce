const router = require('express').Router();

import { productsController } from '../controllers';

const { addProduct, updateProduct, deleteProduct, getProducts, getProductById } = productsController;

router.post('/', addProduct);

// there must be patch but cors blocks it
router.post('/update', updateProduct);

router.delete('/', deleteProduct);

router.get('/', getProducts);

router.get('/:product_id', getProductById);

export const productsRouter = router;
