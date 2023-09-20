import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';

const routerP = Router()

routerP.get('/', ProductsController.getProducts)

routerP.get("/:pid", ProductsController.getProductID);

routerP.post("/", ProductsController.createProduct);

routerP.put("/:pid", ProductsController.updateProduct);

routerP.delete("/:pid", ProductsController.deleteProduct);

export default routerP