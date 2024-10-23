import { RegistrarM } from "../Model/RegistrarModel.js";

const Registro = async (req, res) => {
    try {
        const { Id_usuario, Rol, Nombre, Correo, Contraseña } = req.body;

        const nuevoUsuario = await RegistrarM(Id_usuario, Rol, Nombre, Correo, Contraseña);
        
        res.status(201).json({ message: 'Usuario registrado con éxito', usuario: nuevoUsuario });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Error al registrar el usuario Backend', error: error.message });
    }
};

export { Registro };
