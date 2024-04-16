import pool from "../config/db.js";

//Consulta para ingresar datos
const agregarUsuario = async (datos) => {
  try {
    const query = {
      text: "insert into usuarios(nombre,balance)values($1,$2) returning *",
      values: datos,
    };
    const resp = await pool.query(query);
    return resp.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

//consulta de obtener datos
const verUsuario=async()=>{
  try {
    const query = {
      text: "select * from usuarios",
    };
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    console.log(error.message);
  }
};


const editarUsuario= async (datos) => {
  try {
    const query = {
      text: "update usuarios set nombre=$1, balance=$2 where id=$3 returning *",
      values: datos,
    };
    const resp = await pool.query(query);
    return resp.rows;
  } catch (error) {
    console.log(error.message);
  }
};

const borrarUsuario=async(id)=>{
  try{
    const query= {
        text: 'delete from usuarios where id=$1',
        values: [id]
    }
    const response= await pool.query(query);
    if (response.rowCount == 0) {
        throw new Error("Usuario eliminado");
      }
    return response.rows
}catch (error){
    console.log(error.message)
}
}


export { agregarUsuario, verUsuario, editarUsuario, borrarUsuario};
