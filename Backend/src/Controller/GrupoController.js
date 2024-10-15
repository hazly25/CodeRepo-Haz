import { getAllGrupo } from "../Model/GrupoModel.js";

const getAllG = async (req, res) =>{
    try {
        const grupos = await getAllGrupo();
        res.json(grupos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllG}