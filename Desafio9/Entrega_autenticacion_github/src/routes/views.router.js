import { Router } from 'express';
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewController } from '../controllers/views.controller.js';

const routerV = Router();

routerV.get("/", ViewController.renderHome);

routerV.get("/realtimeproducts", ViewController.rendeRealTimeProducts);

routerV.get("/chat", ViewController.renderChat);

routerV.get("/registro", showLoginView, ViewController.renderRegistro);

routerV.get("/login", showLoginView, ViewController.renderLogin);

routerV.get("/cambio-password", showLoginView, ViewController.renderCambioPassword);

routerV.get("/profile", checkUserAuthenticated, ViewController.renderProfile);

export {routerV as viewsRouter};
