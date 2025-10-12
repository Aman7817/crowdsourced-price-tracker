// routes/productRoutes.js
import { Router } from "express";
import verifyjwt from "../middlewares/auth.middlewares.js";
import { 
  addProduct, 
  getAllProducts, 
  getProduct, 
  refreshProduct,
  scanProduct,      
  deleteProduct,    
  getPriceHistory   
} from "../controllers/productController.js";

const router = Router();

// ✅ Protect all routes
router.use(verifyjwt);

// ✅ Define all routes
router.route('/add-product').post(addProduct);
router.route('/all-products').get(getAllProducts);
router.route('/product/:id').get(getProduct);
router.route('/delete/:id').delete(deleteProduct);    
router.route('/scan/:id').post(scanProduct);          
router.route('/history/:id').get(getPriceHistory);    
router.route('/refresh/:id').put(refreshProduct);     

export default router;