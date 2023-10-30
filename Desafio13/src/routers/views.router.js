import { Router } from 'express';
import { ProductManagerMongo } from "../dao/managers/productManagerMongo.js"
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";

const pm = new ProductManagerMongo()

const routerV = Router()


routerV.get("/", async (req, res) => {
    const listadeproductos = await pm.getProductsView()
    res.render("home", { listadeproductos })
})

routerV.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts")
})

routerV.get("/chat", (req, res) => {
    res.render("chat")
})

routerV.get("/registro",showLoginView,(req,res)=>{
    res.render("signup");
});

routerV.get("/login", showLoginView, (req,res)=>{
    res.render("login");
});

routerV.get("/profile", checkUserAuthenticated, (req,res)=>{
    console.log(req.session);
    res.render("profile",{user: req.session.userInfo});
});


export default routerV