const { Router } = require("express");

const router = Router();

const {allTeamsHandler} = require ("../handler/teamsHandler")

router.get("/", allTeamsHandler );

module.exports = router;