class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Validar que el campo "code" no se repita
        if (this.products.some((product) => product.code === code)) {
            console.error(`El producto con el código ${code} ya existe`);
            return;
        }

        // Crear el nuevo producto con un id autoincrementable
        const newProduct = {
            id: this.nextId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        this.nextId++;

        console.log("Producto agregado:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}

// Ejemplo de uso
const manager = new ProductManager();

manager.addProduct("Producto 1", "Descripción 1", 10.99, "imagen1.jpg", "001", 100);
manager.addProduct("Producto 2", "Descripción 2", 19.99, "imagen2.jpg", "002", 50);

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3));