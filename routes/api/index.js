const router = require("express").Router();
const charityRoutes = require("./charityRoutes");



// charity routes
router.use("/charity", charityRoutes);



module.exports = router;


