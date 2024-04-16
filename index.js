import express from "express";
const app=express();
const PORT = process.env.PORT || 3000;
import router from "./routes/routes.js";
import cash from "./routes/dinero.js"

//Midleware
app.use(express.json());
app.use("/",router);
app.use("/",cash);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);