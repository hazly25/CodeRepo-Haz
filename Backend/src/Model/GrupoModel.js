import { sql } from "../Config/Connection.js";

const getAllGrupo = async ()=>{
    try {
        const resultado = await sql.query('SELECT * FROM Grupo');
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllGrupo}