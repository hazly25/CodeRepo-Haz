import { getAllMateria } from "../Model/MateriaModel.js";

const getAllM = async (req, res) =>{
    try {
        const materias = await getAllMateria();
        res.json(materias);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllM}