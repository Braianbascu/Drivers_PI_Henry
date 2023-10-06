const axios = require ('axios');
const {Driver,Teams } = require ('../db');
const {API_URL} = process;

//Me traigo todos los Drivers de la API.
const allDrivers = async (req,res)=>{
    try {
        const apiResponse = await axios.get (API_URL)
        const apiData = apiResponse.data;
         
        //uso el metodo findAll para trae todos los registros en DB.
        const dbData = await Driver.findAll();

        const defaultImage = 'https://p0.pikist.com/photos/498/173/lego-figure-race-pilot-helmet-geert-block-f1-car.jpg';
       
        //Asigno los valores correspondientes en el mapeo. 
        const apiDriver = apiData.map((Driver)=>({
            id: Driver.id,
            forename: Driver.name.forename,
            surname: Driver.name.surname,
            description: Driver.description,
            image: Driver.image || defaultImage,
            nationality: Driver.nationality,
            birthday: Driver.birthday,
        }));

        const dbDriver = dbData.map((Driver)=>({
            id: Driver.id,
            forename: Driver.name.forename,
            surname: Driver.name.surname,
            description: Driver.description,
            image: Driver.image || defaultImage,
            nationality: Driver.nationality,
            birthday: Driver.birthday,
        }));

        // combino la info de las dos fuentes
    const allDriversCombined = [...apiDriver, ...dbDriver];
    
    return allDriversCombined;
    
    } catch (error) {
       throw new Error (error.mesagge);
    };
};


const detailDriverById = async (id, source)=>{
    const driver = source === "api" ? (await axios.get (`API_URL${id}`)).data          // Aca, si la fuente anteriormente ya fue declarada de la api busco en la misma mediante una peticion via axios.
    : await Driver.findByPk(id);
    return driver
};




// Exporto los controladores
module.exports= {
    allDrivers,
    detailDriverById
}