const { Router } = require("express");
const {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
