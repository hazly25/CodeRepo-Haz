import { getAllEnvio } from "../Model/EnvioModel.js";

const getAllE = async (req, res) =>{
    try {
        const envios = await getAllEnvio();
        res.json(envios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {getAllE}