import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import {
  agregarCliente,
  verCliente,
  editarCliente,
  borrarCliente,
} from "../controllers/usuarios.controllers.js";

import { crearTransaccion, verTransaciones } from "../controllers/transbank.controllers.js";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//Rutas de usuarios ✅
router.post("/usuario", agregarCliente);
router.get("/usuarios", verCliente);
router.put("/usuario", editarCliente);
router.delete("/usuario", borrarCliente);

//Ruta para transferencias
router.post("/transferencia", crearTransaccion);
router.get("/transferencias", verTransaciones);



export default router;
