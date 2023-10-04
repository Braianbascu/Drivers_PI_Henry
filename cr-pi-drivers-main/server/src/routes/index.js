const { Router } = require("express");

const router = Router();
const routesDriver = require ('./routesDriver');
const routesTeams = require ('./routesTeam');


// router principal.
// le digo al router que en cada ruta general acceda a sus archivos escpecificos de sub rutas 

router.use('/drivers', routesDriver)
router.use('/teams', routesTeams)


module.exports = router;
