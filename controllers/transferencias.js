import pool from "../config/db.js";

  const transferir = async (emisor, receptor, monto, fecha)=> {
    const cambiarEmisor = {
        text:'update transferencias set balance = balance - $1 where id = $2 returning *',
        values: [emisor, receptor, monto, fecha]
    }
    const cambiarReceptor = {
    text:'update transferencias set balance = balance + $1 where id = $2 returning *',
    values:[emisor, receptor, monto, fecha]
}

    const crearTransferencia = {
        text: 'insert into transferencias (emisor, receptor, monto, fecha) values ($1,$2,$3,$4,$5) returning *',
        values: [emisor, receptor, monto, fecha],
    }
    try{
        await pool.query('begin');
        
        await pool.query(cambiarEmisor);

        await pool.query(cambiarReceptor);

        const result = await pool.query(crearTransferencia);
    
        await pool.query('commit');

        console.log('Transaccion Realizada con exito')
        console.log(result.rows[0])


    }catch(err){console.log(err)}
  };

  export {transferir}