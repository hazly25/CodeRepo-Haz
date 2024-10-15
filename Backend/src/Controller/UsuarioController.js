import { getAllUsuario } from "../Model/UsuarioModel.js";

const getAllU = async (req, res) =>{
    try {
        const usuarios = await getAllUsuario();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllU}