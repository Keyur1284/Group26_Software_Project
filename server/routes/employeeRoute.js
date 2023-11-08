const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  getProfileController,
  editProfileController,
  forgotPasswordController,
  verifyIdAndTokenController,
  resetPasswordController,
} = require("../controllers/employeeController");
const { employeeAuthMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/profile", employeeAuthMiddleware, getProfileController);
router.patch("/edit-profile", employeeAuthMiddleware, editProfileController);

router.post("/forgot-password", forgotPasswordController);
router.get("/reset-password/:id/:token", verifyIdAndTokenController);
router.post("/reset-password/:id/:token", resetPasswordController);

module.exports = router;
