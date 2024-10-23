import { sql } from "../Config/Connection.js";

const IniciarSesion = async (Correo, Contraseña, Rol) => {
    try {
        const query = `
            SELECT * FROM Usuario
            WHERE Correo = @Correo AND Contraseña = @Contraseña AND Rol = @Rol
        `;

        const request = new sql.Request();
        request.input('Correo', sql.VarChar, Correo);
        request.input('Contraseña', sql.VarChar, Contraseña);
        request.input('Rol', sql.VarChar, Rol);

        const resultado = await request.query(query);

        if (resultado.recordset.length > 0) {
            return resultado.recordset[0];  
        } else {
            throw new Error('Credenciales incorrectas');
        }
    } catch (error) {
        throw error;
    }
};

export { IniciarSesion };
