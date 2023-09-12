import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import {connectDB} from "./config/configServer.js"
import { __dirname } from "./utils.js"

//socketservers
import socketProducts from "./listeners/socketProducts.js"
import socketChat from './listeners/socketChat.js';
import  viewsRouter  from "./routers/views.router.js";
import { sessionsRouter } from "./routers/sessions.routes.js";
import { config } from "./config/config.js";
import session from "express-session";
import MongoStore from "connect-mongo";



const PORT = config.server.port;
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine())
app.set('views engine', 'handlebars');
app.set("views", __dirname + "/views")

//app.use('/api/products', routerP)
//app.use('/api/carts', routerC)
//app.use('/', routerV);

const httpServer = app.listen(PORT, () => {
    try {
        console.log(`Listening to the port ${PORT}\nAcceder a:`);
        //console.log(`\t1). http://localhost:${PORT}/api/products`)
        //console.log(`\t2). http://localhost:${PORT}/api/carts`);
    }
    catch (err) {
        console.log(err);
    }
});

const socketServer = new Server(httpServer)

socketProducts(socketServer)
socketChat(socketServer)

connectDB()
//configuracion de sesiones
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

//routes
app.use(viewsRouter);
app.use("/api/sessions", sessionsRouter);




