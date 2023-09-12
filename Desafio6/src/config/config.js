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
    }
}
