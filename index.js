import express from "express";
const app=express();
const PORT = process.env.PORT || 3000;
import router from "./routes/routes.js";

//Midleware
app.use(express.json());
app.use(express.static("img"));
app.use(express.static('assets'));
app.use("/",router);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);