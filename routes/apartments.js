const express = require("express");
const router = express.Router();
const openCors = require("../middleware/openCors");
const {
  getAll,
  getOne,
  createListing,
  updateListing,
  deleteListing,
} = require("../controllers/apartments");

router.use([openCors, express.json()]);
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createListing);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);

module.exports = router;
