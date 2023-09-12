import { Router } from 'express';
import { ProductManagerMongo } from "../dao/managers/productManagerMongo.js";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";

const pm = new ProductManagerMongo();

const routerV = Router();


routerV.get("/", (req, res) => {
    const listadeproductos = pm.getProductsView()
    res.render("realtimeproducts");
});

routerV.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
});

routerV.get("/chat", (req, res) => {
    res.render("chat");
});

routerV.get("/registro", showLoginView, (req, res) => {
    console.log("Pasa por registro paso 1");
    res.render("signup");
});

routerV.get("/login", showLoginView, (req, res) => {
    res.render("login");
});

routerV.get("/cambio-password", showLoginView, (req, res) => {
    res.render("changePassword");
});

routerV.get("/profile", checkUserAuthenticated, (req, res) => {
    console.log(req.user);
    
    res.render("profile", { user: req.user });
    
});

export {routerV as viewsRouter};
//export default routerV