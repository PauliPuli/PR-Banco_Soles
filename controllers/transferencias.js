import pool from "../config/db.js";

const transferir = async (datos) => {
  const [emisor, receptor, monto] = datos;
  const { id: emisorId } = (
    await pool.query(`select * from usuarios where nombre='${emisor}'`)
  ).rows[0];
  const { id: receptorId } = (
    await pool.query(`select * from usuarios where nombre='${receptor}'`)
  ).rows[0];
  const addTransferencia = {
    text: "insert into transferencias(emisor,receptor,monto,fecha) values ($1,$2,$3,now()) returning *",
    values: [emisorId, receptorId, monto],
  };
  const actualizarEmisor = {
    text: "update usuarios set balance= balance - $1 where nombre=$2 returning *",
    values: [monto, emisor],
  };
  const actualizarReceptor = {
    text: "update usuarios set balance= balance + $1 where nombre=$2 returning *",
    values: [monto, receptor],
  };
  try {
    await pool.query("begin");

    await pool.query(actualizarEmisor);

    await pool.query(actualizarReceptor);

    const result = await pool.query(addTransferencia);

    await pool.query("commit");

    console.log("Transacción Realizada con exito");
    console.log(result.rows);
    return true;
  } catch (err) {
    console.log(err.message);
  }
};

const verTransferencias = async () => {
  try {
    const sql = {
      text:`SELECT
      e.nombre AS emisor,
      r.nombre AS receptor,
      t.monto,
      t.fecha
      FROM
      transferencias t
      JOIN
      usuarios e ON t.emisor = e.id
      JOIN
      usuarios r ON t.receptor = r.id;`,
      rowMode:"array"
    };
    const resp = await pool.query(sql);
    console.log(resp.rows);
    return resp.rows;
  } catch (error) {
    console.log(error.message);
  }
};

export { transferir, verTransferencias };
