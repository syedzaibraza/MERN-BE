import express from "express";
const router = express.Router();
import controller from "../controllers/controller";

router.route("/").get(controller.Home);
router.route("/register").post(controller.Register);

export default router;
