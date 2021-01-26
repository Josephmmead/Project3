const router = require("express").Router();
const CharityController = require("../../controllers/CharityControllers");


router.route("/")
    .get(CharityController.findAll)

router.route("/:id")
    .get(CharityController.findById)

router.route("/:acceptedItems")
    .get(CharityController.findByAcceptedItem);

router.route("/:causes")
    .get(CharityController.findByCauses);
    
router.route("/:name")
    .get(CharityController.findByName);

router.route("/:zipCode")
    .get(CharityController.findByZipCode);

router.route("/:city")
    .get(CharityController.findByCity);

router.route("/SignUp")
    .post(CharityController.create)
    .put(CharityController.update)
    .delete(CharityController.remove)

module.exports = router;



    