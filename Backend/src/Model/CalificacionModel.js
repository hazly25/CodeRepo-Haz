import { sql } from "../Config/Connection.js";

const getAllCalificacion = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Calificacion');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllCalificacion}