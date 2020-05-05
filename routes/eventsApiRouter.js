var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var eventsController = require("../controllers/eventsController")

router.route("/")
      .get(eventsController.findAll)
      .post(eventsController.create)

router.route("/search").post(eventsController.findByCriteria)


router.route(":/id")
      .get(eventsController.findById)
      .put(eventsController.update)
      .delete(eventsController.delete)

module.exports = router;
