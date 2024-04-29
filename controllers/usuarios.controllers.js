import {
  agregarUsuario,
  verUsuario,
  editarUsuario,
  borrarUsuario,
} from "../queries/consultas.query.js";

const agregarCliente = async (req, res) => {
  try {
    const { nombre, balance } = req.body;
    const datos = [nombre, balance];
    console.log(datos);
    console.log(req.body);
    await agregarUsuario(datos);
    res.send("Usuario agregado a la base de datos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const verCliente = async (req, res) => {
  const response = await verUsuario(); //
  res.json(response);
};

const editarCliente = async (req, res) => {
  try {
    const { nombre, balance, id } = req.body;
    const datos = [nombre, balance, id];
    // console.log(datos);
    // console.log(req.body)
    await editarUsuario(datos);
    res.send("Cambios realizado con éxito");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const borrarCliente=async (req, res) => {
    try{
    const { id } = req.query;
    await borrarUsuario(id);
    res.send("El usuario ha sido eliminado de la base de datos");
    }
    catch(error){
        res.status(500).send('No hemos logrado concretar su petición, lo sentimos')
    }
  };

export { agregarCliente, verCliente, editarCliente, borrarCliente};
