import { Router } from "express";
import { usersService } from "../dao/index.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";
import { SessionsController } from "../controllers/session.controller.js";

const router = Router();

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , SessionsController.signup);

router.get("/fail-signup", SessionsController.failSignup);

router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}), SessionsController.redirectLogin);

router.get("/fail-login", SessionsController.failLogin);

router.post("/changePass", SessionsController.changePassword);

router.get("/loginGithub", passport.authenticate("githubLoginStrategy"));

router.get("/github-callback", passport.authenticate("githubLoginStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}), SessionsController.loginGitHub);

router.get("/logout", SessionsController.logout);

export {router as sessionsRouter};