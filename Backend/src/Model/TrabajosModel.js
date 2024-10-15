import { sql } from "../Config/Connection.js";

const getAllTrabajos = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Trabajos');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllTrabajos}