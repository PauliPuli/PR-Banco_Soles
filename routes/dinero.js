import express from "express";
const cash = express.Router();
import { transferir} from "../controllers/transferencias.js";

cash.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


cash.post("/transferencia", async(req,res)=>{
    try{
    const { emisor, receptor, monto, fecha} = req.body;
    const datos=[ emisor, receptor, monto, fecha ];
    console.log(datos);
    console.log(req.body);
    await transferir(datos);
    res.send('Transacción realizada')
    }catch(error){
        res.status(500).send(error.message)
    }
});


export default cash;


