const router = require("express").Router();
const CharityController = require("../../controllers/CharityControllers");


router.route("/")
    .get(CharityController.findAll)

router.route("/id/:id")
    .get(CharityController.findById)

router.route("/query/:query")
    .get(CharityController.findBySearch)

router.route("/SignUp")
    .post(CharityController.create)
    .put(CharityController.update)
    .delete(CharityController.remove)

module.exports = router;



    