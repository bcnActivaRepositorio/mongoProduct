// product rotuing
import express from 'express';
// const express = express;
const router = express.Router();

// controller
import productController from '../controllers/productController.mjs';
const productControl = productController;

// api/product 
 router.post('/', productControl.createProduct);
 // get
 router.get('/', productControl.obtainProduct);
 // update
 router.put('/:id', productControl.updateProduct);
// get one
 router.get('/:id', productControl.obtainOneProduct);
// delete one
 router.delete('/:id', productControl.deleteProduct);

 export default router;