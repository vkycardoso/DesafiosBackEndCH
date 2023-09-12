export const config = {
    server:{
        port:8080,
        secretSession:"claveSecretaSessions"
    },
    fileSystem:{
        productsFile:"products.json",
        cartFile:"carts.json"
    },
    mongo:{
        url:"mongodb+srv://JMMartinez68:mily060601@cluster0.kcahmxv.mongodb.net/ecommerce?retryWrites=true&w=majority"
    },
    github:{
        clientId:"Iv1.8abd785975412e63",
        clienteSecret:"ddc0e544e137eaece827f61d036a9d8e3d3853fb",
        callbackUrl:"http://localhost:8080/api/sessions/github-callback"
    }
}
