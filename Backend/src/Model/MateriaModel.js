import { sql } from "../Config/Connection.js";

const getAllMateria = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Materia');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllMateria}