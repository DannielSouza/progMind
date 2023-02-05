const router = require("express").Router()
const ThoughtController = require('../controllers/ThoughtController')

router.post("/create", ThoughtController.create)
router.post("/getAll", ThoughtController.getUserThoughts)
router.delete("/delete/:id", ThoughtController.deleteThought)

module.exports = router