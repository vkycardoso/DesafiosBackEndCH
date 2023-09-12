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
        clienteSecret:"11b5be0106179aa0e8ede001a61a56ee984d0bfb",
        callbackUrl:"http://localhost:8080/api/session/github-callback"
    }
}
