import express from "express";
import db from "../../db";
import { compareHash } from "../../utils/password";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	try {
		// Check for users email
		const [userFound] = await db.users.find("email", email);
		// Check for users password
		if (!userFound || !compareHash(password, userFound.password)) {
			return res.status(401).json({ message: "invalid credentials" });
		}

		res.json(`You are now logged in as ${email}`);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Could not log user in, please check code." });
	}
});

export default loginRouter;
