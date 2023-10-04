const { Router } = require("express");

const routerDriver = Router();
const {allDriverHandler} = require ("../handler")
// genero el manejador, como el cajero del super recibe req y da la resp que trabajo el controller
// me traigo los handler 


routerDriver.get("/dirvers",allDriverHandler)


