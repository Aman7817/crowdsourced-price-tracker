import { Router } from "express";
import { addProduct, getAllProducts, getProduct, refreshProduct } from "../controllers/productController.js";

const router = Router();

router.route('/add-product').post(addProduct)
router.route('/all-products').get(getAllProducts)
router.route('/product/:id').get(getProduct)
router.route('/delete').put(refreshProduct)

export default router