const router = require("express").Router();

const UsersController = require("../controller/UsersController");


router.post("/login", UsersController.login);

router.post("/save", UsersController.create);

router.get("/", UsersController.read);

module.exports = router;