const router = require("express").Router()
const ThoughtController = require('../controllers/ThoughtController')

router.post("/create", ThoughtController.create)
router.post("/getAll", ThoughtController.getUserThoughts)

module.exports = router