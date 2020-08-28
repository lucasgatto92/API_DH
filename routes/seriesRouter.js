var express = require('express');
var router = express.Router();
var seriesApiController = require("../controllers/seriesController");

router.get("/", seriesApiController.todas);
router.get("/:id", seriesApiController.una);
router.post("/create", seriesApiController.crear);

module.exports = router;