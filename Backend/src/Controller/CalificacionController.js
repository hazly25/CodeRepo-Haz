import { getAllCalificacion } from "../Model/CalificacionModel.js";

const getAllC = async (req, res) =>{
    try {
        const calificaciones = await getAllCalificacion();
        res.json(calificaciones);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllC}