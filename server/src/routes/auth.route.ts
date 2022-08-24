import { Router } from "express";
import { validateGetProfile } from "../validations/profile-validation";
import { validate } from "../middlewares/validate";
import { createUser, getUser } from "../controllers/auth-controller";

const router: Router = Router();

router.route("/signup").post(createUser);

router.route("/").get().post(getUser);

router.route("/forgotPassword").post(validate(validateGetProfile), createUser);

export default router;
