import { getAllTrabajos } from "../Model/TrabajosModel.js";

const getAllT = async (req, res) =>{
    try {
        const trabajos = await getAllTrabajos();
        res.json(trabajos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllT}