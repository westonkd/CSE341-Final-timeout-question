const {Router} = require("express");
const router = Router();
const openCors = require('../middleware/openCors');
const {getOneApartment} = require("../controllers/apartments");

router.use([openCors]);
router.get("/:id", getOneApartment);

module.exports = router;