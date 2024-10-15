import { sql } from "../Config/Connection.js";

const getAllEnvio = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Envio');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllEnvio}