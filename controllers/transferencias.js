import pool from "../config/db.js";

const crearTransferencia= async (datos) => {
    try {
      const query = {
        text: "insert into transferencias (emisor, receptor, monto, fecha) values($1,$2,$3,$4) returning *",
        values: datos,
      };
      const response = await pool.query(query);
      return response.rows[0];
    } catch (error) {
      console.log(error.message);
    }
  };

  
  export {crearTransferencia}