const router = require("express").Router();

const ComentController = require("../controller/ComentController");
const { authMiddleware } = require("../helpers/authMiddleware");

router.post("/", ComentController.create);

router.get("/:id", ComentController.read);

router.get("/:id", ComentController.readById);

router.delete("/:id", ComentController.del);

module.exports = router;