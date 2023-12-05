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
} = require("../controllers/managerController");
const { managerAuthMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/verify-email/:verify_id", verifyEmailController);
router.get("/profile", managerAuthMiddleware, getProfileController);
router.patch("/edit-profile", managerAuthMiddleware, editProfileController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:reset_id", resetPasswordController);

module.exports = router;
