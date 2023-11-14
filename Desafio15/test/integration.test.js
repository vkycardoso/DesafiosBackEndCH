import {app} from "../src/app.js";
import supertest from "supertest";
import chai from "chai";
import {productsModel} from "../src/dao/models/products.model.js";

const expect = chai.expect;
const requester = supertest(app);//elemento para hacer peticiones al servidor.

describe("Pruebas app productos", function(){
    describe("Pruebas del modulo productos", function(){

        this.timeout(10000);

        beforeEach(async()=>{
            await productsModel.deleteMany({}); // antes de hacer un testeo borro la coleccion de mascotas
        });

        it("El endpoint POST /api/products debe crear un producto correctamente en la db", async()=>{
            const prodMock = {
                title: "Zapatilla Nike",
                description: "Zapatilla Nike azul y verde",
                price: 56000,
                stock: 100,
                //thumbnail: "",
                code: "000001",
                category: "Zapatillas",
                status: true
            };
            const response = await requester.post("/api/products").send(prodMock);
            //console.log(response);
            expect(response.body.status).to.be.equal("success");
            expect(response.body.newproduct).to.have.property("_id"); // espero que body.newproduct tenga un elemento _id
            expect(response.body.newproduct.title).to.be.equal(prodMock.title); // espero que body.newproduct.title tenga un elemento igual al title que le paso
        });
        
        it("Si se desea crear un producto sin el campo title, el módulo debe responder con un status 400." , async ()=>{
            const prodMock = {
                description: "Zapatilla Nike azul y verde",
                price: 56000,
                stock: 100,
                thumbnail: null,
                code: null,
                category: "Zapatillas",
                status: true
            };
            const response = await requester.post("/api/products").send(prodMock);
            //console.log(response);
            expect(response.statusCode).to.be.equal(400);
        });

        it("Al obtener a los productos con el método GET, la respuesta debe tener los campos status y newproduct. Además, newproduct debe ser de tipo arreglo.", async()=>{
            const response = await requester.get("/api/products");
            console.log(response);
            expect(response.body).to.have.property("status");
            expect(response.body.payload).to.be.ok();
        });

    });
});