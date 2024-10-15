import { sql } from "../Config/Connection.js";

const getAllUsuario = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Usuario');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllUsuario}