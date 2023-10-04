const { Router } = require("express");

const router= Router();
 // genero los endpoint especificos de drivers (recorda ya sabe que antes dice driver) y los derivo a los handler correspondientes.

 // me traigo los handler con destructuring
const {allDriversHandler, detailDriverHandler, namesDriversHandler, createDriverHandler} = require ("../handler/driversHandler")

router.get("/", allDriversHandler);

router.get("/:id", detailDriverHandler);

router.get("/name?=", namesDriversHandler);


router.post("/", createDriverHandler);




module.exports = router;
