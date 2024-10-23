import { sql } from "../Config/Connection.js";

const RegistrarM = async (Id_usuario, Rol, Nombre, Correo, Contraseña) => {
    try {
        const query = `
            INSERT INTO Usuario (Id_usuario, Rol, Nombre, Correo, Contraseña)
            VALUES (@Id_usuario, @Rol, @Nombre, @Correo, @Contraseña)
        `;
        const resultado = await sql.query(query, {
            Id_usuario, 
            Rol, 
            Nombre, 
            Correo, 
            Contraseña
        });
        return resultado.recordset;
    } catch (error) {
        throw error;
    }
};

export { RegistrarM };
