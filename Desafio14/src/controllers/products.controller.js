import { ProductService } from '../services/products.service.js';
import { ProductManagerMongo } from '../dao/managers/productManagerMongo.js';
const pm = new ProductManagerMongo()

export class ProductsController {

    static getProducts = async (req, res) => {
        try {
            let { limit, page, sort, category } = req.query
            const options = {
                page: Number(page) || 1,
                limit: Number(limit) || 10,
                sort: { price: Number(sort) }
            };
            if (!(options.sort.price === -1 || options.sort.price === 1)) {
                delete options.sort
            }
            const links = (products) => {
                let prevLink;
                let nextLink;
                if (req.originalUrl.includes('page')) {
                    // Si la URL original contiene el parámetro 'page', entonces:
                    prevLink = products.hasPrevPage ? req.originalUrl.replace(`page=${products.page}`, `page=${products.prevPage}`) : null;
                    nextLink = products.hasNextPage ? req.originalUrl.replace(`page=${products.page}`, `page=${products.nextPage}`) : null;
                    return { prevLink, nextLink };
                }
                if (!req.originalUrl.includes('?')) {
                    // Si la URL original NO contiene el carácter '?', entonces:
                    prevLink = products.hasPrevPage ? req.originalUrl.concat(`?page=${products.prevPage}`) : null;
                    nextLink = products.hasNextPage ? req.originalUrl.concat(`?page=${products.nextPage}`) : null;
                    return { prevLink, nextLink };
                }
                // Si la URL original contiene el carácter '?' (otros parámetros), entonces:
                prevLink = products.hasPrevPage ? req.originalUrl.concat(`&page=${products.prevPage}`) : null;
                nextLink = products.hasNextPage ? req.originalUrl.concat(`&page=${products.nextPage}`) : null;
                return { prevLink, nextLink };
            }
            // Devuelve un array con las categorias disponibles y compara con la query "category"
            const categories = await ProductService.categories();
            const result = categories.some(categ => categ === category)
            if (result) {
                const products = await ProductService.getProducts({ category }, options);
                const { prevLink, nextLink } = links(products);
                const { totalPages, prevPage, nextPage, hasNextPage, hasPrevPage, docs } = products
                return res.status(200).send({ status: 'success', payload: docs, totalPages, prevPage, nextPage, hasNextPage, hasPrevPage, prevLink, nextLink });
            }
            const products = await ProductService.getProducts({}, options);
            const { totalPages, prevPage, nextPage, hasNextPage, hasPrevPage, docs } = products
            const { prevLink, nextLink } = links(products);
            return res.status(200).send({ status: 'success', payload: docs, totalPages, prevPage, nextPage, hasNextPage, hasPrevPage, prevLink, nextLink });
        } catch (err) {
            console.log(err);
        }
    };

    static getProductID = async (req, res) => {
        const { pid } = req.params
        const productfind = await ProductService.getProductById(pid);
        res.json({ status: "success", productfind });
    };

    static createProduct = async (req, res) => {
        const obj = req.body
        const newproduct = await ProductService.addProduct(obj);
        res.json({ status: "success", newproduct });
    };

    static updateProduct = async (req, res) => {
        const { pid } = req.params
        const obj = req.body
        const updatedproduct = await ProductService.updateProduct(pid, obj);
        console.log(updatedproduct)
        res.json({ status: "success", updatedproduct });
    };

    static deleteProduct = async (req, res) => {
        const id = req.params.pid
        const deleteproduct = await ProductService.deleteProduct(id);
        res.json({ status: "success", deleteproduct });
    };
}