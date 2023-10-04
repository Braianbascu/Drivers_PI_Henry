// Aca desarrollo los manejadores, los cuales van a manejar la res invocando a los controller de ser necesarios

const allDriversHandler= (req, res)=>{
    const {name, teams}= req.query;

    if(name) res.status(200).send(`Este es el usuario ${name}`)
    res.status(200).send("aca veo todos los drivers")
};

const detailDriverHandler = (req, res)=>{
    const {id} = req.params;


    res.status(200).send(`detalles del driver ${id}`)
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