import express from "express";
const router = express.Router();
import path from "path";
import { agregarUsuario, verUsuario, editarUsuario, borrarUsuario } from "../controllers/consultas.js";
const __dirname = import.meta.dirname;

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


//Ruta para agregar usuario
router.post("/usuario", async(req,res)=>{
    const { nombre, balance } = req.body;
    const datos=[ nombre, balance ];
    console.log(datos);
    console.log(req.body);
    await agregarUsuario(datos);
    res.send('Usuario agregado a la base de datos')
});

//Ruta para ver usuario✅
router.get('/usuarios', async (req,res)=>{
    const response = await verUsuario();//
    res.json(response);
  })

  //editar
  router.put('/usuario',async(req,res)=>{
    const {nombre,balance, id}=req.body;
    const datos = [nombre,balance,id];
    console.log(datos);
    console.log(req.body)
await editarUsuario(datos);
    res.send('Cambios realizado con éxito')
  });

  //borrar ✅
  router.delete("/usuario", async (req, res) => {
    const { id } = req.query;
    await borrarUsuario(id);
    res.send("Eliminado");
  });


export default router;