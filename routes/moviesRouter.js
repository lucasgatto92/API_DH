var express = require('express');
var router = express.Router();
var moviesApiController = require("../controllers/moviesApiController");

router.get("/", moviesApiController.todas);
router.get("/:id", moviesApiController.una);
router.post("/create", moviesApiController.crear);

module.exports = router;