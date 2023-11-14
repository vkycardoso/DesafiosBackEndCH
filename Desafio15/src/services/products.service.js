import { ProductManagerMongo } from '../dao/managers/productManagerMongo.js';
const pm = new ProductManagerMongo();
export class ProductService{
    static categories = async()=>{
        return await pm.categories();
    }
    static getProducts = async({ category }, options)=>{
        return await pm.getProducts({ category }, options);
    }
    static getProductByID = async(pid)=>{
        return await pm.getProductById(pid);
    }
    static addProduct = async(obj)=>{
        return await pm.addProduct(obj);
    }
    static updateProduct = async(pid,obj)=>{
        return await pm.updateProduct(pid,obj);
    }
    static deleteProduct = async(id)=>{
        return await pm.deleteProduct(id);
    }
    
}