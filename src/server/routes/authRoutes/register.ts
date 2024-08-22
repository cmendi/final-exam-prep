import express from "express";
import config from "../../config";
import * as jwt from "jsonwebtoken";
import db from "../../db";
import { generateHash } from "../../utils/password";

const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		const newUser = { email, password };
		newUser.password = generateHash(newUser.password);
		const result = await db.users.insert(newUser);
		const token = jwt.sign({ id: result.insertId, email: newUser.email }, config.jwt.secret, { expiresIn: config.jwt.expiration });
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: "register isnt working please check your code!", error });
	}
});

export default registerRouter;
