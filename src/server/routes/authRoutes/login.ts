import express from "express";
import config from "../../config";
import * as jwt from "jsonwebtoken";
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
		const token = jwt.sign({ id: userFound.id, email: userFound.email }, config.jwt.secret, { expiresIn: config.jwt.expiration });

		res.json({ token, message: `You are now logged in as ${email}` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Could not log user in, please check code." });
	}
});

export default loginRouter;
