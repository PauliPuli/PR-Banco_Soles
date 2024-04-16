import express from "express";
const router = express.Router();
import { crearTransferencia } from "../controllers/transferencias.js";

router.post("/transferencia", async(req,res)=>{
    const { nombre, balance } = req.body;
    const datos=[ nombre, balance ];
    console.log(datos);
    console.log(req.body);
    await agregarUsuario(datos);
    res.send('Usuario agregado a la base de datos')
});



