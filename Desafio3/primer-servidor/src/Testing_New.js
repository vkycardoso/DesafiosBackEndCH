//const ProductManager = require('./ProductManager.js');
import { ProductManager } from "./ProductManager.js";

// Crear una instancia de ProductManager
const manager = new ProductManager('products.json');

// Obtener los productos (debe devolver un arreglo vacío [])
console.log("Obtener los produtos: ",manager.getProducts());

// Agregar un producto
let product = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
};
manager.addProduct(product);

product = {
    title: 'producto  1',
    description: 'Este es un producto 1',
    price: 100,
    thumbnail: 'Sin imagen',
    code: 'abc124',
    stock: 45,
};
manager.addProduct(product);
product = {
    "id": 3,
    "title": "producto  2",
    "description": "Este es un producto 2",
    "price": 104,
    "thumbnail": "Sin imagen",
    "code": "abc125",
    "stock": 90
  }
  manager.addProduct(product);

// Obtener los productos nuevamente (debe aparecer el producto recién agregado)
console.log("Productos cargados: ",manager.getProducts());

// Obtener un producto por su ID (especifica un ID válido para tu caso)
const productId = 1;
const foundProduct = manager.getProductById(productId);
console.log("Producto por ID: ",foundProduct);

// Actualizar un producto (especifica un ID válido y los campos a actualizar)
const updatedFields = { price: 250 };
manager.updateProduct(productId, updatedFields);

// Eliminar un producto (especifica un ID válido)
//manager.deleteProduct(productId);
//console.log("Obtener los produtos nuevamente: ",manager.getProducts());