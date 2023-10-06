// Aca desarrollo los manejadores, los cuales van a manejar la res invocando a los controller de ser necesarios
//manejador interno que decide a que controller llamar 

const { allDrivers, detailDriverById} = require("../controller/driversController");

const allDriversHandler= async (req, res)=>{
    
    try {
        const driversInfo = await allDrivers;
        return res.status(200).json(driversInfo);
    } catch (error) {
        return res.status(400).json({
            message: "There was a problem obtaining drivers information",
            error: error.message,
         });
    }
};

const detailDriverHandler = async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api"  // Aca voy a verificar si la fuente que debo revisar es de la base o de la Api (id  son dos diferentes). 

    try {
        const response = await detailDriverById(id, source); // aca ahorro el paso, ya que le paso el ID y la fuente a buscar. 
        res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({
            message: "There was a problem obtaining driver information",
            error: error.message,
        });
    }
};

const namesDriversHandler = (req, res)=>{
    res.status(200).send("busco los nombres")
};

const createDriverHandler = (req, res)=>{
    const {firstname, lastname} = req.body;

    res.status(200).send(`creacion del driver ${firstname} de apellido ${lastname}`)
};

// los exporto en forma de objeto

module.exports = {
    allDriversHandler,
    detailDriverHandler,
    namesDriversHandler,
    createDriverHandler,
}

// Recorda 
// id > params = con destructuring {id} = req.params
// creacion > body, cierta informacion 
// query > ?name=name&raza 
// 01.30