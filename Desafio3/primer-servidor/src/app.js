// const express = require("express");
import express from "express";
import { ProductManager } from "./ProductManager.js";


const port = 8080;

//creamos la aplicacion del servidor
const app = express();

//levantar el servidor
app.listen(port,()=>console.log(`El servidor esta escuchando en el puerto ${port}`));

// Hasta acá está la parte del servidor!!!!

//crear la instancia de la clase
const productService = new ProductManager(`./src/products.json`);
let resultado = 0;

app.get("/products",(req,res)=>{
    try {
        const result = productService.getProducts();
        console.log("result: ", result);
        const limite = parseInt(req.query.limit);
        console.log("limite: ", limite);
        if (limite>0) {
            resultado = result.filter(producto=>producto.id <= limite);
        } else {
            resultado = result;
        }
        res.send(resultado);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/products/:pid",(req,res)=>{
    try {
    const pid = parseInt(req.params.pid);
    const result = productService.getProductById(pid);
    if (!result) {
        console.log("El producto no existe!");
    } else {
        res.send(result);
    }
    
    } catch (error) {
        res.send(error.message);
    }
});




/*
//arreglo de usuarios
const users = [
    {id:1,nombre:"pepe", edad:20, genero:"M"},
    {id:2,nombre:"juan", edad:30, genero:"M"},
    {id:3,nombre:"ana", edad:40, genero:"F"},
];

//definimos las rutas
app.get("/saludo",(request,response)=>{
    response.send("Hola a todos con express y coder y nodemon");
});

app.get("/bienvenida",(req,res)=>{
    res.send("<p style='color:blue'>Bienvenidos</p>");
});

app.get("/usuario", (req,res)=>{
    res.send({nombre:"pepe", edad:20, correo:"pepe@gmail.com"});
});

app.get("/usuarios",(req,res)=>{
    res.send(users);
});

// http://localhost:8080/usuarios/2
app.get("/usuarios/:userId",(req,res)=>{
    // console.log("params", req.params);
    const userId = parseInt(req.params.userId);
    // console.log("userId",userId);
    const user = users.find(elm=>elm.id === userId);
    if(!user){
        res.send("El usuario no existe");
    } else {
        res.send(user);
    }
});

//http://localhost:8080/consulta?genero=M
app.get("/consulta",(req,res)=>{
    //obtener los query params
    console.log("query params",req.query);
    const genero = req.query.genero;
    // console.log("genero",genero);
    const filteredUsers = users.filter(usuario=>usuario.genero === genero);
    res.send(filteredUsers);
});
*/