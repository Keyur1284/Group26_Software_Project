const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  verifyEmailController,
  getProfileController,
  editProfileController,
  forgotPasswordController,
  resetPasswordController,
} = require("../controllers/employeeController");
const { employeeAuthMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/verify-email/:verify_id", verifyEmailController);
router.get("/profile", employeeAuthMiddleware, getProfileController);
router.patch("/edit-profile", employeeAuthMiddleware, editProfileController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:reset_id", resetPasswordController);

module.exports = router;
