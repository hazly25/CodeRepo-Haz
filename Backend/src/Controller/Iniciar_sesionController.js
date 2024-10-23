import { IniciarSesion } from "../Model/Iniciar_sesionModel.js";

const Iniciar = async (req, res) => {
    try {
        const { Correo, Contraseña, Rol } = req.body;  

        const usuario = await IniciarSesion(Correo, Contraseña, Rol);
        
        res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Error al iniciar sesión', error: error.message });
    }
};

export { Iniciar };
